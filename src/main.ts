/**
 * スプレッドシートを開いたときに実行される関数
 */
function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('カスタムメニュー')
        .addItem('テスト実行', 'testFunction')
        .addToUi();
}

/**
 * テスト関数
 */
function testFunction() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();

    Logger.log('スプレッドシート名: ' + ss.getName());
    Logger.log('シート名: ' + sheet.getName());

    SpreadsheetApp.getUi().alert('接続成功！');
}

/**
 * スプレッドシートのデータを取得する例
 */
function getSheetData() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    const data = sheet.getDataRange().getValues();

    Logger.log(data);
    return data;
}
