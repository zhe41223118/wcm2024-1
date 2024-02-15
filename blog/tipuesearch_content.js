var tipuesearch = {"pages":[{"title":"About","text":"2024 WCM 網誌 課程倉儲: https://github.com/mdecycu/wcm2024 內容管理: https://mde.tw/wcm2024/ 課程投影片: https://mde.tw/wcm2024/reveal 課程網誌: https://mde.tw/wcm2024/blog","tags":"misc","url":"https://mde.tw/wcm2024/blog/pages/about/"},{"title":"2024 Spring WCM 課程","text":"2024 Spring WCM 的教學主要介紹如何利用 Replit, Codespaces 與 Gitpod 建立網際內容管理系統. Replit https://replit.com/signup 若希望在 Replit 平台上啟動 static site, 需要將 init.py 中的 static_port 改為 80. 因為 Replit 雲端平台中的免費帳號僅允許使用 port 80 與 443, 且對外連線的 port 80 會自動跳轉到 443, 也就是使用 https 協定進行連線, 若使用者在動態網站中點擊 SStatic, 亦即 Start Static Site, 則可以在動態對應 URL 中檢視靜態網站內容. 之後若要重新啟用動態編輯網頁, 則必須先在 Shell 以 ps -aux 找到上一個 python3 執行的 PID, 並且利用 kill PID 將此 Process ID 刪除之後, 才能再使用 Run 啟用動態網站. 由於執行 SStatic 之後使用 init.py 中 static_port = 80 將主動跳轉到 https, 與動態網站 proxy 後同一埠號, 因此在 Replit 中啟用靜態網站檢視後, 僅能用於查看最新 content, blog 與 reveal 等網站內容. Undo 與 Redo Replit 編輯器的 Undo - Ctrl + z, Redo - Ctrl + y 手機照片引用 使用手機上的 Replit App 登入後 Run 動態編輯網頁後, 選擇以瀏覽器開啟編輯模式後, 可以利用 IUpload 功能上傳手機所拍攝的圖片至 images 目錄後引用. Blog cmsite 中的網誌系統為 Pelican , 可使用 Markdown 格式編寫網誌內容, 然後再轉檔為 html 超文件. 網誌轉檔 安裝 Pelican 之後, 可以利用 gen_blog 指令檔案將 markdown 中的 .md 檔案轉為 blog 目錄中的網誌超文件. 轉換檔案之前可以刪除 markdown/images 目錄中的 index.html 檔案. 在倉儲中建立下列 gen_blog 指令檔案後, 必須利用 chmod u+x gen_blog 讓該檔案可以執行, 且必須以 ./gen_blog 執行網誌轉檔. #!/bin/bash # generate blog html files pelican markdown -o blog -s local_publishconf.py 類別與標籤 類別與標籤, 亦即 Category and Tags, 因為網誌列在課程倉儲中, 因此所謂的類別應該用在不同班級的教學內容, 而標籤則是該網誌的內容對應關鍵字, 可以是內容的大標題或者是該週上課的主題. 因為網際內容管理課程開在五專一以及四技一, 因此可以將 Category 設定為\"五專w1\"、\"四技w1\" 分別代表兩班各週次的上課內容註記, 另一個類別則是\"Misc\", 代表雜項內容. 至於 Tags 則可以使用 Python, Javascript, Replit, Codespaces 或 Gitpod 等特定技術說明的主要關鍵字. 另外, 因為 Blog 還支援全文 Search, 使用者可以使用自選的關鍵字查詢所需要的內容. 整理的內容 五專一先前上過\"計算機概論\", 而四技一在\"計算機程式\"則上過簡單的 ANSI C 以及 \"C++\", 因此\"網際內容管理\"可以讓學員各自整理先前上過的電腦課程內容, 或其他自選內容. 計算機概論的內容包含 高中計概 與 大學計概 大一計算機程式課程: 2023 Fall 相關課程: 計算機程式 cpnote (只有系上 IPv6 網段連線可以擷取) 其他大學計算機程式 課程 2017 Fall 計算機程式期末驗收 目前網頁上的內容包括一般中英文, 超文件連結, 圖片, 影片, 程式碼引用, 以及置入 Javascript 或 Brython 等動態程式. Disqus 在網誌文章加入 https://disqus.com/ , 可先設法建立自己的 DISQUS_SITENAME 後, 放入 publishconf.py 設定檔案中, 並建立 gen_dblog 指令檔案如下: #!/bin/bash # generate blog html files pelican markdown -o blog -s publishconf.py 接著使用 chmod u+x gen_dblog 讓此檔案可以允許使用者執行, 並利用 ./gen_dblog 進行帶有 Disqus 留言功能的網誌轉檔. 必須特別注意的是, 使用免費的 Basic Disqus 留言系統, 網誌文章將會被置入商業廣告. 而且因為採用 Disqus 之後, 網誌的所有超文件連結都必須採用網誌外部的符號名稱進行綁定, 因此轉檔後的內容無法在 Replit 靜態網站模式中檢視, 所以比較好的流程為, 在編輯檢視網誌過程, 先採用 gen_blog 轉檔, 一旦內容確定後, 再使用 gen_dblog 轉檔後發布. 當然, 假如之後不希望網誌中帶有 Disqus 留言資料, 只要使用 ./gen_blog 重新對網誌轉檔即可. 網路相關 最近校方的網路經常發生連線不穩的情況, 使用者在 Windows 環境, 可以透過 nslookup 與 tracert 了解網路連線情況. nslookup 可用來查詢 DNS 伺服器的運作情形, 而 tracert 則可以了解從工作主機到目標主機之間各路由器的運作情形. 由於目前的網際網路協定同時存在 IPv4 與 IPv6, 而且許多網站與網路設定並不一定支援 IPv6, 因此造成網路連線查核上的許多問題與盲點. 理論上, 假如所有網站都全數支援 IPv6, 許多問題都可迎刃而解, 但是展望未來 10 年, 或許 IPv4 協定仍無法完全消失, 因此如何在這兩種不同的網路協定中連網, 就成為使用者必須克服的議題. https://cybernews.com/what-is-vpn/ipv4-vs-ipv6/ https://www.scrapingbee.com/webscraping-questions/proxy/should-i-use-ipv6-at-home/ https://kinsta.com/blog/ipv4-vs-ipv6/ https://www.simplilearn.com/tutorials/cyber-security-tutorial/difference-between-ipv4-and-ipv6 以下為利用 tracert 查詢至 mde.tw 網站的連線情況: C:\\Users\\kmol>tracert mde.tw 在上限 30 個躍點上 追蹤 mde.tw [185.199.109.153] 的路由: 1 <1 ms <1 ms <1 ms 140.130.17.254 2 <1 ms <1 ms <1 ms 192.168.105.254 3 <1 ms <1 ms <1 ms 192.168.102.252 4 2 ms 3 ms 3 ms 192.168.239.254 5 6 ms 6 ms 6 ms 140.130.252.43 6 8 ms 8 ms 8 ms 192.192.61.142 7 9 ms 9 ms 9 ms 192.192.61.20 8 10 ms 10 ms 10 ms 192.192.61.48 9 10 ms 10 ms 10 ms 192.192.61.58 10 10 ms 10 ms 10 ms 192.192.68.62 11 * * * 要求等候逾時。 12 41 ms 41 ms 41 ms be2012.ccr71.tyo01.atlas.cogentco.com [66.28.4.233] 13 168 ms 168 ms 168 ms be2915.ccr71.gum01.atlas.cogentco.com [154.54.91.126] 14 168 ms 168 ms 168 ms be4130.ccr42.lax01.atlas.cogentco.com [154.54.5.174] 15 168 ms 168 ms 168 ms be3177.ccr22.sjc01.atlas.cogentco.com [154.54.40.146] 16 168 ms 168 ms 229 ms be3144.ccr41.sjc03.atlas.cogentco.com [154.54.5.102] 17 272 ms 272 ms 272 ms 38.88.225.242 18 269 ms 269 ms 269 ms cdn-185-199-109-153.github.com [185.199.109.153] 追蹤完成。 上列利用 tracert 查詢至 mde.tw 的網路連線, 其中編號 1 的路由器, 為機械設計系 IPv4 的 Gateway, 編號 2~4 為校主幹的路由器, [140.130.252|https://www.proxydocker.com/fr/iplookup/140.130.252] 則為 TANET Gateway, 也就是台灣學術網路與校主幹連線的通道. 編號 6~10 應該是 TANET 學術網路的虛擬內部網路路由配置, 至於編號 11 的 \"*\" 並非表示斷線, 而是該路由器可能不接受路由封包查訪, 因此沒有回覆任何資訊. 編號 12~16 則連線到 [cogentco.com|https://www.proxydocker.com/fr/iplookup/cogentco.com] 網段, 位於美國華盛頓 DC, 接著編號 17 則是連到 [38.88.225.242|https://www.proxydocker.com/fr/iplookup/38.88.225.242] 也是位於 DC 的某一台路由器. 最後, tracert 終於通過美國 DC 區域的路由器, 抵達編號 18 的 github.com, 用來配置 mde.tw 的 Github Pages 網站所在位置, 也就是 [cdn-185-199-109-153.github.com|https://www.proxydocker.com/fr/iplookup/cdn-185-199-109-153.github.com], 這是一台位於荷蘭阿姆斯特丹的伺服器.","tags":"Misc","url":"https://mde.tw/wcm2024/blog/2024-Spring-Web-based-Content-Management.html"}]};