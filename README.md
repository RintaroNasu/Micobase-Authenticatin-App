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
POSTGRES_USER=your_postgres_user
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DB=your_postgres_db
DATABASE_URL="postgresql://your_user:your_password@your_host:your_port/your_db"
JWT_SECRET="your_jwt_secret"
NEXTAUTH_SECRET="your_nextauth_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
FACEBOOK_CLIENT_ID="your_facebook_client_id"
FACEBOOK_CLIENT_SECRET="your_facebook_client_secret"
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
