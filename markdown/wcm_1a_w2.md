---
Title: WCM 四技第二週課程
Date: 2024-02-29 11:00
Category: 四技
Tags: codespaces, classroom, w2
Slug: wcm-1a-w2
Author: kmol
---

四技 WCM 第二週課程, 主要確認各學員是否完成 Github 中個人倉儲與網站的建立, 並且除了 Replit 還導入利用 Github Codespaces 維護個人與分組網站.

<!-- PELICAN_END_SUMMARY -->

# 確認所有學員都已經建立個人網站

建立個人課程網站步驟:

1. 登入 Github
2. 連結到 <https://github.com/mdecycu/cmsimde_site>
3. 利用 "Use this template" 下方的 "Create a new repository" 建立名稱為 wcm2024 的倉儲
4. 在 wcm2024 倉儲上方的 Settings 設定頁面中, 左方 Pages 中的 Branch 分支區域, 選擇將 main 分支存為網頁的 root 根目錄
5. 等 wcm2024 的倉儲 Github Pages 轉檔完成後, 可以看到 commits 提交區的綠色勾勾, 就完成網址為 https://帳號.github.io/wcm2024 的個人課程網站

利用上述步驟完成的倉儲內容, 同時帶有以 Python 編寫的動態網站程式, 以及位於 content 目錄中的靜態網頁資料.

說明[如何利用 Github 建立個人課程網頁]

[如何利用 Github 建立個人課程網頁]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EYH-ytRhxrtNowtIAIXPISgBmJDTW9IEwziub_4GH6xh3w?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=Z81Ph7

# 確認學員已經會利用 Replit 維護網站
建議學員以 email 作為登入 Replit 的帳號, 不要依附在 Github 或 Gmail 帳號下, 以保有使用的獨立性.

由於 wcm2024 課程學員使用 Replit 免費帳號, 因此雲端 IDE 僅允許使用 Port 80 與 443 啟動網頁, 因此若要在 Replit 檢視動態網站或網誌推送到 Github 之前的內容, 必須要在動態與靜態模式中擇一使用.

說明[如何利用 Replit 修改個人網站標題]

[如何利用 Replit 修改個人網站標題]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EY3dasLJKbdOjQl47CLrE-IB2HF9rpeeB_2dieKwvZe2Qg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=c59nPn

# 如何利用 Codespaces 維護網站
Codespaces 屬於目前 Github 免費帳號下的功能之一, 與 Github 倉儲內容維護的整合度最高, 但是每個月的免費額度僅有 120 core hours, 若使用標準的 2 core 進行運算, 擇每天平均僅能使用兩個小時. 若提升至 4 core, 則每天可以使用 1 小時.

採用 Github Codespaces 維護網站的好處是, Visual Studio code 介面提供多終端機與多 ports 開啟功能, 在 Codespaces 中維護 wcm2024 的過程幾乎如同在 localhost Windows 10 或 11 的操作系統環境中進行.

說明[如何利用 Codespaces 維護網站]

[如何利用 Codespaces 維護網站]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EUi-PGv1MGVLvgc6V0kIdvwB7J-fOl4OAtSIASBB4CVrAg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=wSFLpp

# 利用 Github Classroom 建立分組網站 (w3進度)
在 mdewcm2024 帳號下, 期中分組作業名稱為 1a, 若第一組組長建立 Team 名稱為 midag1, 則分組倉儲名稱將為 1a-midag1, 而五專課程則使用 5j-midjg1, 需要如此命名作業與分組倉儲名稱的原因是, 在 Github Classroom 同一個 organization 名稱下 (即 wcm2024), 各班作業名稱必須有所區別, 而且各分組 Team 名稱也不能相同.

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