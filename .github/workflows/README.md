# GitHub Actions セットアップ手順

## 概要

mainブランチにマージすると自動的にGoogle Apps Scriptにデプロイされます。

## セットアップ手順

### 1. サービスアカウントの作成

1. [Google Cloud Console](https://console.cloud.google.com/)を開く
2. プロジェクトを選択（既存のGASプロジェクトに紐づくGCPプロジェクト）
3. 「IAMと管理」→「サービスアカウント」
4. 「サービスアカウントを作成」
   - 名前: `github-actions-deployer`（任意）
   - 説明: GitHub ActionsからGASをデプロイするためのアカウント
5. 「完了」をクリック
6. 作成したサービスアカウントをクリック
7. 「キー」タブ→「鍵を追加」→「新しい鍵を作成」
8. 形式: JSON を選択→「作成」
9. ダウンロードされたJSONファイルを保存

### 2. Apps Script APIの有効化

1. [Google Cloud Console](https://console.cloud.google.com/)
2. 「APIとサービス」→「ライブラリ」
3. "Apps Script API" を検索
4. 「有効にする」をクリック

### 3. サービスアカウントに権限を付与

#### 方法A: GASプロジェクトにサービスアカウントを追加

1. GASエディタを開く
2. 右上の「共有」をクリック
3. サービスアカウントのメールアドレスを追加（編集者権限）

#### 方法B: `.clasprc.json`を使用（簡易版）

ローカルで`clasp login`した際に作成された`~/.clasprc.json`を使用します。

```bash
cat ~/.clasprc.json
```

内容をコピーしてGitHub Secretsに設定します。

### 4. GitHub Secretsの設定

1. GitHubリポジトリページを開く
2. 「Settings」→「Secrets and variables」→「Actions」
3. 「New repository secret」をクリック

#### 必要なSecrets（OAuth方式・推奨）

**1. CLASPRC_JSON**
- Name: `CLASPRC_JSON`
- Secret: `~/.clasprc.json`の内容全体

```bash
cat ~/.clasprc.json
```

**2. SCRIPT_ID**
- Name: `SCRIPT_ID`
- Secret: GASプロジェクトのスクリプトID

スクリプトIDの取得方法：
1. 対象のスプレッドシートを開く
2. 「拡張機能」→「Apps Script」
3. プロジェクトの設定（⚙️アイコン）
4. 「スクリプトID」をコピー

または`.clasp.json`から：
```bash
cat .clasp.json
# {"scriptId":"ここの値","rootDir":"./dist"}
```

### 5. デプロイのテスト

1. 新しいブランチを作成
2. コードを変更してコミット
3. mainブランチにPRを作成
4. マージすると自動デプロイが実行される

## トラブルシューティング

### デプロイが失敗する場合

1. **認証エラー**: `CLASPRC_JSON`の内容が正しいか確認
2. **ビルドエラー**: ローカルで`npm run build`が成功するか確認
3. **Script ID不正**: `.clasp.json`の`scriptId`が正しいか確認

### トークンの期限切れ

OAuth方式の場合、トークンが期限切れになったら：

1. ローカルで`clasp login`を再実行
2. 新しい`~/.clasprc.json`をGitHub Secretsに再設定

## セキュリティ上の注意

- ✅ `.clasprc.json`は`.gitignore`に追加済み
- ✅ GitHub Secretsは暗号化されて保存される
- ✅ Secretsはログに出力されない
- ⚠️ サービスアカウントキーは厳重に管理する
