# Readme 規則 2023-0418

版本控制：
- npm version: v.9.5.0
- node version: v.18.15.0

安裝套件請統一用 npm

---

env 環境參數

- 本地開發請新增至 .env.dev.365JP 檔案裡面

推版前要通知 SRE 有更新 環境餐參數，請其協助新增對應的環境參數與 URL

---

地端啟動專案：

```jsx
// 用 turbo 啟動專案
npm run dev-main
npm run pro-main
```

---

目前使用套件
- styleComponent
- redux/toolkit
- redux-persist
---

目前使用 css 框架
- styleComponent
- tailwindcss

---

css 命名規則

- className example 統一用 下底線
    - className={styles.category_container}

---

資料夾命名

- 統一用駝峰

---

Git flow, Git Commit, 版控 參照 ref：[https://www.notion.so/Git-ec24342a0bd7495ea37f5ddc6cf49724](https://www.notion.so/Git-ec24342a0bd7495ea37f5ddc6cf49724)