# expression-upload-notify

Google Apps ScriptプロジェクトをTypeScript + esbuildで開発

## 構成

```
expression-upload-notify/
├── .github/
│   └── workflows/
│       ├── deploy.yml      # 自動デプロイ設定
│       └── README.md       # セットアップ手順
├── dist/                   # ビルド出力先（GASにプッシュされる）
│   ├── appsscript.json
│   └── main.js
├── src/                    # TypeScriptソースコード
│   ├── App.ts
│   └── main.ts
├── esbuild.js              # ビルド設定
├── package.json
└── tsconfig.json
```

## ローカル開発

### セットアップ

```bash
# 依存関係のインストール
npm install

# claspでログイン
npx clasp login

# 既存プロジェクトの場合: .clasp.jsonを作成
# {
#   "scriptId": "your-script-id",
#   "rootDir": "./dist"
# }

# または新規作成
npx clasp create --type sheets --title "expression-upload-notify"
```

### コマンド

- `npm run build` - TypeScriptをビルド（esbuildでバンドル＆ミニファイ）
- `npm run push` - distフォルダの内容をGASにプッシュ
- `npm run deploy` - ビルド→プッシュを一括実行
- `npm run open` - ブラウザでGASエディタを開く

### 開発フロー

1. `src/App.ts`や他のTSファイルでコードを編集
2. `npm run deploy`でビルド＆GASに反映
3. `npm run open`でGASエディタを開く
4. GASエディタで`App`関数を実行して動作確認

## CI/CD（自動デプロイ）

mainブランチにマージすると自動的にGASにデプロイされます。

### セットアップ手順

詳細は [.github/workflows/README.md](.github/workflows/README.md) を参照してください。

**簡易版（推奨）:**
1. ローカルで`clasp login`実行
2. `~/.clasprc.json`の内容をコピー
3. GitHubリポジトリの「Settings」→「Secrets」で`CLASPRC_JSON`として登録
4. mainにマージすると自動デプロイ

## 特徴

- ✅ TypeScriptで型安全な開発
- ✅ esbuildで複数ファイルを1つにバンドル
- ✅ ミニファイで最適化
- ✅ import/exportでファイル分割可能
- ✅ GitHub Actionsで自動デプロイ


