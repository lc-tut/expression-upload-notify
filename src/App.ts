/**
 * メインのアプリケーション関数
 */
export const App = () => {
  console.log('App started!');

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();

  Logger.log('スプレッドシート名: ' + ss.getName());
  Logger.log('シート名: ' + sheet.getName());

  SpreadsheetApp.getUi().alert('接続成功！');
};
