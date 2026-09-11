# 元生國民小學課表網站部署說明

本目錄是可直接部署到任何靜態網站代管服務的完整網站。入口檔案為 `index.html`，不需要 Node.js、Firebase SDK 或後端資料庫。

## GitHub Pages

1. 建立一個 GitHub repository，或使用已有 repository。
2. 將本目錄中的網站檔案（不含 `.git` 目錄）上傳到 repository 根目錄。
3. 在 repository 的 **Settings → Pages** 中，將部署來源設定為 **Deploy from a branch**，選擇 `main` 分支與 `/ (root)`。
4. 儲存後，GitHub Pages 會提供網站網址。

## Firebase Hosting

若已登入 Firebase CLI 且已有 Firebase project，可在本目錄執行：

```bash
firebase init hosting
firebase deploy
```

選擇目前目錄作為 public directory，並保留 `index.html` 作為入口。這個工作階段沒有可用的 GitHub 或 Firebase 登入憑證，因此正式部署需由帳號擁有人完成登入與選擇專案。

## 登入資訊

網站保留原 Repo 的訪客登入功能，也可使用原範例帳密：

- 帳號：`teacher`
- 密碼：`password123`

## 資料說明

`homerooms_115-1.json` 是依課表中各班國語、數學、生活課程與綜合活動的授課次數推定的導師對應。原始 CSV 未提供明確的導師欄位，正式發布前建議由學校承辦人核對並修正該 JSON。
