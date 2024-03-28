---
Title: WCM 四技第六週課程
Date: 2024-03-28 11:00
Category: 四技
Tags: git, w6
Slug: wcm-1a-w6
Author: kmol
---

四技 WCM 第六週課程, 說明如何透過與 ChatGPT 的對話, 了解有關 git 在不同專業領域的應用方法.

<!-- PELICAN_END_SUMMARY -->

# Git 歷史與希望解決的問題
問題: 請簡述一下 Git 的發展歷史, 以及當時的背景如何? Git 想要解決甚麼問題?

ChatGPT 回答:

Git 是由 Linus Torvalds 在 2005 年開始開發的分散式版本控制系統。在此之前，像 CVS 和 Subversion 等集中式版本控制系統存在著一些問題，比如需要與中央存儲庫保持連接、分支和合併操作複雜等。在 Linux 核心程式開發過程中，Torvalds 和其他開發者開始感受到集中式版本控制系統的種種限制和不便，這促使他開始開發一個更適合分散式開發的工具。

Git 的目標是解決集中式版本控制系統的一些瓶頸，包括：

1. 性能問題：集中式版本控制系統在大型專案中操作效率低，尤其是在提交和合併時。
2. 分支和合併操作的複雜性：在集中式系統中，分支和合併操作可能會變得耗時且複雜，過程中容易出現錯誤。
3. 依賴中央存儲庫：集中式系統需要即時與資料伺服器連線，一旦斷線或伺服器故障，可能會導致開發過程中的中斷。

在這些問題的背後，是軟體開發過程的變化和複雜性增加。隨著項目變得越來越大，開發團隊變得分散，需要更靈活和高效率的工具來管理代碼。Git 的分散式架構允許開發人員在沒有連接到中央伺服器的情況下進行本地端操作，並且提供了高效的分支和合併機制，從而更有效滿足了協同需求。

因此，Git 的發展是在不斷變化和擴大的軟體開發生態系統中的一個自然回應，旨在解決集中式版本控制系統所遇到的種種挑戰，並為開發人員提供更好的工具和流程。

再問: 集中式版本控制系統為何在提交與合併上有性能問題?

ChatGPT 回答:

集中式版本控制系統在提交和合併上可能會遇到性能問題，主要是由於以下幾個原因：

1. 單一伺服器負載：在集中式版本控制系統中，所有的提交和合併操作都需要與中央伺服器進行連線。當開發人員數量增加，或者在大型項目中進行大量提交和合併操作時，這個中央伺服器可能會成為性能瓶頸，導致提交和合併操作的速度變慢。

2. 網路延遲：因為提交和合併操作需要與中央伺服器進行連線，因此網路延遲也會影響操作的速度。特別是當開發人員分佈在不同的地理位置時，距離和網路品質都可能擴大延遲。

3. 資料傳輸量：提交和合併操作可能涉及大量的資料傳輸，尤其是當提交或合併的檔案很大或者進行多次修改時。這些大量的資料傳輸需要消耗時間與頻寬，進一步影響操作的性能。

4. 鎖定操作：有些集中式版本控制系統在提交和合併時可能會對文件或資料夾進行鎖定，以避免同時進行衝突的操作。這種鎖定操作可能會導致等待時間增加，特別是在多人同時進行操作的情況下。

因此，集中式版本控制系統的性能問題主要是由於其架構設計所導致，即所有操作都必須通過中央伺服器進行。因而限制了系統的擴展性和彈性，特別是在大型或分散式團隊中。

再問: 為何使用 Git 沒有單一伺服器負載問題?

ChatGPT 回答:

使用 Git 沒有單一伺服器負載問題的主要原因是 Git 的分散式架構。在 Git 中，每一位開發人員都擁有一個完整的本地儲存庫（repository），這使得提交和合併操作不需要依賴於單一的中央伺服器。如此一來，就不會出現單一伺服器負載問題。

換言之，當開發人員在本地進行提交時，各協同人員只需將變更提交到自己的本地儲存庫中，而不是向中央伺服器提交。使得提交操作的速度不再受到中央伺服器的限制，而是受到本地計算機的性能限制，一般情況下會比提交到單一伺服器的執行速度快上許多。

當需要與其他開發人員共享變更時，Git 提供了分支和合併的機制，開發人員可以在本地進行分支和合併操作，而不需要直接與中央伺服器連線。使得提交和合併操作可以在本地進行，不受網路延遲和頻寬限制，從而更加快速並提高協同效率。

另外，即使在多人協作的情況下，由於每個開發人員都有自己的本地儲存庫，這些操作可以同步進行，而不會互相干擾或造成壓力集中在單一伺服器上。

因此，Git 的分散式架構使得提交和合併操作不再依賴於單一的中央伺服器，從而消除了單一伺服器負載問題，提高了系統的性能與彈性。

# Git 如何解決產品設計問題
問題: 身為產品開發人員, 使用的是商用封閉的 CAD 套件, 該如何使用 Git 來提升工作效率?

ChatGPT 回答:

即使使用商用封閉的 CAD 套件，仍然可以使用 Git 來提升工作效率。以下是一些使用 Git 的方式：

1. 版本控制: 使用 Git 對 CAD 項目進行版本控制，可以跟蹤每個版本的變更，並輕鬆地回溯到先前的版本。這對於保留歷史記錄、管理修改和恢復意外更改非常有用。

2. 分支管理: 在 Git 中使用分支來進行不同功能或版本的開發。你可以在不同的分支上同時進行不同的實驗和開發工作，而不會影響主要版本的開發。

3. 協作與共享: 透過 Git，團隊成員可以輕鬆地共享各自的工作成果，進行協作開發。每個人可以在自己的分支上工作，然後通過合併請求（pull request）將修改合併到主分支中。

4. 程式審查: 利用 Git 的分支和合併功能進行程式審查。團隊成員可以在專門的分支上提交各自編寫的程式變更，然後其他成員可以查看這些變更，提供意見和建議，最終通過合併到主分支中。

5. 自動化流程: 使用 Git 配合持續集成（CI）和持續部署（CD）工具，自動化 CAD 項目的測試、構建和部署流程。這樣可以節省時間並降低錯誤，同時確保項目的品質和穩定性。

6. 文檔和問題追蹤: 將 CAD 專案的文檔和問題追蹤整合到 Git 庫中，以便於跟蹤和管理。例如: 可以使用 Git 提供的 Wiki 功能來撰寫文檔，並使用 Issue 跟蹤功能來追蹤問題和任務。

因此，即使使用商用封閉的 CAD 套件，Git 仍然可以成為提升工作效率的強大工具，幫助團隊更好地協作、管理和追蹤 CAD 開發專案。

再問: 可是商用 CAD 採用 binary 格式的零件檔案, 在協同產品設計流程中, 該如何使用 Git 提升協同效能?

ChatGPT 回答:

即使 CAD 文件是以 binary 格式保存的，你仍然可以使用 Git 來提升協同效能。以下是一些方法：

1. 使用 LFS（Large File Storage）: Git LFS 是一個 Git 擴增模組，專門用於管理大型文件，包括 CAD 文件等二進制文件。透過 Git LFS，可以將大型 CAD 文件存儲在單獨的存儲庫中，而不會將它們放在 Git 存儲庫中，從而減少存儲庫大小和傳輸時間。

2. 拆分項目: 將 CAD 項目拆分為更小的部分，每個部分都是可獨立開發和測試的。這樣可以降低對於 binary 文件的變更衝突，並使得協同開發更加順暢。

3. 定期同步: 要求團隊成員定期將他們的工作同步到 Git 存儲庫中，以便及時發現和解決衝突。透過定期同步，可以最大程度地減少衝突和重複工作。

4. 使用分支: 在 Git 中使用分支來進行不同功能或版本的開發。每個團隊成員可以在自己的分支上工作，而不會影響主要的生產環境。這樣可以提高彈性，同時減少對於 binary 文件的同時修改。

5. 程式審查: 使用 Git 的分支和合併功能進行程式審查。每個成員在完成工作後，可以提交程式變更到自己的分支，然後發起合併請求。其他成員可以查看這些變更，提供意見和建議，確保程式的品質和穩定性。

6. 文件管理: 使用 Git 存儲庫中的 Wiki 功能來管理 CAD 文件的相關文檔，包括設計文檔、變更日誌等。這樣可以使得團隊成員更容易地找到並理解 CAD 文件的相關訊息。

因此，即使 CAD 文件是以 binary 格式保存的，仍然可以通過合理使用 Git 和相應的工具來提升協同效能，降低衝突和重複工作，從而更加高效地進行協同產品設計流程。

再問: 若設計流程採用 Siemens NX 設計零組件, 若將每一個零組件的設計過程採 NXOpen Python 程式存檔, 並且透過設計參數進行零組件調控, 就採用 Git 分散式版本管理系統上, 會比直接使用 binary 格式更有效率嗎?

ChatGPT 回答:

在將每個零組件的設計過程以 NXOpen Python 程式存檔的情況下，使用 Git 分散式版本管理系統相比直接使用 binary 格式可能會更有效率。這主要是因為：

1. 可讀性和可比較性：使用 NXOpen Python 程式存檔可以使得零組件的設計過程更具有可讀性和可比較性。相比於 binary 格式，Python 程式碼可以被版本控制系統更好地管理，使得團隊成員可以更容易地查看、比較和理解每個零組件的設計過程。

2. 易於跟蹤和管理：Python 程式存檔可以更輕鬆地跟蹤和管理設計過程中的變更。Git 可以記錄每次提交的修改，包括添加、刪除和修改的程式碼行數，從而使得團隊可以清楚地了解每個零組件的設計歷史和演變過程。

3. 設計參數的調控：使用 Python 程式存檔可以更靈活地調控零組件的設計參數。可以使用程式碼來自動化設計過程，並且通過修改參數來調整零組件的性能和外觀，從而更有效地進行重複性流程設計以及最佳化。

4. 協同開發與程式審查：與 binary 格式相比，Python 程式存檔更適合進行協同開發與程式碼的審查。團隊成員可以在版本控制系統中查看並評論每個零組件的設計程式碼，提供意見和建議，從而確保設計的品質和一致性。

因此，使用 NXOpen Python 程式存檔並結合 Git 分散式版本管理系統可以更有效地管理和控制零組件的設計過程，提高團隊的協同效率和設計品質。

# 從 git init 到 git push

啟動近端可攜程式系統

更換目錄至 y:\tmp 分別建立 gitproject\repository 與 gitserver\repository 目錄

利用以下指令, 設定之後的 git init 將採用 main 作為內定主分支

在 Y:\tmp\gitproject> git config --global init.defaultBranch main

進入 gitproject\repository 目錄, 新增一個目錄名稱為 repo1, 進入 repo1 後執行 git init

進入 gitserver\repository 目錄, 新增一個目錄名稱為 repo1, 進入 repo1 後執行 git init --bare 

之後在 Y:\tmp\gitproject\repo1 目錄操作, 建立新檔案 README.md:

echo "Hello, World!" > README.md

git add README.md

git commit -m "Initial commit"

git remote add origin y:\tmp\gitserver\repository\repo1

git push -u origin main

如此, 就可以將 Y:\tmp\gitproject\repo1 中的倉儲內容送到 Y:\tmp\gitserver\repository\repo1 目錄中. 之後請在 C:\tmp\repository> 執行 git clone Y:\tmp\gitserver\repository\repo1, 由於沒有特別指令倉儲 clone 後的目錄名稱, 因此 git 會將 Y:\tmp\gitserver\repository\repo1 倉儲內容複製一份放入 C:\tmp\repository\repo1 目錄中.

表示目前 Y:\tmp\gitserver\repository\repo1 伺服器中的 repo1, 已經分別存入 Y:\tmp\gitproject\repo1 與 C:\tmp\repository\repo1 目錄中, 使用者可以分別在這兩個倉儲中進行改版後, 在各自的倉儲資料中進行提交, 隨後再設法將改版內容 push 到 Y:\tmp\gitserver\repository\repo1 中進行合併.

以上操作的教學影片:

wcm2024 1a w6 git client server 實際操作

<iframe width="1120" height="630" src="https://www.youtube.com/embed/ofZ1Fc6ukJ0?si=-ssHH2vuyEopaKd_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

針對以上課程內容, 請利用以下留言系統進行討論:

<div id="disqus_thread"></div>
<script>
/**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://https-mde-tw-eng.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
