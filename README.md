# doukaku-template-node-mocha

「オフラインリアルタイムどう書く」を Node.js & Mocha & power-assert 使って TDD で解くための環境です。

## 使い方

このGitHubリポジトリがテンプレートになっているので、  
「Use this template」ボタンをクリックして新リポジトリをまず作成。  
それをcloneして使ってください。

## 構成

- `src/`
  - ロジックを書く
  - すべての引数を `index.js/main` の仮引数 `argv[]` で配列として受け取る
  - 新しく関数を作ってテスト対象にしたい場合は、 `module.exports` すること
- `test/`
  - テストを書く
  - アセットライブラリは [power-assert](https://github.com/power-assert-js/power-assert)
- `cli.js`
  - コマンドラインからの実行用
  - このコードは全く編集しなくて OK

## 実行方法

CLI

```
$ node cli.js 123
```

テスト

```
$ yarn test
```
