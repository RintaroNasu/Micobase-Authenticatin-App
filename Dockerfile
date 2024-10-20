# ベースイメージとして軽量なNode.jsの公式イメージを使用
FROM node:18-alpine

# 作業ディレクトリを作成
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコード全体をコンテナ内にコピー
COPY . .

# 環境変数ファイルを読み込む
COPY .env .env

# Next.jsアプリケーションをビルド
RUN npm run build

# Next.jsアプリケーションを起動
CMD ["npm", "run", "start"]

# コンテナが使用するポートを指定
EXPOSE 3000
