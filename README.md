# codingisle Minecraft Education 打字訓練場

這是一個可以直接架在 GitHub Pages 的純前端打字練習遊戲。題目包含中文與英文 Minecraft Education 常用單字，學生每場挑戰 3 分鐘，結束後會依照當次分數給出 Minecraft 敵方生物段位。

## 功能

- 中英混合、中文、英文三種題目模式
- 單場固定 3 分鐘
- 題目無限出題，直到時間結束
- 擴充 Minecraft Education、程式概念、紅石、指令、資源、敵方生物等題庫
- 中英混合得分倍率最高，中文其次，英文最低
- 遊戲畫面會直接顯示目前模式與各語言得分權重
- 使用專案內建圖片素材與 codingisle logo，部署到 GitHub Pages 不需外部圖片連線
- 連擊會提升分數加乘
- 連續答錯 3 次會直接死亡並結束本場
- 每場有 3 次跳過題目的機會
- 即時計分、連擊、連擊加乘、正確率、剩餘時間
- 顯示今日累積遊玩時間與歷史最高得分
- 固定顯示友善生物到敵方生物的段位參考表，最高段位是伏守者至尊
- 結束後跳出挑戰結束彈窗，並顯示完整結果
- 不需要後端或資料庫，適合 GitHub Pages

## GitHub Pages 架設方式

1. 建立一個新的 GitHub repository。
2. 把這個資料夾的 `index.html`、`styles.css`、`script.js`、`README.md` 上傳到 repository 根目錄。
3. 到 repository 的 `Settings`。
4. 進入 `Pages`。
5. 在 `Build and deployment` 選擇 `Deploy from a branch`。
6. Branch 選 `main`，資料夾選 `/root`，按下 `Save`。
7. 等待部署完成後，GitHub 會顯示網站網址。

## 自訂題庫

題庫在 `script.js` 的 `wordBank` 陣列裡。可以新增這種格式：

```js
{ en: "redstone", zh: "紅石", category: "工程" }
```

## 建議延伸

- 加入學生姓名與班級欄位
- 把成績存到 Google Sheet 或 Firebase
- 依課程單元切換題庫，例如紅石、MakeCode、座標、指令
- 加入教師後台匯入題目
