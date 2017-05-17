# Babel study
## nvm
## node
## babel
グローバルにインストールするのではなく、ローカルにインストールすることが推奨されている。
### babel-cli
```
$ npm install --save-dev babel-cli
```

## Warning
htmlファイル内のscriptの読み込みを最後にしておかないと、Target container is not a DOM elementというエラーが発生する。
