---
Title: WCM 課程期中整理
Date: 2024-04-14 11:00
Category: WCM
Tags: Brython, w9
Slug: wcm-midterm
Author: kmol
---

網際內容管理課程的英文名稱為 Web-based Content Management, 課程目標是讓學員得以運用網頁來管理與個人或專業領域應用相關的內容. 當然, 我們還想啟發學員對於網頁與內容管理發展趨勢的思考, 並且針對學員選課, 評定出一個合理的修課成績!

<!-- PELICAN_END_SUMMARY -->

# 網頁式內容管理

目前無論是 Github 的 Codespaces, Gitpod 或 Replit 都讓使用者可以直接在網頁瀏覽器中維護網站內容. 其中 Replit 還提供手機 App 讓使用者透過手機或平板管理網頁內容.

網際內容管理課程將網頁內容管理系統與網頁資料放在同一個倉儲中, 且讓使用者寄存在 Github 中, 只要能夠執行 Python 的雲端或近端環境都能開啟網頁編輯程式進行改版, 而編輯完成的網頁資料則可在 Github 倉儲中透過 Pages 的全球資訊網伺服器功能呈現網站內容.

網際內容管理課程所採用的管理系統採用 Python Flask 編寫, 其中除了章節式的網頁內容採超文件的 H 標註進行分頁外, 還導入 Pelican 與 Reveal.js 等兩個延伸套件, 其中 Pelican 可用來建立網誌, 而 Reveal.js 則可用來建立網頁上的簡報資料.

學習議題: 如何建立 Github 上的網站? 如何管理內容? 如何建立章節式網站? 能放入甚麼多媒體內容? 靜態圖文? 動態圖文? 線上遊戲? 3D 零組件展示? 如何建立網頁系統中的網誌? 如何建立網頁系統中的簡報?

# Python 程式系統

上課用的電腦中配置了一套舊版的可攜式 Python 程式系統, 可讓使用者建立新版的可攜式 Python 程式系統, 放入 USB 隨身碟後, 可以在任何一台 64 位元的 Winodws 操作系統中使用, 主要目的除了可用來維護位於 Github 的網頁內容之外, 也可用來開發各種 Python 程式, 或與其他 Windows 應用套件結合使用, 例如: 與 CoppeliaSim 機器人模擬場景結合, 建立機電控制系統, 或與 Siemens NX 的 API 延伸程式結合應用.

學習議題: 如何利用電腦輔助設計室的舊 Python 建立新的可攜環境? 在網頁中置入 Python 語法的程式加上對 Javascript 與超文件語法的了解後, 能夠應用在那些領域? (精密)機械設計流程? 設計運算? 特定系統模擬?

# 網頁上的 IDE

IDE 是甚麼? 可以將 Replit、Codespaces 與 Gitpod 當成 IDE 用來開發各種程式嗎? 與近端操作系統上的開發有何不同? 多人協同? 這樣安全嗎?

學習議題: 學會使用網頁上的各種 IDE 之後, 有沒有甚麼感想或心得?

# AI 工具

ChatGPT 與 Gemini Pro 都可以直接利用 Gmail 帳號登入, 初級應用目前都可免費使用, 這兩個 AI 工具可以協助我們解決甚麼問題? 為什麼有人驚這些工具為天人? 有人卻覺得還好而已, 並無法從中挖出甚麼資料?

學習議題: AI 工具曾經協助我們解決甚麼問題? 

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