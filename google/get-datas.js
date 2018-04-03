let
  google = require('googleapis'),
  privatekey = require("./privatekey.json"),
  spreadsheetId = '1zngPQJ5ox97O0IarAP8JcDc-AaoC6pC_HSR4gy8uSz0',
  sheetName = 'A1:B2',
  sheets = google.sheets('v4'),
  jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ['https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/calendar']);

module.exports.getAnswer = function getAnswer(role_id) {
  return new Promise(function (resolve, reject) {
    sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      auth: jwtClient,
      range: role_id
    }, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result.values[0][0]);
      }
    });
  });
}

