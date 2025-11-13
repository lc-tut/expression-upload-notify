# expression-upload-notify

Google Apps ScriptプロジェクトをTypeScriptで開発するためのセットアップ

## セットアップ手順

### 1. claspでログイン
```bash
npx clasp login
```

### 2. 既存のスプレッドシートに紐付ける

既存のスプレッドシートのスクリプトIDを取得して、`.clasp.json`に設定します。

スクリプトIDの取得方法：
1. 対象のスプレッドシートを開く
2. 「拡張機能」→「Apps Script」
3. プロジェクトの設定（⚙️アイコン）
4. 「スクリプトID」をコピー

または、新規にプロジェクトを作成する場合：
```bash
npx clasp create --type sheets --title "expression-upload-notify"
```

### 3. .clasp.jsonを作成

既存プロジェクトの場合：
```json
{
  "scriptId": "ここにスクリプトIDを入力",
  "rootDir": "./src"
}
```

### 4. プッシュ
```bash
npm run push
```

## コマンド

- `npm run push` - TypeScriptを自動変換してGASにプッシュ
- `npm run pull` - GASからコードを取得
- `npm run open` - ブラウザでGASエディタを開く
- `npm run deploy` - デプロイ

## 開発フロー

1. `src/main.ts`でTypeScriptコードを編集
2. `npm run push`でGASに反映（claspが自動的にTSをJSに変換）
3. スプレッドシートで動作確認
