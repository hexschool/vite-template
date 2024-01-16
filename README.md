# 六角學院 Vue 樣板

> 這是六角學院的 Vue 樣板，是基於 Vite 所建立的專案。

Node.js 版本建議為：18.17.1 以上

## 安裝與使用

以下將會引導你如何安裝此專案到你的電腦上。

### 取得專案

```bash
git clone https://github.com/hexschool/vite-template.git
```

### 移動到專案資料夾

```bash
cd vite-template
```

## 環境變數

請將 `.env.example` 複製一份並命名為 `.env`，並將裡面的環境變數設定為你的值。

```bash
cp .env.example .env
```

### 安裝套件

```bash
npm install
```

### 啟動開發環境

```bash
npm run dev
```

### 打包專案

```bash
npm run build
```

### 部署專案

```bash
npm run deploy
```

## 套件

以下是已經安裝在專案中的套件。

- axios (^1.6.5)
- bootstrap (^5.3.2)
- bootstrap-icons (^1.11.3)
- dotenv (^16.3.1)
- pinia (^2.1.7)
- vue (^3.3.11)
- vue-router (^4.2.5)
- @vitejs/plugin-vue (^4.5.2)
- eslint (^8.49.0)
- eslint-config-airbnb-base (^15.0.0)
- eslint-import-resolver-alias (^1.1.2)
- eslint-plugin-import (^2.29.1)
- eslint-plugin-n (^16.6.2)
- eslint-plugin-promise (^6.1.1)
- eslint-plugin-vue (^9.20.1)
- gh-pages (^6.1.1)
- sass (^1.69.7)
- vite (^5.0.10)
- vite-plugin-eslint (^1.8.1)

## 資料夾結構

- `.vscode`：Visual Studio Code 的設定檔
- `dist`：打包後的檔案
- `public`：公開的靜態檔案
- `src`：專案的程式碼
  - `assets`：靜態檔案
  - `components`：元件
  - `router`：路由
  - `store`：狀態管理
  - `views`：頁面
  - `App.vue`：根元件
  - `main.js`：進入點
- `.env.example`：環境變數範本
- `.eslintrc.js`：ESLint 設定檔
- `.gitignore`：Git 忽略檔案
- `.nvmrc`：Node.js 版本
- `index.html`：進入點 HTML
- `package-lock.json`：套件版本鎖定
- `package.json`：專案資訊
- `README.md`：專案說明
- `vite.config.js`：Vite 設定檔

## gh-pages 部署說明

內建預設是使用 gh-pages 進行部署，因此只需要在專案根目錄下執行以下指令即可。

```bash
npm run deploy
```

（請記得將 `.env` 中的 `REPOSITORY_NAME` 改為你的專案名稱即可。）
