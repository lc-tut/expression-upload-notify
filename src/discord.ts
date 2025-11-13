import { Application } from './application';
import { getConfig } from './config';

/**
 * Discord Webhookのペイロード型
 */
interface DiscordWebhookPayload {
  content: string;
  username?: string;
  avatar_url?: string;
}

/**
 * Discordに通知を送信
 */
export function sendDiscordNotification(application: Application): void {
  const config = getConfig();

  // メッセージ内容を構築
  const message = createNotificationMessage(config.DISCORD_MENTION_ID, application);

  const payload: DiscordWebhookPayload = {
    content: message,
    username: '申請通知Bot',
  };

  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  };

  try {
    const response = UrlFetchApp.fetch(config.DISCORD_WEBHOOK_URL, options);
    const responseCode = response.getResponseCode();

    if (responseCode !== 204 && responseCode !== 200) {
      throw new Error(`Discord API error: ${responseCode} - ${response.getContentText()}`);
    }

    Logger.log(`Discord通知送信成功: 行${application.rowNumber}`);
  } catch (error) {
    Logger.log(`Discord通知送信失敗: ${error}`);
    throw error;
  }
}

/**
 * 通知メッセージを作成
 */
function createNotificationMessage(mentionId: string, application: Application): string {
  return `<@${mentionId}>

📝 **新しいエクスプレッション申請が追加されました**

**申請種類:** ${application.applicationType}
**申請者　:** ${application.applicantName}
**行番号　:** ${application.rowNumber}`;
}
