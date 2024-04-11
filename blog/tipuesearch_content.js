var tipuesearch = {"pages":[{"title":"About","text":"2024 WCM 網誌 課程倉儲: https://github.com/mdecycu/wcm2024 內容管理: https://mde.tw/wcm2024/ 課程投影片: https://mde.tw/wcm2024/reveal 課程網誌: https://mde.tw/wcm2024/blog","tags":"misc","url":"./pages/about/"},{"title":"WCM 四技第八週課程","text":"四技 WCM 第八週課程, 從教育的本質看網際內容管理課程的內容要點. wcm2024 1a w8 從教育的本質看課程內容 wcm2024 1a w8 說明如何將影片嵌入網頁","tags":"四技","url":"./wcm-1a-w8.html"},{"title":"WCM 五專第八週課程內容","text":"五專 WCM 第八週課程, 建議學員長期維護個人的履歷網站, 並註冊領英帳號. 領英 有關 領英 註冊領英帳號 - 請直接以 Gmail 登入, 並設定身分為學生. Do you actually need a website? 人格特質的飬成？ Pull Requests 以 https://github.com/51233138/wcm2024 為例, scrum-1 登入 Github 後, fork 51233138 帳號下的 wcm2024 倉儲後, 設法改版後, 利用 Pull Requests 的流程要求 51233138 將改版資料 拉回合併 . 網際內容管理課程回顧 學員簡報與自評 - 請製作一個帶有說明字幕的期中報告影片, 放入個人的 wcm2024 影片, 以便在 w9 期中考週進行簡報與自評． 申請 Github 帳號: 目的是希望針對網站內容改版的每一個版本都能有效取得 申請 Replit 帳號: 可以在網頁瀏覽器或手機 App 修改網站內容 學習 Brython 程式: 可以直接在網頁上執行與產品設計有關的數值運算 Angry Bird 第十週開始是否可以將下列程式改採 Brython 編寫? any-bird-python Angry Birds ab , 執行 ab 參考: https://github.com/mdecycu/webgame 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"五專","url":"./wcm-5j-w8.html"},{"title":"WCM 五專第七週課程內容","text":"五專 WCM 第七週課程, 開始說明如何在頁面配置 Brython 環境, 並將 Brython 程式配置在個人 Github 帳號下的 Gist. 練習利用程式建立單字查詢網頁 wcm2024 5j w7 利用 Python 建立 Javascript 電子書的單字查詢超文件 利用 2.txt 與 1.txt Python 程式, 從下列電子書建立英文單字查詢網頁: 2023 Programming for Absolute Beginners - Using the JavaScript Programming Language 單字查詢網頁 Brython 程式 首先, 對 ChatGPT 提問: Brython 是甚麼程式語言? 該如何使用? 回答: Brython 是一種在瀏覽器中運行的 Python 解譯器。它允許您在網頁上使用 Python 來編寫 Web-based 前端程式，而無需安裝任何套件或外部解譯器。 要使用 Brython，您可以按照以下步驟進行： 在您的網頁中引入 Brython 的 JavaScript 程式。就可以透過 CDN 或將文件下載到網頁中。 在 HTML 文件中，使用 <script type=\"text/python\"> 標籤來編寫 Python 程式碼。 當網頁加載時，Brython 會自動解譯並執行這些 Python 程式碼，並將結果呈現在網頁上。 如此就可以在瀏覽器中使用 Python 編寫動態網頁，而無需使用 JavaScript。這對於喜歡 Python 語法的開發者來說是一個很好的選擇。 再問: 可以舉一個簡單 Brython 程式範例, 從 1 累加到 10, 然後在網頁中以 html 列出運算結果 回答: 累加結果： 累加結果： 請根據上面的 Brython 範例, 寫出能夠從 https://mde.tw/cd2024/content/About.html 取出 anchor 字串為 \"2021_odoo_reading.html\" 的 href 資料 網頁中特定 anchor 的 href 資料： 以下為 Brython 由電腦執行猜數字遊戲: wcm2024 5j w7 intro brython number guessing 自動猜數字遊戲 Brython 程式碼: # 程式自動猜數字遊戲 # 從 browser 導入 document, html 與 alert 模組 from browser import document, html, alert # 導入 random 模組 import random # 宣告一個變數, 名稱為 \"id4\", 與超文件中 id 為 \"brython_div1\" 的物件進行對應 id4 = document[\"brython_div1\"] # 宣告一個變數, 名稱為 \"執行次數\", 起始對應為 100 執行次數 = 100 # 宣告 \"總猜測次數\" 變數, 起始對應為 0 總猜測次數 = 0 # range() 是一個能夠建立一系列數字的函式 for i in range(執行次數): # \"<=\" 是 Brython 特有符號, 用來將超文字指向左邊對應的變數在網頁超文件標註中的位置 id4 <= \"第\" + str(i+1) + \"次玩:\" + html.BR() 下限 = 1 上限 = 100 # 利用能夠產生整數亂數的函式, 建立標準答案變數對應整數 標準答案 = random.randint(下限, 上限) # pc 所猜的數字也是由亂數函式產生 pc猜的數字 = random.randint(下限, 上限) #print(標準答案, pc猜的數字) #integer int() #string str() #float float() #你猜的數字 = int(input(\"請輸入您所猜的整數:\")) 猜測次數 = 1 while 標準答案 != pc猜的數字: if 標準答案 < pc猜的數字: #print(\"太大了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 - 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太大了!\" + html.BR() 上限 = pc猜的數字 - 1 else: #print(\"太小了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 + 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太小了!\" + html.BR() 下限 = pc猜的數字 + 1 #pc猜的數字 = int(input(\"請輸入您所猜的整數:\")) pc猜的數字 = random.randint(下限, 上限) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id4 <= \"電腦猜對了, 答案為: \" + str(標準答案) + \", 總共猜了 \"+ str(猜測次數) + \"次\" + html.BR() 總猜測次數 += 猜測次數 平均猜測次數 = int(總猜測次數/執行次數) #print(\"平均次數\", 平均猜測次數) id4 <= \"平均次數: \" + str(平均猜測次數) Gist https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists 請根據上列有關 Github Gist 的簡介說明, 將 Gist 相關的參考資料整理到各自的網誌. 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"五專","url":"./wcm-5j-w7.html"},{"title":"WCM 四技第六週課程","text":"四技 WCM 第六週課程, 說明如何透過與 ChatGPT 的對話, 了解有關 git 在不同專業領域的應用方法. Git 歷史與希望解決的問題 問題: 請簡述一下 Git 的發展歷史, 以及當時的背景如何? Git 想要解決甚麼問題? ChatGPT 回答: Git 是由 Linus Torvalds 在 2005 年開始開發的分散式版本控制系統。在此之前，像 CVS 和 Subversion 等集中式版本控制系統存在著一些問題，比如需要與中央存儲庫保持連接、分支和合併操作複雜等。在 Linux 核心程式開發過程中，Torvalds 和其他開發者開始感受到集中式版本控制系統的種種限制和不便，這促使他開始開發一個更適合分散式開發的工具。 Git 的目標是解決集中式版本控制系統的一些瓶頸，包括： 性能問題：集中式版本控制系統在大型專案中操作效率低，尤其是在提交和合併時。 分支和合併操作的複雜性：在集中式系統中，分支和合併操作可能會變得耗時且複雜，過程中容易出現錯誤。 依賴中央存儲庫：集中式系統需要即時與資料伺服器連線，一旦斷線或伺服器故障，可能會導致開發過程中的中斷。 在這些問題的背後，是軟體開發過程的變化和複雜性增加。隨著項目變得越來越大，開發團隊變得分散，需要更靈活和高效率的工具來管理代碼。Git 的分散式架構允許開發人員在沒有連接到中央伺服器的情況下進行本地端操作，並且提供了高效的分支和合併機制，從而更有效滿足了協同需求。 因此，Git 的發展是在不斷變化和擴大的軟體開發生態系統中的一個自然回應，旨在解決集中式版本控制系統所遇到的種種挑戰，並為開發人員提供更好的工具和流程。 再問: 集中式版本控制系統為何在提交與合併上有性能問題? ChatGPT 回答: 集中式版本控制系統在提交和合併上可能會遇到性能問題，主要是由於以下幾個原因： 單一伺服器負載：在集中式版本控制系統中，所有的提交和合併操作都需要與中央伺服器進行連線。當開發人員數量增加，或者在大型項目中進行大量提交和合併操作時，這個中央伺服器可能會成為性能瓶頸，導致提交和合併操作的速度變慢。 網路延遲：因為提交和合併操作需要與中央伺服器進行連線，因此網路延遲也會影響操作的速度。特別是當開發人員分佈在不同的地理位置時，距離和網路品質都可能擴大延遲。 資料傳輸量：提交和合併操作可能涉及大量的資料傳輸，尤其是當提交或合併的檔案很大或者進行多次修改時。這些大量的資料傳輸需要消耗時間與頻寬，進一步影響操作的性能。 鎖定操作：有些集中式版本控制系統在提交和合併時可能會對文件或資料夾進行鎖定，以避免同時進行衝突的操作。這種鎖定操作可能會導致等待時間增加，特別是在多人同時進行操作的情況下。 因此，集中式版本控制系統的性能問題主要是由於其架構設計所導致，即所有操作都必須通過中央伺服器進行。因而限制了系統的擴展性和彈性，特別是在大型或分散式團隊中。 再問: 為何使用 Git 沒有單一伺服器負載問題? ChatGPT 回答: 使用 Git 沒有單一伺服器負載問題的主要原因是 Git 的分散式架構。在 Git 中，每一位開發人員都擁有一個完整的本地儲存庫（repository），這使得提交和合併操作不需要依賴於單一的中央伺服器。如此一來，就不會出現單一伺服器負載問題。 換言之，當開發人員在本地進行提交時，各協同人員只需將變更提交到自己的本地儲存庫中，而不是向中央伺服器提交。使得提交操作的速度不再受到中央伺服器的限制，而是受到本地計算機的性能限制，一般情況下會比提交到單一伺服器的執行速度快上許多。 當需要與其他開發人員共享變更時，Git 提供了分支和合併的機制，開發人員可以在本地進行分支和合併操作，而不需要直接與中央伺服器連線。使得提交和合併操作可以在本地進行，不受網路延遲和頻寬限制，從而更加快速並提高協同效率。 另外，即使在多人協作的情況下，由於每個開發人員都有自己的本地儲存庫，這些操作可以同步進行，而不會互相干擾或造成壓力集中在單一伺服器上。 因此，Git 的分散式架構使得提交和合併操作不再依賴於單一的中央伺服器，從而消除了單一伺服器負載問題，提高了系統的性能與彈性。 Git 如何解決產品設計問題 問題: 身為產品開發人員, 使用的是商用封閉的 CAD 套件, 該如何使用 Git 來提升工作效率? ChatGPT 回答: 即使使用商用封閉的 CAD 套件，仍然可以使用 Git 來提升工作效率。以下是一些使用 Git 的方式： 版本控制: 使用 Git 對 CAD 項目進行版本控制，可以跟蹤每個版本的變更，並輕鬆地回溯到先前的版本。這對於保留歷史記錄、管理修改和恢復意外更改非常有用。 分支管理: 在 Git 中使用分支來進行不同功能或版本的開發。你可以在不同的分支上同時進行不同的實驗和開發工作，而不會影響主要版本的開發。 協作與共享: 透過 Git，團隊成員可以輕鬆地共享各自的工作成果，進行協作開發。每個人可以在自己的分支上工作，然後通過合併請求（pull request）將修改合併到主分支中。 程式審查: 利用 Git 的分支和合併功能進行程式審查。團隊成員可以在專門的分支上提交各自編寫的程式變更，然後其他成員可以查看這些變更，提供意見和建議，最終通過合併到主分支中。 自動化流程: 使用 Git 配合持續集成（CI）和持續部署（CD）工具，自動化 CAD 項目的測試、構建和部署流程。這樣可以節省時間並降低錯誤，同時確保項目的品質和穩定性。 文檔和問題追蹤: 將 CAD 專案的文檔和問題追蹤整合到 Git 庫中，以便於跟蹤和管理。例如: 可以使用 Git 提供的 Wiki 功能來撰寫文檔，並使用 Issue 跟蹤功能來追蹤問題和任務。 因此，即使使用商用封閉的 CAD 套件，Git 仍然可以成為提升工作效率的強大工具，幫助團隊更好地協作、管理和追蹤 CAD 開發專案。 再問: 可是商用 CAD 採用 binary 格式的零件檔案, 在協同產品設計流程中, 該如何使用 Git 提升協同效能? ChatGPT 回答: 即使 CAD 文件是以 binary 格式保存的，你仍然可以使用 Git 來提升協同效能。以下是一些方法： 使用 LFS（Large File Storage）: Git LFS 是一個 Git 擴增模組，專門用於管理大型文件，包括 CAD 文件等二進制文件。透過 Git LFS，可以將大型 CAD 文件存儲在單獨的存儲庫中，而不會將它們放在 Git 存儲庫中，從而減少存儲庫大小和傳輸時間。 拆分項目: 將 CAD 項目拆分為更小的部分，每個部分都是可獨立開發和測試的。這樣可以降低對於 binary 文件的變更衝突，並使得協同開發更加順暢。 定期同步: 要求團隊成員定期將他們的工作同步到 Git 存儲庫中，以便及時發現和解決衝突。透過定期同步，可以最大程度地減少衝突和重複工作。 使用分支: 在 Git 中使用分支來進行不同功能或版本的開發。每個團隊成員可以在自己的分支上工作，而不會影響主要的生產環境。這樣可以提高彈性，同時減少對於 binary 文件的同時修改。 程式審查: 使用 Git 的分支和合併功能進行程式審查。每個成員在完成工作後，可以提交程式變更到自己的分支，然後發起合併請求。其他成員可以查看這些變更，提供意見和建議，確保程式的品質和穩定性。 文件管理: 使用 Git 存儲庫中的 Wiki 功能來管理 CAD 文件的相關文檔，包括設計文檔、變更日誌等。這樣可以使得團隊成員更容易地找到並理解 CAD 文件的相關訊息。 因此，即使 CAD 文件是以 binary 格式保存的，仍然可以通過合理使用 Git 和相應的工具來提升協同效能，降低衝突和重複工作，從而更加高效地進行協同產品設計流程。 再問: 若設計流程採用 Siemens NX 設計零組件, 若將每一個零組件的設計過程採 NXOpen Python 程式存檔, 並且透過設計參數進行零組件調控, 就採用 Git 分散式版本管理系統上, 會比直接使用 binary 格式更有效率嗎? ChatGPT 回答: 在將每個零組件的設計過程以 NXOpen Python 程式存檔的情況下，使用 Git 分散式版本管理系統相比直接使用 binary 格式可能會更有效率。這主要是因為： 可讀性和可比較性：使用 NXOpen Python 程式存檔可以使得零組件的設計過程更具有可讀性和可比較性。相比於 binary 格式，Python 程式碼可以被版本控制系統更好地管理，使得團隊成員可以更容易地查看、比較和理解每個零組件的設計過程。 易於跟蹤和管理：Python 程式存檔可以更輕鬆地跟蹤和管理設計過程中的變更。Git 可以記錄每次提交的修改，包括添加、刪除和修改的程式碼行數，從而使得團隊可以清楚地了解每個零組件的設計歷史和演變過程。 設計參數的調控：使用 Python 程式存檔可以更靈活地調控零組件的設計參數。可以使用程式碼來自動化設計過程，並且通過修改參數來調整零組件的性能和外觀，從而更有效地進行重複性流程設計以及最佳化。 協同開發與程式審查：與 binary 格式相比，Python 程式存檔更適合進行協同開發與程式碼的審查。團隊成員可以在版本控制系統中查看並評論每個零組件的設計程式碼，提供意見和建議，從而確保設計的品質和一致性。 因此，使用 NXOpen Python 程式存檔並結合 Git 分散式版本管理系統可以更有效地管理和控制零組件的設計過程，提高團隊的協同效率和設計品質。 從 git init 到 git push 啟動近端可攜程式系統 更換目錄至 y:\\tmp 分別建立 gitproject\\repository 與 gitserver\\repository 目錄 利用以下指令, 設定之後的 git init 將採用 main 作為內定主分支 在 Y:\\tmp\\gitproject> git config --global init.defaultBranch main 進入 gitproject\\repository 目錄, 新增一個目錄名稱為 repo1, 進入 repo1 後執行 git init 進入 gitserver\\repository 目錄, 新增一個目錄名稱為 repo1, 進入 repo1 後執行 git init --bare 之後在 Y:\\tmp\\gitproject\\repo1 目錄操作, 建立新檔案 README.md: echo \"Hello, World!\" > README.md git add README.md git commit -m \"Initial commit\" git remote add origin y:\\tmp\\gitserver\\repository\\repo1 git push -u origin main 如此, 就可以將 Y:\\tmp\\gitproject\\repo1 中的倉儲內容送到 Y:\\tmp\\gitserver\\repository\\repo1 目錄中. 之後請在 C:\\tmp\\repository> 執行 git clone Y:\\tmp\\gitserver\\repository\\repo1, 由於沒有特別指令倉儲 clone 後的目錄名稱, 因此 git 會將 Y:\\tmp\\gitserver\\repository\\repo1 倉儲內容複製一份放入 C:\\tmp\\repository\\repo1 目錄中. 表示目前 Y:\\tmp\\gitserver\\repository\\repo1 伺服器中的 repo1, 已經分別存入 Y:\\tmp\\gitproject\\repo1 與 C:\\tmp\\repository\\repo1 目錄中, 使用者可以分別在這兩個倉儲中進行改版後, 在各自的倉儲資料中進行提交, 隨後再設法將改版內容 push 到 Y:\\tmp\\gitserver\\repository\\repo1 中進行合併. 最後, 若要讓使用者跨網路存取 Windows 操作系統上的倉儲, 可以根據 這裡 的說明, 啟動伺服器: git daemon --reuseaddr --base-path=. --export-all --verbose 然後利用 C:\\tmp\\repository>git clone git://localhost/repo1 repo002 取下倉儲內容, 其中的 localhost 可以使用外部 IP 或對應的網路符號名稱. 若要在 Windows 環境打造一個類似 Github 的網際環境, 可以採用 https://github.com/gogs/gogs , 其中包括網際資料庫 PostgreSQL 伺服器的應用. 以上操作的教學影片: wcm2024 1a w6 git client server 實際操作 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"四技","url":"./wcm-1a-w6.html"},{"title":"WCM 五專第六週課程內容","text":"五專 WCM 第六週課程, 閱讀 Git 相關原文書, 需要認識多少英文單字. 另外以 iframe 嵌入先前的教學影片, 並摘要各影片內容. Pro Git 電子書 假如要較為深入了解 Git, 就 https://git-scm.com/book/en/v2 這本電子書來說, 需要認識多少英文單字? check_dict_from_cdict_net.py (建立英文單字查詢 html 檔案) get_txt_from_pdf.py (從 pdf 檔案中取出文字內容) 為了能夠執行 get_txt_from_pdf.py, Replit Python3 程式庫需要分別安裝 fitz 以及 pymupdf 等模組. 先安裝 fitz 模組: pip install fitz 再安裝 pymupdf 模組: pip install pymupdf 目前 get_txt_from_pdf.py 會從 pdf 檔案擷取文字內容並直接列印在 console, 請利用 ChatGPt, 要求將擷取的文字內容存為檔案. 請利用上述兩個程式, 以 html 格式整理出上列電子書的英文單字查詢涵義與應用資料. 各學員完成上述 Python 程式操作後, 請將過程與結果整理在自己的 wcm2024 課程網站與網誌中. 另外, 因為 https://git-scm.com/book/en/v2 可以直接從 git-scm.com 網站下載, 一旦上傳到 downloads 目錄取出英文單字查詢超文件之後, 可以不將這個 18 MB 的檔案放在倉儲內, 根據 這裡 的說明, 可得知該如何操作. 操作結果: https://mde.tw/wcm2024/downloads/words_progit.html https://mde.tw/wcm2024/downloads/words_w6_git_add_except.html wcm2024 5j w6 progit vocabulary check up 教學影片: Gist 的應用 Gist 應用 上 Gist 應用 下 教學影片 五專網際內容管理: wcm2024 5j 使用 chatgpt 簡介 1.mp4 wcm2024 5j 建立 wcm2024倉儲與網站 2.mp4 wcm2024 5j 如何更改靜態網站標題 3.mp4 wcm2024 5j w3 1 如何下載可攜程式套件 4.mp4 wcm2024 5j w3 2 下載 sharex 並進行設定 5.mp4 wcm2024 5j w3 3 利用 ShareX 截圖放入個人網站 6.mp4 wcm2024 5j w4 1 建立個人最短網址網站 7.mp4 wcm2024 5j w4 2 如何在 Replit 執行靜態網站檢視 8.mp4 wcm2024 5j w4 3 如何在倉儲中建立 main2 與 static python 檔案 9.mp4 wcm2024 5j w5 與 ChatGPT 詢答的內容整理至網誌 10 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"五專","url":"./wcm-5j-w6.html"},{"title":"WCM 四技第五週課程","text":"四技 WCM 第五週課程, 以 iframe 嵌入先前的教學影片, 並摘要各影片內容. 教學影片 四技一網際內容管理: wcm2024_1a_1_如何建立個人的課程網站_1.mp4 wcm2024_1a_如何利用 Replit 修改網站標題_2.mp4 wcm2024_1a_如何利用 codespaces 維護網站內容_3.mp4 wcm2024_1a_w3_1_利用 codespace 維護分組網站_4.mp4 wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組_5.mp4 wcm2024_1a_w3_3_如何在 replit 自設 .ssh 維護分組倉儲_6.mp4 wcm2024_1a_w4_複習有關網站與 cmsimde 相關內容_7.mp4 wcm2024_1a_w4_說明如何在 Replit Codespaces 與 Gitpod 執行倉儲的動態與靜態網站_8.mp4 wcm2024 1a w5 Replit 平台上的分組倉儲權限設定_9.mp4 wcm2024 1a w5 Putty Solvespace STL 零件檢視方法_10.mp4 大規模人工智慧運算的時代：前景、影響及回應 Questions for CMSiMDE 動態與靜態系統能不能參照相同的 static, downloads 與 images 路徑 動態與靜態系統能不能使用 Template, 讓頁面顯示更有彈性 系統能否成為其他系統的模組, 或發展出 API 架構 對於圖片與 STL 引用, 能否強化其即時互動性 在自架主機上能否直接與 CoppeliaSim 或 Webots 的模擬場景互動 與 Web-based Solvespace 進行整合 將 Range3 作為後端 FEM 運算模組 納入 Pyslvs-UI 的演算模組架構 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"四技","url":"./wcm-1a-w5.html"},{"title":"WCM 五專第五週課程內容","text":"第五週將利用與 ChatGPT 的對話, 整理與精密機械科有關的問題詢答紀錄. 對 ChatGPT 提問 未來在精密機械專業尋找實習機會, 需要準備哪些資料? 以目前台灣的產業情況而言, 比較有永續的精密機械產業有哪些? 現代年輕人, 應該如何學習運用電腦與網路? 以目前 AI 的發展趨勢來看, 會對學校教育有哪些重大影響? 請利用網路搜尋上列問題的可能回應資料, 篩選認為有用的資料放入個人的課程網站中, 並回報到課程倉儲的 討論區 . 討論串任務說明: 請利用個人的課程網站 (wcm2024) 中的網誌, 編寫一份名稱為\"第五週網路詢答整理\"的網誌, 並將已經完成的網誌連結以學號作為 Link 的字串名稱, 回報至 討論串 中. 註記: 利用 Replit 檢視尚未推向 Github 的網誌, 需要下列兩個額外的程式: main2.py ( main2.txt ) 以及 static.py ( static.txt ) 示範 如何在 Replit 倉儲中加入靜態網站檢視的功能 教學影片 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"五專","url":"./wcm-5j-w5.html"},{"title":"WCM 四技第四週課程","text":"四技 WCM 第四週課程, 複習前三週的課程內容, 並且介紹 git 與 cmsimde 的相關用法. 有關建立網站 這裡所謂的網站指的是 Web site, 也就是 WWW (World Wide Web) 伺服器 (Server)端的超文件 (Hypertext), 且此超文件包含 css 與 Javascript 資料, 用來定義使用者利用瀏覽器連線時所得到的資料內容. 網際內容管理的網際指的並非網際網路的 Internet, 而是指 Web-based, 也就是針對網頁瀏覽器檢視的內容加以管理, 而這些內容除了具備各種不同格式的文字外, 還包括靜態圖片與動態的影音多媒體. 因為希望所管理的網站內容, 從無到有的過程留下改版歷程, 因此使用分散式版次管理系統進行網頁的配置, 也就是利用 Github 所提供的 Pages 功能來建立網頁. 又因為直接編輯帶有各種標註符號的超文件過程較為繁瑣, 因此利用 Python 與 Javascript 編寫了一套網頁編輯系統, 也就是 cmsimde 套件, 可以在 Python 與特定模組的環境中啟動, 也就是所謂的動態編輯網站, 使用者在 cmsimde 網際管理系統中所編輯的超文件內容存入套件 config 目錄中的 content.htm, 並且利用此超文件中的 H1~H3 標註作為分頁界線, 將 content.htm 分割為具有三個階層的頁面內容, 用來展示使用者所建立的最終 Github Pages 靜態網頁內容, 此網頁資料儲存在 cmsimde 套件中的 content 目錄, 並將靜態的 css 與 Javascript 儲存在 cmsimde 套件中的 static 目錄中. cmsimde 套件有關動態與靜態網站的標題、啟動網址與埠號設定位於 init.py 程式檔案中, 若將 init.py 中的啟動網址設為外部 IP, 則此網際內容管理系統的編輯網站, 可直接連外. wcm2024_1a_w4_複習有關網站與 cmsimde 相關內容 教學影片 Replit 靜態網站檢視 下載 main2.txt 與 static.txt , 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. 說明 如何在 Replit 檢視靜態網站 教學影片 說明 如何下載 replit_main2.7z 並在倉儲中建立兩個檔案 教學影片 Replit 建立分組倉儲權限 由於 Replit 上的免費帳號僅允許與一個 Github 帳號對應, 因此若將分組網站 import 到 Replit, 必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config (id_rsa.pub 必須登錄到 Github 對應帳號), 其中的 config 內容為: Host github.com User git Hostname github.com 而 Host 的設定與 Windows putty 中的 session 名稱相同, 配合使用的 ssh 連線指令將會是: git clone --recurse-submodules git@github.com:mdewcm2024/分組倉儲名稱.git 當使用者完成 /home/runner/.ssh 目錄中的 id_rsa 與 config 建立後, Replit 會定期刪除免費用戶的 .ssh 目錄, 因此使用者必須將此兩個檔案存至隨身碟, 並在需要對分組倉儲改版時, 啟動分組倉儲的動態網站, 將隨身碟中的 id_rsa 與 config 檔案, upload 到分組倉儲的 downloads 目錄後, 再利用 ssh.py 的執行, 將 id_rsa 與 config 移動到 /home/runner/.ssh 目錄中. 也就是執行: python3 ssh.py ssh.py 程式內容如下: import os if not os.path.exists(\"/home/runner/.ssh\"): os.makedirs(\"/home/runner/.ssh\") os.system(\"mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa\") os.system(\"mv ./downloads/config.txt /home/runner/.ssh/config\") os.system(\"chmod og-rwx /home/runner/.ssh/id_rsa\") Replit, Codespaces 與 Gitpod 執行動態與靜態網站 說明 如何在 Replit, Codespaces 與 Gitpod 維護並檢視網頁內容 LaTeX 為了利用 LaTeX 建立各組的期中與期末報告, 請下載 http://229.cycu.org/miktex-portable.7z (需要密碼) Git Tutorial https://github.com/git-guides https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources A Tutorial for Github https://git-scm.com/book/zh-tw/v2 (繁體中文, 僅翻譯至第六章) https://git-scm.com/book/zh/v2 (簡體中文) 請各分組在分組網站中建立一個名稱為\"git\"的 H1 頁面, 以協同方式整理上述與 Git 有關的內容: 1a-ag1 ( repo ) 1a-ag2 ( repo ) 1a-ag3 ( repo ) 1a-ag4 ( repo ) 1a-ag5 ( repo ) 1a-ag6 ( repo ) 1a-ag7 ( repo ) 1a-ag8 ( repo ) 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"四技","url":"./wcm-1a-w4.html"},{"title":"WCM 五專第四週課程內容","text":"以下為五專精密機械科網際內容管理課程第四週上課內容, 包括回顧計算機概論, 以及如何在網頁推送至 Github 倉儲之前檢查所編輯的網頁內容. 建立個人最短網址網站 Github Pages 服務可以讓 Github 帳號的擁有者, 使用\"帳號.github.io\"作為倉儲名稱, Github 會自動將此網站設定 Github Pages , 假如此倉儲內部帶有超文件, 則此倉儲對應的網址將會是 https://帳號.github.io 說明 如何建立短網址的 Github Pages 網站 教學影片 下載 main2.txt 與 static.txt , 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. 說明 如何在 Replit 檢視靜態網站 教學影片 說明 如何下載 replit_main2.7z 並在倉儲中建立兩個檔案 教學影片 以上為第四週進度 Foosball 與影像辨識 有關 Foosball History of Foosball Raspberry Pi 40623128 40623130 airhockey https://github.com/mdecycu/foosball_robot OBS 錄影與直播 https://obsproject.com/ 是一套自由開放原始碼的錄影與直播套件. 在 Windows 操作系統可以使用 可攜模式 執行. 開啟 Y:\\obs\\bin\\64bit\\obs64.exe 後, 可以選擇串流或錄影優先模式, 並在\"設定\"中的\"一般\"下的\"語言\"選擇使用 English 後, 重新啟動就可顯示英文語系畫面. Windows 操作系統中的 OBS 設定內容存放於 C:\\Users\\使用者帳號\\AppData\\Roaming\\obs-studio 目錄中, 若將 OBS 放在 USB 隨身碟中, 希望每次開啟可攜程式系統都能保有先前的設定, 可以利用下列批次指令, 將 USB 隨身碟中所儲存的先前設定複製到 Windows 目錄. REM Xcopy %Disk%:\\home_ipv6\\AppData\\Roaming\\obs-studio C:\\users\\%USERNAME%\\AppData\\Roaming\\obs-studio /E /H /C /I /Y 在 Windows 命令列視窗中, 可以使用 xcopy /? 查詢與 xcopy 指令有關的選項設定說明. OBS 支援多 Scenes(場景), 且每一個場景支援多個 Sources(來源), 若要錄製電腦操作畫面, 可以選擇 Display Capture 作為 Source, 之後設定 Audio, Video, Output 以及 Hotkeys, 就可以開始錄影. ShareX 錄影與截圖 在 Windows 操作系統中, 若無直播需求, 且僅需錄製電腦的操作流程或截圖, 可以使用 ShareX wcm2024 網站如何整合 https://github.com/nextapps-de/spotlight and https://github.com/xemle/home-gallery ? Python 與 ffmpeg.exe 結合成為影像讀取工具: https://github.com/chenxinfeng4/ffmpegcv 除了 Replit, 還可以使用 Codespaces, Gitpod 與隨身系統維護 wcm2024 網站內容. Replit 免費帳號並沒有線上工作時間限制(但給定的運算資源較小), Codespaces 免費帳號每個月可以使用 120 core hours(優點是直接與 Github 帳號綁定), Gitpod 免費帳號每個月可以使用 50 hours(優點是開放原始碼, 且給定運算資源最多), 使用隨身程式系統則可在沒有網路連線時進行改版, 有網路連線時才將近端的版本推到 Github 倉儲. 計算機概論摘要 ASUS Product Guide Computing Trend Report AI Trend Report 高中計概 大學計概 Github Pages 參考網站 ( 倉儲 ) ( 相關影片 ) 如何利用 OBS download + 網際簡報進行 直播同時錄影 ? nslookup 與 tracert nslookup - name server lookup 符號名稱伺服器查詢 tracert - trace route 路由追蹤 利用 codespaces 維護 wcm2024 網站內容 一般所謂網站, 指的是 www (world wide web) 全球資訊網協定中的 html 超文件檔案資料, 可以直接用網頁瀏覽器在近端開啟, 或放在 www 伺服器上, 由網頁瀏覽器透過網址連線後觀看網頁內容. 網頁的組成 - 請用瀏覽器連結到一個網站, 然後用滑鼠右鍵帶出 Chrome 瀏覽器的\"檢視頁面來源\", 查看該網頁有哪些超文件標註內容. 建立網頁內容 由於採直接編寫 html 建立網頁的方法比較繁瑣, 因此在網際內容管理課程中, 運用 Python 程式編寫了一套系統, 用來協助使用者建立網站內容. 當使用者在建立網站過程, 資料不斷被納入, 雖然可以利用章節對內容分類, 但在網站內容完成之前, 使用者無法依照內容建構的時間先後次序, 主題式閱讀網站資料, 因此除了章節式的網站內容之外, 可以採流水帳的方式建立網站內容, 一般稱依照時間先後次序編寫網站文章的方式為\"網誌\" ( Weblog ). 如何在 Replit 中建立並維護個人或分組的網站內容? 建立網誌內容 網際內容管理課程建立 Pelican 建構, 並且利用 Markdown 格式編寫之後, 再利用轉檔流程轉為 html. 如何在 Replit 中設定並建立個人網站中的網誌內容? 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"五專","url":"./wcm-5j-w4.html"},{"title":"WCM 四技第三週課程","text":"四技 WCM 第三週課程, 除了 Replit, Github Codespaces, Gitpod 之外, 還介紹如何利用可攜系統維護個人與分組網站. 利用 Github Classroom 分組 四技期中分組作業名稱為 1a, 各組組長在取得作業連結之後, 自行建立各組 Team, 以第一組為例, Team 名稱為 ag1, 之後以每組至多 6 名組員, 透過作業連結加入 ag1 Team, 其餘各組組員則依序建立 ag2, ag3 等 Team 名稱, 讓該組組員可以加入. 以第一組為例, 完成 ag1 Team 建立後, 將取得 mdewcm2024 帳號下的 1a-ag1 倉儲, 所有第一組的組員均對此分組倉儲有管理權, 可以使用登入 Github 的帳號權限進行改版. 由於在 Replit 免費帳號下, 僅能與登入 Github 的帳號進行授權, 且在 Replit 導入的倉儲, 任何人都能夠取得倉儲下 .git 的所有資料, 因此無法利用組員的 Github 帳號 token 取得管理授權, 而必須動態在 /home/runner/.ssh 下建立 id_rsa 與 config 連線設定, 各組組員才能利用 Replit 管理分組網站內容. 利用 Github Codespaces 維護倉儲 如前所述, 使用 Replit 管理分組網站, 必須採動態建立 .ssh 目錄中的私鑰與 config, 過程比較複雜, 但若採用 Github Codespaces, 則可以在登入 Github 帳號下, 管理該帳號所有授權的倉儲, 包括分組倉儲與網站, 唯一的限制是每個月只能使用 120 core hours, 若以內定的 2 core 執行管理, 則平均每天可以使用兩個小時. 說明 如何利用 Codespaces 維護分組倉儲 常用的 git 指令 git 的新增、提交與推送指令: git add . git commit -m \"說明字串\" git push 使用 git add . 表示要認列所進行的全部改版內容, git commit -m 執行之前, 若在近端使用, 必須先行設定 git config, 將 home_ipv6 目錄下的 .gitconfig 中明確列出改版者的身分, 其中包括: git config --global user.name \"提交者的 github 帳號名稱\" git config --global user.email \"提交者在 github 所登錄的 email address\" 使用者也可以利用 git version 查詢目前所使用的 git 版本. git status 通常用來查核目前近端的改版狀況, 例如: 是否與遠端倉儲同步, 或者遠端倉儲已經有了新版本. 若遠端倉儲已經有新的版本, 則在 git push 之前, 必須設法取下遠端資料進行合併後, 才能再提交新的版本並推送到遠端. git pull = git fetch + git merge 由於要將各組員的 wcm2024 設定為各分組倉儲的子模組, 因此必須利用 git submodule add 以各組員的學號作為子目錄名稱, 利用下列指令, 將組員倉儲新增為分組倉儲的子模組: git submodule add 倉儲網址 子目錄 若只要取下倉儲的主要內容, 可以使用下列指令: git clone 倉儲網址_協定.git 指定目錄與否 若要取下帶有子模組的倉儲, 且可能該子模組還有設定其他子模組, 則必須要加上 --recurse-submodules: git clone --recurse-submodules 倉儲網址_協定.git 指定目錄與否 說明 如何將組員的個人倉儲納入分組倉儲成為子模組 說明 如何在 Replit 維護分組倉儲 利用 Gitpod 維護倉儲 https://www.gitpod.io/ 的使用與 Codespaces 類似, 都可透過 Visual Studio Code 的網際介面進行倉儲的管理, 每個月有 50 小時的免費使用時間, 可以使用 Github 帳號登入, 相較於 Replit, 其給定的免費資源較多, 執行速度快且 .ssh 下的 id_rsa 與 config 僅需設定一次. 利用 localhost 維護倉儲 前面提到的 Replit, Codespaces 與 Gitpod 是目前利用雲端運算管理分散式版次管理系統較為有名的環境, 使用者可以直接在瀏覽器中執行各種運算與程式的開發, wcm2024 網際內容管理的第一個階段, 便利用這些目前提供免費使用的範圍內來維護個人與分組的網站. 即便如此, 免費帳號各有不銅的限制, 目前允許免費使用的 Github Pages, 也可能在未來轉為收費服務, 因此未來希望對個人或團隊的倉儲或網站掌控最大權限, 仍需學習如何利用近端或自架主機管理及部署網際內容. 首先, 透過 Windows 環境中的 USB 隨身碟, 配置可攜程式系統, 用來管理個人與分組的分組倉儲與網站, 之後再設法介紹如何利用自行建立的 Ubuntu 主機配置倉儲與網站. 利用 Wink 建立操作影片 Wink 官方網站: https://www.debugmode.com/wink.html Wink 錄製 mp4 操作影片, 可以與 Sharex 共用 ffmpeg.exe. Sharex 可用於電腦畫面截圖, 也可以錄製電腦連續操作影片, 而 Wink 則可取電腦操作過程的關鍵影格, 加上文字說明標籤後, 製作操作流程示範影片. 下載 wink3.7z (需要密碼) 以下利用 Wink 建立操作過程影片: wink3.7z (需要下載密碼) 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"四技","url":"./wcm-1a-w3.html"},{"title":"WCM 五專第三週課程內容","text":"以下為五專精密機械科網際內容管理課程第三週上課內容, 包括回顧計算機概論, 利用 Github Classroom 進行分組作業派送(名稱為 wcmj), 並且說明如何利用 Github Codespaces 維護個人與分組網站. 配置可攜程式系統 下載可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 說明 如何將 portable_2024 目錄解開到隨身碟 . 接著下載可攜版(Portable)的 ShareX: https://github.com/ShareX/ShareX/releases , 下載解開壓縮後放入隨身碟. 說明 如何下載並設定 ShareX 錄製電腦操作過程 說明 如何利用 ShareX 截圖並放入個人網站 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"五專","url":"./wcm-5j-w3.html"},{"title":"WCM 四技第二週課程","text":"四技 WCM 第二週課程, 主要確認各學員是否完成 Github 中個人倉儲與網站的建立, 並且除了 Replit 還導入利用 Github Codespaces 維護個人與分組網站. 確認所有學員都已經建立個人網站 建立個人課程網站步驟: 登入 Github 連結到 https://github.com/mdecycu/cmsimde_site 利用 \"Use this template\" 下方的 \"Create a new repository\" 建立名稱為 wcm2024 的倉儲 在 wcm2024 倉儲上方的 Settings 設定頁面中, 左方 Pages 中的 Branch 分支區域, 選擇將 main 分支存為網頁的 root 根目錄 等 wcm2024 的倉儲 Github Pages 轉檔完成後, 可以看到 commits 提交區的綠色勾勾, 就完成網址為 https://帳號.github.io/wcm2024 的個人課程網站 利用上述步驟完成的倉儲內容, 同時帶有以 Python 編寫的動態網站程式, 以及位於 content 目錄中的靜態網頁資料. 說明 如何利用 Github 建立個人課程網頁 確認學員已經會利用 Replit 維護網站 建議學員以 email 作為登入 Replit 的帳號, 不要依附在 Github 或 Gmail 帳號下, 以保有使用的獨立性. 由於 wcm2024 課程學員使用 Replit 免費帳號, 因此雲端 IDE 僅允許使用 Port 80 與 443 啟動網頁, 因此若要在 Replit 檢視動態網站或網誌推送到 Github 之前的內容, 必須要在動態與靜態模式中擇一使用. 說明 如何利用 Replit 修改個人網站標題 如何利用 Codespaces 維護網站 Codespaces 屬於目前 Github 免費帳號下的功能之一, 與 Github 倉儲內容維護的整合度最高, 但是每個月的免費額度僅有 120 core hours, 若使用標準的 2 core 進行運算, 擇每天平均僅能使用兩個小時. 若提升至 4 core, 則每天可以使用 1 小時. 採用 Github Codespaces 維護網站的好處是, Visual Studio code 介面提供多終端機與多 ports 開啟功能, 在 Codespaces 中維護 wcm2024 的過程幾乎如同在 localhost Windows 10 或 11 的操作系統環境中進行. 說明 如何利用 Codespaces 維護網站 利用 Github Classroom 建立分組網站 (w3進度) 在 mdewcm2024 帳號下, 期中分組作業名稱為 1a, 若第一組組長建立 Team 名稱為 midag1, 則分組倉儲名稱將為 1a-midag1, 而五專課程則使用 5j-midjg1, 需要如此命名作業與分組倉儲名稱的原因是, 在 Github Classroom 同一個 organization 名稱下 (即 wcm2024), 各班作業名稱必須有所區別, 而且各分組 Team 名稱也不能相同. https://mdecd2024.github.io/test-ag1/content/AI.html 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"四技","url":"./wcm-1a-w2.html"},{"title":"WCM 四技第一週課程","text":"四技 WCM 第一週課程, 主要引導學員登入 MS Online 並建立 Github 帳號, 以及利用 cmsimde_site 作為 Template 建立個人課程網站. 登入 MS Online 網際內容管理課程學員上課時必須登入 MS Online , 主要目的是能在 MS Teams 中上課, 一邊觀看教學示範, 一邊自行操作. 網際內容管理課程的 MS 團隊代碼: ry8vdyo Github 帳號 還未擁有 Github 帳號者, 必須自行建立 Github 帳號, 主要用來建立並維護個人的課程倉儲與網站. 建立個人課程網站 網際內容管理的個人課程網站名稱為 wcm2024, 請先登入 Github 後, 連接至 https://github.com/mdecycu/cmsimde_site , 以此倉儲作為 Template 建立個人的 wcm2024 倉儲, 並將倉儲主分支設定 Github Pages 後, 檢查是否已經可以連線到個人的課程網頁. 說明 如何利用 Github 建立個人課程網頁 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"四技","url":"./Starting-U4-WCM-course.html"},{"title":"WCM 五專第一與第二週課程內容","text":"以下包含五專精密機械科網際內容管理課程第一週與第二週的上課內容, 課程目標首先是讓學員了解如何利用 cmsimde_site 建立網站. 接著則是讓學員了解如何利用 Replit 維護網站內容. 五專 WCM 第一週課程內容 請學員申請 Github 帳號 Github 帳號登入依照規定需要兩段式認證(2FA, two-factor Authentication ), 設定過程必須在手機安裝 Github Mobile, 若手機可連結至智慧手錶, 則可以將認證碼利用 authy App 將兩段式登入驗證碼傳至手錶. Github 導引 https://www.google.com/search?q=github https://www.google.com/search?q=github+教學 請學員申請 Replit 帳號 - 建立使用可以收信的 Email 帳號作為 account, 自選密碼後登入 Replit 建立個人的課程倉儲 確認所有學員都已經申請 Github 帳號後, 隨即可以建立個人的課程網站, 也就是在各學員的 Github 帳號中建立 wcm2024 倉儲, 但必須在登入 Github 帳號後, 連結到 https://github.com/mdecycu/cmsimde_site 以此倉儲作為 Template, 建立名稱為 wcm2024 全部使用英文小寫字母的 public repository (公開倉儲) 根據上述步驟, 說明如何建立個人的 wcm2024 倉儲與網站 的教學影片. 一旦在個人 Github 帳號下建立 wcm2024 倉儲後, 可以進入倉儲 Settings 中的 Pages, 將 Branch 分支的 main 分支設為網頁的 root (根目錄), 就可以將 wcm2024 轉為該倉儲的網站, 而其網站的連結將會是: https://帳號.github.io/wcm2024 請學員準備一個 USB 3.0 以上的隨身碟 32GB 或 64GB 都可以, 用來存放可攜程式系統,個人數位私鑰以及其他設定檔案. 一旦在 Github 建立 wcm2024, 而且已經登記 Replit 帳號, 就可以設法讓兩個帳號透過授權, 讓 Replit import wcm2024 倉儲, 啟動網頁編輯後進行改版, 並且轉為靜態網站內容之後, 將資料推回 Github, 就可以更新 Github Pages 上的 wcm2024 靜態網站內容. 以下則利用各學員已經建立的 wcm2024 倉儲, 進行 wcm2024_5j_如何更改靜態網站標題教學影片 必須自行練習的技能 鍵盤中文與英文打字 看到電腦螢幕上的英文, 要試著用手機查詢字意, 再看看整個句子, 試著了解其含義. 另外也可以逐一將句子段落或單字複製到 Googl 英翻中網頁 , 嘗試了解各英文單字與整個文章或電腦回應的意思. 每週上課後, 至少騰出一個小時, 回頭觀看課程網誌, 並針對上課主題, 自行練習與 ChatGPT 對話, 進一步瞭解各階段的上課內容. 五專 WCM 第二週課程內容 chatgpt 使用 簡單 說明 如何利用 Gmail 帳號登入 chatgpt , 並進行提問. 針對以上課程內容, 請利用以下留言系統進行討論: Please enable JavaScript to view the comments powered by Disqus.","tags":"五專","url":"./Starting-5J-WCM-course.html"},{"title":"2024 Spring WCM 課程","text":"2024 Spring WCM 的教學主要介紹如何利用 Replit, Codespaces 與 Gitpod 建立網際內容管理系統. Replit https://replit.com/signup 若希望在 Replit 平台上啟動 static site, 需要將 init.py 中的 static_port 改為 80. 因為 Replit 雲端平台中的免費帳號僅允許使用 port 80 與 443, 且對外連線的 port 80 會自動跳轉到 443, 也就是使用 https 協定進行連線, 若使用者在動態網站中點擊 SStatic, 亦即 Start Static Site, 則可以在動態對應 URL 中檢視靜態網站內容. 使用 Stop 關閉動態編輯網頁後, 若重新啟動 Webview 連結到 content/index.html, 則可將 URL 改為 /login 則可回到動態編輯網站的登入畫面. Undo 與 Redo Replit 編輯器的 Undo - Ctrl + z, Redo - Ctrl + y 手機照片引用 使用手機上的 Replit App 登入後 Run 動態編輯網頁後, 選擇以瀏覽器開啟編輯模式後, 可以利用 IUpload 功能上傳手機所拍攝的圖片至 images 目錄後引用. Blog cmsite 中的網誌系統為 Pelican , 可使用 Markdown 格式編寫網誌內容, 然後再轉檔為 html 超文件. 網誌轉檔 安裝 Pelican 之後, 可以利用 gen_blog 指令檔案將 markdown 中的 .md 檔案轉為 blog 目錄中的網誌超文件. 轉換檔案之前可以刪除 markdown/images 目錄中的 index.html 檔案. 在倉儲中建立下列 gen_blog 指令檔案後, 必須利用 chmod u+x gen_blog 讓該檔案可以執行, 且必須以 ./gen_blog 執行網誌轉檔. #!/bin/bash # generate blog html files pelican markdown -o blog -s local_publishconf.py 類別與標籤 類別與標籤, 亦即 Category and Tags, 因為網誌列在課程倉儲中, 因此所謂的類別應該用在不同班級的教學內容, 而標籤則是該網誌的內容對應關鍵字, 可以是內容的大標題或者是該週上課的主題. 因為網際內容管理課程開在五專一以及四技一, 因此可以將 Category 設定為\"五專\"、\"四技\" 分別代表兩班的上課類別, 另一個類別則是\"Misc\", 代表雜項內容. 至於 Tags 則可以使用 週次, 或 Python, Javascript, Replit, Codespaces 或 Gitpod 等特定技術說明的主要關鍵字. 另外, 因為 Blog 還支援全文 Search, 使用者可以使用自選的關鍵字查詢所需要的內容. 整理的內容 五專一先前上過\"計算機概論\", 而四技一在\"計算機程式\"則上過簡單的 ANSI C 以及 \"C++\", 因此\"網際內容管理\"可以讓學員各自整理先前上過的電腦課程內容, 或其他自選內容. 計算機概論的內容包含 高中計概 與 大學計概 大一計算機程式課程: 2023 Fall 相關課程: 計算機程式 cpnote (只有系上 IPv6 網段連線可以擷取) 機械設計工程師學習 C/C++ 的目的之一是利用 數值分析程式的運算 ( 其他 ), 設法計算出在產品開發過程中的最佳參數, 並能用圖表或近似實體的 3D 系統模擬呈現最佳設計結果. 而且參與產品設計的相關人員, 還必須關注產品設計過程或結果該如何有效呈現? 其他大學計算機程式 課程 2017 Fall 計算機程式期末驗收 目前網頁上的內容包括一般中英文, 超文件連結, 圖片, 影片, 程式碼引用, 以及置入 Javascript 或 Brython 等動態程式. Disqus 在網誌文章加入 https://disqus.com/ , 可先設法建立自己的 DISQUS_SITENAME 後, 放入 publishconf.py 設定檔案中, 並建立 gen_dblog 指令檔案如下: #!/bin/bash # generate blog html files pelican markdown -o blog -s publishconf.py 接著使用 chmod u+x gen_dblog 讓此檔案可以允許使用者執行, 並利用 ./gen_dblog 進行帶有 Disqus 留言功能的網誌轉檔. 必須特別注意的是, 使用免費的 Basic Disqus 留言系統, 網誌文章將會被置入商業廣告. 而且因為採用 Disqus 之後, 網誌的所有超文件連結都必須採用網誌外部的符號名稱進行綁定, 因此轉檔後的內容無法在 Replit 靜態網站模式中檢視, 所以比較好的流程為, 在編輯檢視網誌過程, 先採用 gen_blog 轉檔, 一旦內容確定後, 再使用 gen_dblog 轉檔後發布. 當然, 假如之後不希望網誌中帶有 Disqus 留言資料, 只要使用 ./gen_blog 重新對網誌轉檔即可. 網路相關 最近校方的網路經常發生連線不穩的情況, 使用者在 Windows 環境, 可以透過 nslookup 與 tracert 了解網路連線情況. nslookup 可用來查詢 DNS 伺服器的運作情形, 而 tracert 則可以了解從工作主機到目標主機之間各路由器的運作情形. 由於目前的網際網路協定同時存在 IPv4 與 IPv6, 而且許多網站與網路設定並不一定支援 IPv6, 因此造成網路連線查核上的許多問題與盲點. 理論上, 假如所有網站都全數支援 IPv6, 許多問題都可迎刃而解, 但是展望未來 10 年, 或許 IPv4 協定仍無法完全消失, 因此如何在這兩種不同的網路協定中連網, 就成為使用者必須克服的議題. https://cybernews.com/what-is-vpn/ipv4-vs-ipv6/ https://www.scrapingbee.com/webscraping-questions/proxy/should-i-use-ipv6-at-home/ https://kinsta.com/blog/ipv4-vs-ipv6/ https://www.simplilearn.com/tutorials/cyber-security-tutorial/difference-between-ipv4-and-ipv6 以下為利用 tracert 查詢至 mde.tw 網站的連線情況: C:\\Users\\kmol>tracert mde.tw 在上限 30 個躍點上 追蹤 mde.tw [185.199.109.153] 的路由: 1 <1 ms <1 ms <1 ms 140.130.17.254 2 <1 ms <1 ms <1 ms 192.168.105.254 3 <1 ms <1 ms <1 ms 192.168.102.252 4 2 ms 3 ms 3 ms 192.168.239.254 5 6 ms 6 ms 6 ms 140.130.252.43 6 8 ms 8 ms 8 ms 192.192.61.142 7 9 ms 9 ms 9 ms 192.192.61.20 8 10 ms 10 ms 10 ms 192.192.61.48 9 10 ms 10 ms 10 ms 192.192.61.58 10 10 ms 10 ms 10 ms 192.192.68.62 11 * * * 要求等候逾時。 12 41 ms 41 ms 41 ms be2012.ccr71.tyo01.atlas.cogentco.com [66.28.4.233] 13 168 ms 168 ms 168 ms be2915.ccr71.gum01.atlas.cogentco.com [154.54.91.126] 14 168 ms 168 ms 168 ms be4130.ccr42.lax01.atlas.cogentco.com [154.54.5.174] 15 168 ms 168 ms 168 ms be3177.ccr22.sjc01.atlas.cogentco.com [154.54.40.146] 16 168 ms 168 ms 229 ms be3144.ccr41.sjc03.atlas.cogentco.com [154.54.5.102] 17 272 ms 272 ms 272 ms 38.88.225.242 18 269 ms 269 ms 269 ms cdn-185-199-109-153.github.com [185.199.109.153] 追蹤完成。 上列利用 tracert 查詢至 mde.tw 的網路連線, 其中編號 1 的路由器, 為機械設計系 IPv4 的 Gateway, 編號 2~4 為校主幹的路由器, 140.130.252 則為 TANET Gateway, 也就是台灣學術網路與校主幹連線的通道. 編號 6~10 應該是 TANET 學術網路的虛擬內部網路路由配置, 至於編號 11 的 \"*\" 並非表示斷線, 而是該路由器可能不接受路由封包查訪, 因此沒有回覆任何資訊. 編號 12~16 則連線到 cogentco.com 網段, 位於美國華盛頓 DC, 接著編號 17 則是連到 38.88.225.242 也是位於 DC 的某一台路由器. 最後, tracert 終於通過美國 DC 區域的路由器, 抵達編號 18 的 github.com, 用來配置 mde.tw 的 Github Pages 網站所在位置, 也就是 cdn-185-199-109-153.github.com , 這是一台位於荷蘭阿姆斯特丹的伺服器. 如何更快連線 從上述的 tracert, 我們已經知道 mde.tw 使用 Github Pages 建立的靜態網誌, 在查詢的當下, 雲端主機位於歐洲荷蘭阿姆斯特丹的 github.com 機房, 由於 mde.tw/wcm2024 的內容之所以使用 Github Pages 配置, 其主要目的是希望留下每一次改版的歷程, 且可以讓學員透過 cmsite 作為 template, 快速建立網站架構. 但是若所有學員在擷取 mde.tw 網站時都必須一路從系網連線到阿姆斯特丹的伺服器, 其網路連線成本未免過高, 因此可以有兩種方式加快連線到 mde.tw/wcm2024 網站. 其一是透過 代理主機 , 其二則是將內容同步配置在近端伺服器中, 例如: http://229.cycu.org/wcm2024 .","tags":"Misc","url":"./2024-Spring-Web-based-Content-Management.html"}]};