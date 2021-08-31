//When I go up in weight too many days in a row this sends emails to ppl


// This constant is written in column C for rows for which an email
// has been sent successfully.
var EMAIL_SENT = 'EMAIL_SENT';

/**
 * Sends non-duplicate emails with data from the weight spreadsheet.
 * Utilizes seperate sheet with email info in it 
 * This one if I am not hitting my goals
 * heavily gleaned from https://developers.google.com/apps-script/articles/sending_emails
 */

function sendNonComplianceEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  //list out accountability emails
  var startRow = 2; // First row of data to process
  var numRows = 4; // Number of people to email
  var dataRange = sheet.getRange(startRow, 1, numRows, 3);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[0]; 
    var message = row[1]; // specific details of the weight
    var emailSent = row[2]; 
    if (emailSent !== EMAIL_SENT) { 
      var subject = 'Somebody forgot to stand on the scale today';
      MailApp.sendEmail(emailAddress, subject, message);
      sheet.getRange(startRow + i, 3).setValue(EMAIL_SENT);
      // Make sure the cell is updated right away in case the script is interrupted
      SpreadsheetApp.flush();
    }
  }
}

function sendNegativeEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  //list out accountability emails
  var startRow = 2; // First row of data to process
  var numRows = 4; // Number of people to email
  var dataRange = sheet.getRange(startRow, 1, numRows, 3);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[0]; 
    var message = row[1]; // specific details of the weight
    var emailSent = row[2]; 
    if (emailSent !== EMAIL_SENT) { 
      var subject = 'Fatboy is still fat';
      MailApp.sendEmail(emailAddress, subject, message);
      sheet.getRange(startRow + i, 3).setValue(EMAIL_SENT);
      // Make sure the cell is updated right away in case the script is interrupted
      SpreadsheetApp.flush();
    }
  }
}

/**
 * Sends non-duplicate emails with data from the weight spreadsheet.
 * Utilizes seperate sheet with email info in it 
 * This one if I am not hitting my goals
 * heavily gleaned from https://developers.google.com/apps-script/articles/sending_emails
 */
function sendPositiveEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  //list out accountability emails
  var startRow = 2; // First row of data to process
  var numRows = 4; // Number of people to email
  var dataRange = sheet.getRange(startRow, 1, numRows, 3);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[0]; 
    var message = row[3]; // positive info
    var emailSent = row[2]; 
    if (emailSent !== EMAIL_SENT) { 
      var subject = 'Fatboy has hit the goal';
      MailApp.sendEmail(emailAddress, subject, message);
      sheet.getRange(startRow + i, 3).setValue(EMAIL_SENT);
      // Make sure the cell is updated right away in case the script is interrupted
      SpreadsheetApp.flush();
    }
  }
}