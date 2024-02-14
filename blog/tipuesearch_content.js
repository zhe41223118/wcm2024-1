var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/mdecycu/wcm2024 內容管理: https://mde.tw/wcm2024/ 課程投影片: https://mde.tw/wcm2024/reveal 課程網誌: https://mde.tw/wcm2024/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 Spring WCM 課程","text":"2024 Spring WCM 的教學主要介紹如何利用 Replit, Codespaces 與 Gitpod 建立網際內容管理系統. Replit https://replit.com/signup 若希望在 Replit 平台上啟動 static site, 需要將 init.py 中的 static_port 改為 80. 因為 Replit 雲端平台中的免費帳號僅允許使用 port 80 與 443, 且對外連線的 port 80 會自動跳轉到 443, 也就是使用 https 協定進行連線, 若使用者在動態網站中點擊 SStatic, 亦即 Start Static Site, 則可以在動態對應 URL 中檢視靜態網站內容. 之後若要重新啟用動態編輯網頁, 則必須先在 Shell 以 ps -aux 找到上一個 python3 執行的 PID, 並且利用 kill PID 將此 Process ID 刪除之後, 才能再使用 Run 啟用動態網站. 由於執行 SStatic 之後使用 init.py 中 static_port = 80 將主動跳轉到 https, 與動態網站 proxy 後同一埠號, 因此在 Replit 中啟用靜態網站檢視後, 僅能用於查看最新 content, blog 與 reveal 等網站內容. 另外可以利用 gen_blog 指令檔案將 markdown 中的 .md 檔案轉為 blog 目錄中的網誌超文件. 轉換檔案之前可以刪除 markdown/images 目錄中的 index.html 檔案. #!/bin/bash # generate blog html files pelican markdown -o blog -s local_publishconf.py","tags":"Misc","url":"./2024-Spring-Web-based-Content-Management.html"}]};