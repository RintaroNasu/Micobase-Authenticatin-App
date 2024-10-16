# Microbase Authentication App

## 概要
ログイン・新規登録機能、NextAuthを実装したWebアプリケーションになります。

##　開発環境の準備
ローカル環境で開発サーバーを起動するための手順
1. レポジトリをクローン
2. 依存パッケージをインストール
```
npm install
```
3. Next.jsとPrismaを接続させる

4. .envファイルを作成
```
DATABASE_URL="*******************"
JWT_SECRET="*******************"
NEXTAUTH_SECRET="*******************"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="*******************"
GOOGLE_CLIENT_SECRET="*******************"
FACEBOOK_CLIENT_ID="*******************"
FACEBOOK_CLIENT_SECRET="*******************"
```
5. サーバー立ち上げる。
```
npm run dev
```

## 技術スタック
・フロントエンド: Next.js<br>
・データベース: Postgress<br>
・ORM:Prisma<br>
・認証:NextAuth<br>
