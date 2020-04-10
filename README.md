README.ME
###berikut dependensi yang di gunakan
```
"devDependencies": {
    "@babel/core": "^7.7.7",
    "@babel/preset-env": "^7.7.7",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.4.1",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^1.1.3",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.1",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "bootstrap": "^4.4.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.16.1",
    "regenerator-runtime": "^0.13.5",
    "sweetalert2": "^9.10.9"
  }
```
###berikut command yang digunakan:
```
"scripts": {
    "build": "webpack --config webpack.prod.js",
    "start-dev": "webpack-dev-server --config webpack.dev.js --open"
  },
```
###intallation:
install semua dependensi dengan `npm install`
untuk menjalankan gunakan `npm run start-dev`
###bila terjadi kesalahan pada API :
ubah file ``src/script/view/main.js`` 
uncomment `renderResult(DataSource.onloadPage());`dan comment `onLoadPage();`,
lalu ubah juga file ``src/script/data/data-source.js``
uncomment function static `onloadPage` dan uncomment `onloadPage`
###Note:
aplikasi ini masih dalam tahap pengembangan, dan masih belum sempurna sepenuhnya.