/**
 * 環境変数の型定義
 */
export interface Config {
    DISCORD_WEBHOOK_URL: string;
    DISCORD_MENTION_ID: string;
}

/**
 * スクリプトプロパティから設定を取得
 */
export function getConfig(): Config {
    const props = PropertiesService.getScriptProperties();
    const webhookUrl = props.getProperty('DISCORD_WEBHOOK_URL');
    const mentionId = props.getProperty('DISCORD_MENTION_ID');

    if (!webhookUrl) {
        throw new Error('DISCORD_WEBHOOK_URL が設定されていません');
    }

    if (!mentionId) {
        throw new Error('DISCORD_MENTION_ID が設定されていません');
    }

    return {
        DISCORD_WEBHOOK_URL: webhookUrl,
        DISCORD_MENTION_ID: mentionId,
    };
}
