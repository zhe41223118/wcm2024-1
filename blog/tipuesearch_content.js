var tipuesearch = {"pages":[{"title":"About","text":"2024 WCM 網誌 課程倉儲: https://github.com/mdecycu/wcm2024 內容管理: https://mde.tw/wcm2024/ 課程投影片: https://mde.tw/wcm2024/reveal 課程網誌: https://mde.tw/wcm2024/blog","tags":"misc","url":"./pages/about/"},{"title":"WCM 五專第三週課程內容","text":"以下為五專精密機械科網際內容管理課程第三週上課內容, 包括回顧計算機概論, 利用 Github Classroom 進行分組作業派送(名稱為 wcmj), 並且說明如何利用 Github Codespaces 維護個人與分組網站 . 計算機概論摘要 高中計概 大學計概 Github Pages 參考網站 ( 倉儲 ) ( 相關影片 ) 如何利用 OBS download + 網際簡報進行 直播同時錄影 ? nslookup 與 tracert nslookup - name server lookup 符號名稱伺服器查詢 tracert - trace route 路由追蹤 利用 codespaces 維護 wcm2024 網站內容 一般所謂網站, 指的是 www (world wide web) 全球資訊網協定中的 html 超文件檔案資料, 可以直接用網頁瀏覽器在近端開啟, 或放在 www 伺服器上, 由網頁瀏覽器透過網址連線後觀看網頁內容. 網頁的組成 - 請用瀏覽器連結到一個網站, 然後用滑鼠右鍵帶出 Chrome 瀏覽器的\"檢視頁面來源\", 查看該網頁有哪些超文件標註內容. 建立網頁內容 由於採直接編寫 html 建立網頁的方法比較繁瑣, 因此在網際內容管理課程中, 運用 Python 程式編寫了一套系統, 用來協助使用者建立網站內容. 當使用者在建立網站過程, 資料不斷被納入, 雖然可以利用章節對內容分類, 但在網站內容完成之前, 使用者無法依照內容建構的時間先後次序, 主題式閱讀網站資料, 因此除了章節式的網站內容之外, 可以採流水帳的方式建立網站內容, 一般稱依照時間先後次序編寫網站文章的方式為\"網誌\" ( Weblog ). 如何在 Replit 中建立並維護個人或分組的網站內容? 建立網誌內容 網際內容管理課程建立 Pelican 建構, 並且利用 Markdown 格式編寫之後, 再利用轉檔流程轉為 html. 如何在 Replit 中設定並建立個人網站中的網誌內容? 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"五專","url":"./wcm-5j-w3.html"},{"title":"WCM 四技第二週課程","text":"四技 WCM 第二週課程, 主要確認各學員是否完成 Github 中個人倉儲與網站的建立, 並且除了 Replit 還導入利用 Github Codespaces 維護個人與分組網站. 確認所有學員都已經建立個人網站 建立個人課程網站步驟: 登入 Github 連結到 https://github.com/mdecycu/cmsimde_site 利用 \"Use this template\" 下方的 \"Create a new repository\" 建立名稱為 wcm2024 的倉儲 在 wcm2024 倉儲上方的 Settings 設定頁面中, 左方 Pages 中的 Branch 分支區域, 選擇將 main 分支存為網頁的 root 根目錄 等 wcm2024 的倉儲 Github Pages 轉檔完成後, 可以看到 commits 提交區的綠色勾勾, 就完成網址為 https://帳號.github.io/wcm2024 的個人課程網站 利用上述步驟完成的倉儲內容, 同時帶有以 Python 編寫的動態網站程式, 以及位於 content 目錄中的靜態網頁資料. 確認學員已經會利用 Replit 維護網站 建議學員以 email 作為登入 Replit 的帳號, 不要依附在 Github 或 Gmail 帳號下, 以保有使用的獨立性. 由於 wcm2024 課程學員使用 Replit 免費帳號, 因此雲端 IDE 僅允許使用 Port 80 與 443 啟動網頁, 因此若要在 Replit 檢視動態網站或網誌推送到 Github 之前的內容, 必須要在動態與靜態模式中擇一使用. 如何利用 Codespaces 維護網站 Codespaces 屬於目前 Github 免費帳號下的功能之一, 與 Github 倉儲內容維護的整合度最高, 但是每個月的免費額度僅有 120 core hours, 若使用標準的 2 core 進行運算, 擇每天平均僅能使用兩個小時. 若提升至 4 core, 則每天可以使用 1 小時. 採用 Github Codespaces 維護網站的好處是, Visual Studio code 介面提供多終端機與多 ports 開啟功能, 在 Codespaces 中維護 wcm2024 的過程幾乎如同在 localhost Windows 10 或 11 的操作系統環境中進行. 利用 Github Classroom 建立分組網站 在 mdewcm2024 帳號下, 期中分組作業名稱為 1a, 若第一組組長建立 Team 名稱為 midag1, 則分組倉儲名稱將為 1a-midag1, 而五專課程則使用 5j-midjg1, 需要如此命名作業與分組倉儲名稱的原因是, 在 Github Classroom 同一個 organization 名稱下 (即 wcm2024), 各班作業名稱必須有所區別, 而且各分組 Team 名稱也不能相同. 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"四技","url":"./wcm-1a-w2.html"},{"title":"WCM 四技第一週課程","text":"四技 WCM 第一週課程, 主要引導學員登入 MS Online 並建立 Github 帳號, 以及利用 cmsimde_site 作為 Template 建立個人課程網站. 登入 MS Online 網際內容管理課程學員上課時必須登入 MS Online , 主要目的是能在 MS Teams 中上課, 一邊觀看教學示範, 一邊自行操作. 網際內容管理課程的 MS 團隊代碼: ry8vdyo Github 帳號 還未擁有 Github 帳號者, 必須自行建立 Github 帳號, 主要用來建立並維護個人的課程倉儲與網站. 建立個人課程網站 網際內容管理的個人課程網站名稱為 wcm2024, 請先登入 Github 後, 連接至 https://github.com/mdecycu/cmsimde_site , 以此倉儲作為 Template 建立個人的 wcm2024 倉儲, 並將倉儲主分支設定 Github Pages 後, 檢查是否已經可以連線到個人的課程網頁. 說明 如何利用 Github 建立個人課程網頁 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"四技","url":"./Starting-U4-WCM-course.html"},{"title":"啟動 WCM 五專課程內容","text":"以下包含五專精密機械科網際內容管理課程第一週與第二週的上課內容, 課程目標首先是讓學員了解如何利用 cmsimde_site 建立網站. 接著則是讓學員了解如何利用 Replit 維護網站內容. 五專 WCM 第一週課程內容 請學員申請 Github 帳號 Github 帳號登入依照規定需要兩段式認證(2FA, two-factor Authentication ), 設定過程必須在手機安裝 Github Mobile, 若手機可連結至智慧手錶, 則可以將認證碼利用 authy App 將兩段式登入驗證碼傳至手錶. Github 導引 https://www.google.com/search?q=github https://www.google.com/search?q=github+教學 請學員申請 Replit 帳號 - 建立使用可以收信的 Email 帳號作為 account, 自選密碼後登入 Replit 建立個人的課程倉儲 確認所有學員都已經申請 Github 帳號後, 隨即可以建立個人的課程網站, 也就是在各學員的 Github 帳號中建立 wcm2024 倉儲, 但必須在登入 Github 帳號後, 連結到 https://github.com/mdecycu/cmsimde_site 以此倉儲作為 Template, 建立名稱為 wcm2024 全部使用英文小寫字母的 public repository (公開倉儲) 根據上述步驟, 說明如何建立個人的 wcm2024 倉儲與網站 的教學影片. 一旦在個人 Github 帳號下建立 wcm2024 倉儲後, 可以進入倉儲 Settings 中的 Pages, 將 Branch 分支的 main 分支設為網頁的 root (根目錄), 就可以將 wcm2024 轉為該倉儲的網站, 而其網站的連結將會是: https://帳號.github.io/wcm2024 請學員準備一個 USB 3.0 以上的隨身碟 32GB 或 64GB 都可以, 用來存放可攜程式系統,個人數位私鑰以及其他設定檔案. 一旦在 Github 建立 wcm2024, 而且已經登記 Replit 帳號, 就可以設法讓兩個帳號透過授權, 讓 Replit import wcm2024 倉儲, 啟動網頁編輯後進行改版, 並且轉為靜態網站內容之後, 將資料推回 Github, 就可以更新 Github Pages 上的 wcm2024 靜態網站內容. 以下則利用各學員已經建立的 wcm2024 倉儲, 進行 wcm2024_5j_如何更改靜態網站標題教學影片 必須自行練習的技能 鍵盤中文與英文打字 看到電腦螢幕上的英文, 要試著用手機查詢字意, 再看看整個句子, 試著了解其含義. 另外也可以逐一將句子段落或單字複製到 Googl 英翻中網頁 , 嘗試了解各英文單字與整個文章或電腦回應的意思. 每週上課後, 至少騰出一個小時, 回頭觀看課程網誌, 並針對上課主題, 自行練習與 ChatGPT 對話, 進一步瞭解各階段的上課內容. 五專 WCM 第二週課程內容 chatgpt 使用 簡單 說明 如何利用 Gmail 帳號登入 chatgpt , 並進行提問. 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"五專","url":"./Starting-5J-WCM-course.html"},{"title":"2024 Spring WCM 課程","text":"2024 Spring WCM 的教學主要介紹如何利用 Replit, Codespaces 與 Gitpod 建立網際內容管理系統. Replit https://replit.com/signup 若希望在 Replit 平台上啟動 static site, 需要將 init.py 中的 static_port 改為 80. 因為 Replit 雲端平台中的免費帳號僅允許使用 port 80 與 443, 且對外連線的 port 80 會自動跳轉到 443, 也就是使用 https 協定進行連線, 若使用者在動態網站中點擊 SStatic, 亦即 Start Static Site, 則可以在動態對應 URL 中檢視靜態網站內容. 使用 Stop 關閉動態編輯網頁後, 若重新啟動 Webview 連結到 content/index.html, 則可將 URL 改為 /login 則可回到動態編輯網站的登入畫面. Undo 與 Redo Replit 編輯器的 Undo - Ctrl + z, Redo - Ctrl + y 手機照片引用 使用手機上的 Replit App 登入後 Run 動態編輯網頁後, 選擇以瀏覽器開啟編輯模式後, 可以利用 IUpload 功能上傳手機所拍攝的圖片至 images 目錄後引用. Blog cmsite 中的網誌系統為 Pelican , 可使用 Markdown 格式編寫網誌內容, 然後再轉檔為 html 超文件. 網誌轉檔 安裝 Pelican 之後, 可以利用 gen_blog 指令檔案將 markdown 中的 .md 檔案轉為 blog 目錄中的網誌超文件. 轉換檔案之前可以刪除 markdown/images 目錄中的 index.html 檔案. 在倉儲中建立下列 gen_blog 指令檔案後, 必須利用 chmod u+x gen_blog 讓該檔案可以執行, 且必須以 ./gen_blog 執行網誌轉檔. #!/bin/bash # generate blog html files pelican markdown -o blog -s local_publishconf.py 類別與標籤 類別與標籤, 亦即 Category and Tags, 因為網誌列在課程倉儲中, 因此所謂的類別應該用在不同班級的教學內容, 而標籤則是該網誌的內容對應關鍵字, 可以是內容的大標題或者是該週上課的主題. 因為網際內容管理課程開在五專一以及四技一, 因此可以將 Category 設定為\"五專\"、\"四技\" 分別代表兩班的上課類別, 另一個類別則是\"Misc\", 代表雜項內容. 至於 Tags 則可以使用 週次, 或 Python, Javascript, Replit, Codespaces 或 Gitpod 等特定技術說明的主要關鍵字. 另外, 因為 Blog 還支援全文 Search, 使用者可以使用自選的關鍵字查詢所需要的內容. 整理的內容 五專一先前上過\"計算機概論\", 而四技一在\"計算機程式\"則上過簡單的 ANSI C 以及 \"C++\", 因此\"網際內容管理\"可以讓學員各自整理先前上過的電腦課程內容, 或其他自選內容. 計算機概論的內容包含 高中計概 與 大學計概 大一計算機程式課程: 2023 Fall 相關課程: 計算機程式 cpnote (只有系上 IPv6 網段連線可以擷取) 機械設計工程師學習 C/C++ 的目的之一是利用 數值分析程式的運算 ( 其他 ), 設法計算出在產品開發過程中的最佳參數, 並能用圖表或近似實體的 3D 系統模擬呈現最佳設計結果. 而且參與產品設計的相關人員, 還必須關注產品設計過程或結果該如何有效呈現? 其他大學計算機程式 課程 2017 Fall 計算機程式期末驗收 目前網頁上的內容包括一般中英文, 超文件連結, 圖片, 影片, 程式碼引用, 以及置入 Javascript 或 Brython 等動態程式. Disqus 在網誌文章加入 https://disqus.com/ , 可先設法建立自己的 DISQUS_SITENAME 後, 放入 publishconf.py 設定檔案中, 並建立 gen_dblog 指令檔案如下: #!/bin/bash # generate blog html files pelican markdown -o blog -s publishconf.py 接著使用 chmod u+x gen_dblog 讓此檔案可以允許使用者執行, 並利用 ./gen_dblog 進行帶有 Disqus 留言功能的網誌轉檔. 必須特別注意的是, 使用免費的 Basic Disqus 留言系統, 網誌文章將會被置入商業廣告. 而且因為採用 Disqus 之後, 網誌的所有超文件連結都必須採用網誌外部的符號名稱進行綁定, 因此轉檔後的內容無法在 Replit 靜態網站模式中檢視, 所以比較好的流程為, 在編輯檢視網誌過程, 先採用 gen_blog 轉檔, 一旦內容確定後, 再使用 gen_dblog 轉檔後發布. 當然, 假如之後不希望網誌中帶有 Disqus 留言資料, 只要使用 ./gen_blog 重新對網誌轉檔即可. 網路相關 最近校方的網路經常發生連線不穩的情況, 使用者在 Windows 環境, 可以透過 nslookup 與 tracert 了解網路連線情況. nslookup 可用來查詢 DNS 伺服器的運作情形, 而 tracert 則可以了解從工作主機到目標主機之間各路由器的運作情形. 由於目前的網際網路協定同時存在 IPv4 與 IPv6, 而且許多網站與網路設定並不一定支援 IPv6, 因此造成網路連線查核上的許多問題與盲點. 理論上, 假如所有網站都全數支援 IPv6, 許多問題都可迎刃而解, 但是展望未來 10 年, 或許 IPv4 協定仍無法完全消失, 因此如何在這兩種不同的網路協定中連網, 就成為使用者必須克服的議題. https://cybernews.com/what-is-vpn/ipv4-vs-ipv6/ https://www.scrapingbee.com/webscraping-questions/proxy/should-i-use-ipv6-at-home/ https://kinsta.com/blog/ipv4-vs-ipv6/ https://www.simplilearn.com/tutorials/cyber-security-tutorial/difference-between-ipv4-and-ipv6 以下為利用 tracert 查詢至 mde.tw 網站的連線情況: C:\\Users\\kmol>tracert mde.tw 在上限 30 個躍點上 追蹤 mde.tw [185.199.109.153] 的路由: 1 <1 ms <1 ms <1 ms 140.130.17.254 2 <1 ms <1 ms <1 ms 192.168.105.254 3 <1 ms <1 ms <1 ms 192.168.102.252 4 2 ms 3 ms 3 ms 192.168.239.254 5 6 ms 6 ms 6 ms 140.130.252.43 6 8 ms 8 ms 8 ms 192.192.61.142 7 9 ms 9 ms 9 ms 192.192.61.20 8 10 ms 10 ms 10 ms 192.192.61.48 9 10 ms 10 ms 10 ms 192.192.61.58 10 10 ms 10 ms 10 ms 192.192.68.62 11 * * * 要求等候逾時。 12 41 ms 41 ms 41 ms be2012.ccr71.tyo01.atlas.cogentco.com [66.28.4.233] 13 168 ms 168 ms 168 ms be2915.ccr71.gum01.atlas.cogentco.com [154.54.91.126] 14 168 ms 168 ms 168 ms be4130.ccr42.lax01.atlas.cogentco.com [154.54.5.174] 15 168 ms 168 ms 168 ms be3177.ccr22.sjc01.atlas.cogentco.com [154.54.40.146] 16 168 ms 168 ms 229 ms be3144.ccr41.sjc03.atlas.cogentco.com [154.54.5.102] 17 272 ms 272 ms 272 ms 38.88.225.242 18 269 ms 269 ms 269 ms cdn-185-199-109-153.github.com [185.199.109.153] 追蹤完成。 上列利用 tracert 查詢至 mde.tw 的網路連線, 其中編號 1 的路由器, 為機械設計系 IPv4 的 Gateway, 編號 2~4 為校主幹的路由器, 140.130.252 則為 TANET Gateway, 也就是台灣學術網路與校主幹連線的通道. 編號 6~10 應該是 TANET 學術網路的虛擬內部網路路由配置, 至於編號 11 的 \"*\" 並非表示斷線, 而是該路由器可能不接受路由封包查訪, 因此沒有回覆任何資訊. 編號 12~16 則連線到 cogentco.com 網段, 位於美國華盛頓 DC, 接著編號 17 則是連到 38.88.225.242 也是位於 DC 的某一台路由器. 最後, tracert 終於通過美國 DC 區域的路由器, 抵達編號 18 的 github.com, 用來配置 mde.tw 的 Github Pages 網站所在位置, 也就是 cdn-185-199-109-153.github.com , 這是一台位於荷蘭阿姆斯特丹的伺服器. 如何更快連線 從上述的 tracert, 我們已經知道 mde.tw 使用 Github Pages 建立的靜態網誌, 在查詢的當下, 雲端主機位於歐洲荷蘭阿姆斯特丹的 github.com 機房, 由於 mde.tw/wcm2024 的內容之所以使用 Github Pages 配置, 其主要目的是希望留下每一次改版的歷程, 且可以讓學員透過 cmsite 作為 template, 快速建立網站架構. 但是若所有學員在擷取 mde.tw 網站時都必須一路從系網連線到阿姆斯特丹的伺服器, 其網路連線成本未免過高, 因此可以有兩種方式加快連線到 mde.tw/wcm2024 網站. 其一是透過 代理主機 , 其二則是將內容同步配置在近端伺服器中, 例如: http://229.cycu.org/wcm2024 .","tags":"Misc","url":"./2024-Spring-Web-based-Content-Management.html"}]};