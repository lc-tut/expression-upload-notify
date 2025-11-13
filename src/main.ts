import { getApplicationFromRow } from './application';
import { sendDiscordNotification } from './discord';

/**
 * スプレッドシートに行が追加されたときのトリガー
 */
export function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit) {
  try {
    const range = e.range;
    const sheet = range.getSheet();
    const row = range.getRow();

    // ヘッダー行（1行目）は無視
    if (row <= 1) {
      return;
    }

    // 申請情報を取得
    const application = getApplicationFromRow(sheet, row);

    if (!application) {
      Logger.log(`行${row}: 申請情報が不完全のため通知をスキップ`);
      return;
    }

    // Discord通知を送信
    sendDiscordNotification(application);
    Logger.log(`行${row}: 通知送信完了`);
  } catch (error) {
    Logger.log(`エラー: ${error}`);
    throw error;
  }
}
