# expression-upload-notify

Google Apps ScriptプロジェクトをTypeScript + esbuildで開発

## 構成

```
expression-upload-notify/
├── dist/              # ビルド出力先（GASにプッシュされる）
│   ├── appsscript.json
│   └── main.js
├── src/               # TypeScriptソースコード
│   ├── App.ts
│   └── main.ts
├── esbuild.js         # ビルド設定
├── package.json
└── tsconfig.json
```

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

## コマンド

- `npm run build` - TypeScriptをビルド（esbuildでバンドル＆ミニファイ）
- `npm run push` - distフォルダの内容をGASにプッシュ
- `npm run deploy` - ビルド→プッシュを一括実行
- `npm run open` - ブラウザでGASエディタを開く

## 開発フロー

1. `src/App.ts`や他のTSファイルでコードを編集
2. `npm run deploy`でビルド＆GASに反映
3. `npm run open`でGASエディタを開く
4. GASエディタで`App`関数を実行して動作確認

## 特徴

- ✅ TypeScriptで型安全な開発
- ✅ esbuildで複数ファイルを1つにバンドル
- ✅ ミニファイで最適化
- ✅ import/exportでファイル分割可能

