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

# 實作練習問題

1. 一份採 UTF-8 中文編碼的 .csv (例如: [5j_wcm2024_midterm.csv](http://229.cycu.org/5j_wcm2024_midterm.csv))在 Windows Excel 2016 開啟之後呈現亂碼, 該如何設定改為用 UTF-8 編碼?
2. 請根據上一個 .csv (csv 是甚麼格式的資料?) 檔案內容, 在個人的網頁與網誌中列出每一位學員的 github wcm2024 倉儲與網頁連結. (第一次請直接用手動輸入的方式建立 html 檔案內容, 之後再思考如何讀取此一檔案後, 能直接將所需要的倉儲與網頁連結呈現在個人網站或網誌的特定位置)
3. [這一本書](http://229.cycu.org/2023%20Programming%20for%20Absolute%20Beginners%20-%20Using%20the%20JavaScript%20Programming%20Language.pdf) 的第一章在講甚麼?能不能將其中練習編寫的內容, 放入個人的網頁與網誌?
4. 為什麼 wcm2024 倉儲中的 cms.bat 在 Windows 啟動之後, 若同時多人連線, 系統會無法負荷, 同一台電腦硬體有沒有可能採其他方法啟動, 可以同時讓多人連線且不會產生延遲或停頓的問題? 例如採 wsgi 方式啟動, 這該如何進行?
5. 承接上一題: 一個採用 Flask 編寫的伺服器系統, 該如何在  Windows 環境中以 wsgi 方式啟動?
6. wcm2024 課程中曾經提到可以利用舊的可攜 Python 程式環境建立新的 Python 可攜程式環境, 但該如何進行?
7. 假如希望直接在網頁中利用 Brython 建立一個掃地機器人的工作模擬系統, 該如何進行?
8. wcm2024 課程除了可以使用 [ChatGPT] 外, 還能夠使用 Google [Gemini Pro], 請試著在解決上列問題時, 善用這兩個系統, 並將使用過程與心得整理在個人的課程網頁與網誌中.
<pre class="brush: python">
    from browser import document, window, html, load

    # 动态加载 Matter.js 库 (假设使用 CDN)
    load("https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js")
    #print(dir(window.Matter.Bodies.rectangle()))
    # 创建 canvas 元素
    canvas = html.CANVAS(width=800, height=800)
    canvas.id = "canvas"
    canvas.style = {"border": "1px solid red"}  # 添加边框样式
    brython_div = document["brython_div1"]
    brython_div <= canvas


    # 获取 Matter.js 模块别名
    matter = window.Matter
    Engine = matter.Engine
    Render = matter.Render
    Runner = matter.Runner
    Bodies = matter.Bodies
    Composite = matter.Composite

    # 创建引擎
    engine = Engine.create()
    print(dir(engine))
    # 创建渲染器，使用 canvas 元素的 ID
    render = Render.create({
        'element': document['canvas'],
        'engine': engine
    })

    # 创建红色矩形
    rectangle = Bodies.rectangle(200, 200, 80, 80, {
        'render': {
            'fillStyle': 'red'
        }
    })
    print(rectangle)

    # 将矩形添加到世界
    Composite.add(engine.world, [rectangle])

    # 创建运行器
    runner = Runner.create()

    # 运行引擎
    Runner.run(runner, engine)

    # 运行渲染器
    Render.run(render)

</pre>

[ChatGPT]: https://chat.openai.com/
[Gemini Pro]: https://developers.googleblog.com/2024/04/gemini-15-pro-in-public-preview-with-new-features.html

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