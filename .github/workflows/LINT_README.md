# コード品質チェックツール

## 概要

このプロジェクトではESLintとPrettierを使用してコード品質を保っています。

## 使い方

### チェックのみ（CI で実行される）

```bash
# すべてのチェックを実行
npm run check

# または個別に
npm run lint      # ESLint チェック
npm run format    # Prettier チェック
```

### 自動修正

```bash
# すべて自動修正
npm run fix

# または個別に
npm run lint:fix     # ESLint 自動修正
npm run format:fix   # Prettier 自動修正
```

## GitHub Actions

### CI（自動チェック）

PR作成時とmainへのpush時に自動でチェックが実行されます：
- ESLintによるコード品質チェック
- Prettierによるフォーマットチェック
- TypeScriptのコンパイルチェック

チェックが失敗した場合は、ローカルで`npm run fix`を実行してから再度pushしてください。

### Deploy（自動デプロイ）

mainブランチにマージされると自動でGASにデプロイされます。

## 推奨ワークフロー

1. コードを編集
2. `npm run fix` で自動修正
3. `npm run check` で確認
4. コミット＆プッシュ
5. CIが自動でチェック
6. mainにマージで自動デプロイ

## エディタ設定（VSCode）

推奨拡張機能：
- ESLint
- Prettier - Code formatter

保存時に自動フォーマットを有効にするには、`.vscode/settings.json`に以下を追加：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
