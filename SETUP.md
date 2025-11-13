# セットアップ手順

## 1. スクリプトプロパティ（環境変数）の設定

GASエディタで環境変数を設定します。

### 設定方法

1. `npm run deploy` でデプロイ
2. `npm run open` でGASエディタを開く
3. 左メニューの「プロジェクトの設定」（⚙️アイコン）をクリック
4. 下部の「スクリプト プロパティ」セクションまでスクロール
5. 「スクリプト プロパティを追加」をクリック
6. 以下の2つのプロパティを追加：

| プロパティ | 値 | 説明 |
|---------|-----|------|
| `DISCORD_WEBHOOK_URL` | `https://discord.com/api/webhooks/...` | Discord Webhook URL |
| `DISCORD_MENTION_ID` | `755410747042955294` | メンションするユーザーID |

### Discord Webhook URLの取得方法

1. Discordサーバーの設定を開く
2. 「連携サービス」→「ウェブフック」
3. 「新しいウェブフック」をクリック
4. チャンネルを選択してウェブフックURLをコピー

### メンションIDの取得方法

1. Discord開発者モードを有効化（ユーザー設定→詳細設定→開発者モード）
2. ユーザーを右クリック→「IDをコピー」

## 2. トリガーの設定

GASエディタで以下の手順でトリガーを設定します。

1. GASエディタを開く
2. 左メニューの「トリガー」（時計アイコン）をクリック
3. 「トリガーを追加」
4. 以下のように設定：
   - 実行する関数: `onEdit`
   - イベントのソース: `スプレッドシートから`
   - イベントの種類: `編集時`
   - 保存

## 3. テスト

### 手動テスト

1. スプレッドシートの任意のデータ行を選択
2. GASエディタで `testNotification` 関数を実行
3. Discordに通知が届くことを確認

### 実際の動作テスト

1. スプレッドシートに新しい行を追加
2. C列に申請者名を入力
3. D列に申請種類を入力
4. Discordに通知が届くことを確認

## トラブルシューティング

### 通知が届かない場合

1. GASエディタの「実行ログ」を確認
2. スクリプトプロパティが正しく設定されているか確認
   - 左メニュー「プロジェクトの設定」→「スクリプト プロパティ」
3. Webhook URLが正しいか確認

### 環境変数が設定されているか確認

GASエディタで以下のスクリプトを実行：

1. GASエディタのツールバーで関数選択を「testNotification」から「デバッグ用」に変更
2. 以下のコードをエディタに貼り付けて実行：

```javascript
function checkConfig() {
  const props = PropertiesService.getScriptProperties();
  Logger.log('DISCORD_WEBHOOK_URL: ' + props.getProperty('DISCORD_WEBHOOK_URL'));
  Logger.log('DISCORD_MENTION_ID: ' + props.getProperty('DISCORD_MENTION_ID'));
}
```

3. 「実行ログ」で値を確認

## 列の対応

- **C列**: 申請者名
- **D列**: 申請種類
