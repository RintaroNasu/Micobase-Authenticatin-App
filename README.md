# Microbase Authentication App

## 概要
ログイン・新規登録機能、NextAuthを実装したWebアプリケーションになります。

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

## 技術スタック
・フロントエンド: Next.js<br>
・データベース: Postgress<br>
・ORM:Prisma<br>
・認証:NextAuth<br>
