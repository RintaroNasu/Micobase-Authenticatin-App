# Microbase Authentication App

## アプリ概要
 ・ログイン・新規登録機能、NextAuthを実装したWebアプリケーション

---

## 技術スタック

### 使用言語
  ・[TypeScript](https://www.typescriptlang.org/)
  
### フロントエンド 
  ・[React](https://ja.react.dev/): ユーザーインターフェースの構築<br>
  ・[Next.js (App Router)](https://nextjs.org/): サーバーサイドレンダリング対応のReactフレームワーク<br>
  ・[TailwindCSS](https://tailwindcss.com/): カスタマイズ可能なCSSユーティリティ<br>
  ・[React-Toastify](https://fkhadra.github.io/react-toastify/introduction/): トースト通知の表示ライブラリ<br>
  
### バックエンド
  ・[NextJS](https://nestjs.com/): サーバーサイドレンダリング対応のReactフレームワーク<br>
  ・[Prisma](https://www.prisma.io/): データベースアクセスのためのORM<br>
  ・[JWT](https://jwt.io/): JWTを使用した認証管理<br>
  ・[NextAuth](https://next-auth.js.org/):Next.js に簡単に認証機能を統合するためのライブラリ
  
### データベース
  ・[PostgresSQL](https://www.postgresql.org/docs/): リレーショナルデータベース管理システム

### インフラ
  ・[Docker](https://docs.docker.com/): コンテナ化プラットフォームで環境構築を効率化<br>


---

## 開発環境のセットアップ手順
ローカル環境で開発サーバーを起動するための手順は以下の通りです。

1. リポジトリをクローン
```
git clone https://github.com/RintaroNasu/micobase-authenticatin-app.git
```
2. 依存パッケージをインストール
```
npm install
```
3. .envファイルを作成
```
POSTGRES_USER=*******************
POSTGRES_PASSWORD=*******************
POSTGRES_DB=*******************
DATABASE_URL="*******************"
JWT_SECRET="*******************"
NEXTAUTH_SECRET="*******************"
GOOGLE_CLIENT_ID="*******************"
GOOGLE_CLIENT_SECRET="*******************"
FACEBOOK_CLIENT_ID="*******************"
FACEBOOK_CLIENT_SECRET="*******************"
```
4. Dockerイメージをビルド
```
docker compose build
```
5. コンテナを起動
```
docker compose up
```
6. PrismaClientのセットアップ
```
docker exec -it  <コンテナ_id> sh
npx prisma generate
npx prisma migrate dev --name init
```
7. 開発サーバーにアクセス
```
Webブラウザで http://localhost:3000 にアクセス
```
