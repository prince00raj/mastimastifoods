// Google Apps Script Web App for Masti Masti orders, reviews, and stockist approval.
// Paste this into script.google.com, deploy as Web App, then copy the Web App URL into config.js.

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Masti Masti")
    .addItem("Approve selected stockist", "approveSelectedStockist")
    .addItem("Reject selected stockist", "rejectSelectedStockist")
    .addItem("Write sample test rows", "testWriteSampleRows")
    .addToUi();
}

function doPost(e) {
  var payload = parsePayload_(e);
  if (!payload) {
    return jsonResponse_({
      ok: false,
      message: "No POST payload received. Submit from the website, or run testWriteSampleRows() inside Apps Script."
    });
  }

  if (payload.kind === "order" && String(payload.payment_method || "").toLowerCase() === "cod") {
    var verified = verifyMemberPass_(payload.stockist_pass_id);
    if (!verified.ok) {
      appendRejectedOrder_(payload, verified.message);
      return jsonResponse_({ ok: false, message: verified.message });
    }
  }

  var sheetName = payload.sheetName || getDefaultSheetName_(payload.kind);
  var sheet = getOrCreateSheet_(sheetName);

  if (payload.kind === "order") appendOrder_(sheet, payload);
  else if (payload.kind === "stockist") appendStockist_(sheet, payload);
  else appendReview_(sheet, payload);

  return jsonResponse_({ ok: true, kind: payload.kind, sheetName: sheetName });
}

function doGet(e) {
  if (e && e.parameter && e.parameter.test === "1") {
    testWriteSampleRows();
    return jsonResponse_({
      ok: true,
      message: "Test rows written. Check Reviews and Stockists tabs."
    });
  }
  return jsonResponse_({
    ok: true,
    message: "Masti Masti Website API is live. Submit forms from the website to update Google Sheets."
  });
}

function appendOrder_(sheet, payload) {
  ensureHeaders_(sheet, [
    "Saved At",
    "Order ID",
    "Payment Status",
    "Payment Method",
    "Member Pass ID",
    "Razorpay Payment ID",
    "Name",
    "Email",
    "Phone",
    "Address",
    "Items",
    "Subtotal",
    "GST",
    "Shipping",
    "Total",
    "Source"
  ]);
  sheet.appendRow([
    new Date(),
    payload.order_id || "",
    payload.payment_status || "",
    payload.payment_method || "",
    payload.stockist_pass_id || "",
    payload.razorpay_payment_id || "",
    payload.customer_name || "",
    payload.customer_email || "",
    payload.customer_phone || "",
    payload.address || "",
    payload.items || "",
    payload.subtotal || 0,
    payload.gst || 0,
    payload.shipping || 0,
    payload.total || 0,
    payload.source || ""
  ]);
}

function appendStockist_(sheet, payload) {
  ensureHeaders_(sheet, stockistHeaders_());
  sheet.appendRow([
    new Date(),
    payload.application_id || "",
    "Pending",
    "",
    payload.name || "",
    payload.email || "",
    payload.mobile || "",
    payload.store || "",
    payload.city || "",
    payload.type || "",
    payload.message || "",
    payload.submitted_at || "",
    payload.source || "",
    ""
  ]);
}

function appendReview_(sheet, payload) {
  ensureHeaders_(sheet, ["Saved At", "Name", "Rating", "Message", "Source"]);
  sheet.appendRow([
    new Date(),
    payload.name || "",
    payload.rating || "",
    payload.message || "",
    payload.source || ""
  ]);
}

function appendRejectedOrder_(payload, reason) {
  var sheet = getOrCreateSheet_("Rejected Orders");
  ensureHeaders_(sheet, [
    "Saved At",
    "Reason",
    "Order ID",
    "Payment Method",
    "Member Pass ID",
    "Name",
    "Email",
    "Phone",
    "Items",
    "Total",
    "Source"
  ]);
  sheet.appendRow([
    new Date(),
    reason || "",
    payload.order_id || "",
    payload.payment_method || "",
    payload.stockist_pass_id || "",
    payload.customer_name || "",
    payload.customer_email || "",
    payload.customer_phone || "",
    payload.items || "",
    payload.total || 0,
    payload.source || ""
  ]);
}

function approveSelectedStockist() {
  var sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getName() !== "Stockists") {
    SpreadsheetApp.getUi().alert("Open the Stockists sheet and select the row you want to approve.");
    return;
  }
  var row = sheet.getActiveRange().getRow();
  if (row <= 1) {
    SpreadsheetApp.getUi().alert("Select a stockist application row, not the header row.");
    return;
  }
  ensureHeaders_(sheet, stockistHeaders_());
  var headers = getHeaderMap_(sheet);
  var passCell = sheet.getRange(row, headers["Member Pass ID"]);
  var passId = passCell.getValue() || generateMemberPassId_(sheet, row, headers);
  passCell.setValue(passId);
  sheet.getRange(row, headers["Approval Status"]).setValue("Approved");
  sheet.getRange(row, headers["Decision Notes"]).setValue("Approved " + new Date().toLocaleString("en-IN"));

  var email = sheet.getRange(row, headers["Email"]).getValue();
  var name = sheet.getRange(row, headers["Name"]).getValue() || "Stockist";
  if (email) {
    MailApp.sendEmail({
      to: email,
      subject: "Masti Masti Stockist Member Pass Approved",
      body: "Hi " + name + ",\n\nYour Masti Masti stockist application is approved.\n\nYour member id is " + passId + ".\n\nUse this ID for COD checkout on the Masti Masti website.\n\nMasti Masti Snacks"
    });
  }
  SpreadsheetApp.getUi().alert("Approved. Member Pass ID: " + passId + (email ? "\nEmail sent to " + email : "\nNo email found; share the pass manually."));
}

function rejectSelectedStockist() {
  var sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getName() !== "Stockists") {
    SpreadsheetApp.getUi().alert("Open the Stockists sheet and select the row you want to reject.");
    return;
  }
  var row = sheet.getActiveRange().getRow();
  if (row <= 1) return;
  ensureHeaders_(sheet, stockistHeaders_());
  var headers = getHeaderMap_(sheet);
  sheet.getRange(row, headers["Approval Status"]).setValue("Rejected");
  sheet.getRange(row, headers["Decision Notes"]).setValue("Rejected " + new Date().toLocaleString("en-IN"));
  SpreadsheetApp.getUi().alert("Stockist application marked Rejected.");
}

function verifyMemberPass_(memberPassId) {
  var pass = String(memberPassId || "").trim().toUpperCase();
  if (!pass) return { ok: false, message: "COD rejected: missing member pass ID." };
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Stockists");
  if (!sheet || sheet.getLastRow() < 2) return { ok: false, message: "COD rejected: no approved stockists found." };
  var headers = getHeaderMap_(sheet);
  var passCol = headers["Member Pass ID"];
  var statusCol = headers["Approval Status"];
  if (!passCol || !statusCol) return { ok: false, message: "COD rejected: Stockists sheet is missing approval columns." };
  var values = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  for (var i = 0; i < values.length; i += 1) {
    var rowPass = String(values[i][passCol - 1] || "").trim().toUpperCase();
    var status = String(values[i][statusCol - 1] || "").trim().toLowerCase();
    if (rowPass === pass && status === "approved") return { ok: true };
  }
  return { ok: false, message: "COD rejected: member pass is not approved." };
}

function stockistHeaders_() {
  return [
    "Saved At",
    "Application ID",
    "Approval Status",
    "Member Pass ID",
    "Name",
    "Email",
    "Mobile",
    "Store",
    "City",
    "Type",
    "Message",
    "Submitted At",
    "Source",
    "Decision Notes"
  ];
}

function generateMemberPassId_(sheet, row, headers) {
  var city = String(sheet.getRange(row, headers["City"]).getValue() || "IND").replace(/[^a-z0-9]/gi, "").slice(0, 3).toUpperCase() || "IND";
  var store = String(sheet.getRange(row, headers["Store"]).getValue() || "SHOP").replace(/[^a-z0-9]/gi, "").slice(0, 4).toUpperCase() || "SHOP";
  var unique = new Date().getTime().toString(36).slice(-5).toUpperCase();
  return "MM-STK-" + city + "-" + store + "-" + unique;
}

function getDefaultSheetName_(kind) {
  if (kind === "order") return "Orders";
  if (kind === "stockist") return "Stockists";
  return "Reviews";
}

function getOrCreateSheet_(sheetName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(sheetName);
  return sheet;
}

function ensureHeaders_(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    return;
  }
  var current = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), headers.length)).getValues()[0];
  headers.forEach(function(header, index) {
    if (!current[index]) sheet.getRange(1, index + 1).setValue(header);
  });
}

function getHeaderMap_(sheet) {
  var values = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var map = {};
  values.forEach(function(header, index) {
    if (header) map[String(header)] = index + 1;
  });
  return map;
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) return null;
  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    return null;
  }
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function testWriteSampleRows() {
  doPost({
    postData: {
      contents: JSON.stringify({
        kind: "review",
        sheetName: "Reviews",
        name: "Test Buyer",
        rating: 5,
        message: "Test review from Apps Script",
        source: "apps-script-test"
      })
    }
  });

  doPost({
    postData: {
      contents: JSON.stringify({
        kind: "stockist",
        sheetName: "Stockists",
        application_id: "MM-APP-TEST-DEMO-12345",
        name: "Test Stockist",
        email: "test@example.com",
        mobile: "9876543210",
        store: "Demo Store",
        city: "Lucknow",
        type: "Retailer",
        message: "Test stockist row",
        submitted_at: new Date().toLocaleString("en-IN"),
        source: "apps-script-test"
      })
    }
  });
}
