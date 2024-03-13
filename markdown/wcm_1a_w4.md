Title: WCM 四技第四週課程
Date: 2024-03-14 11:00
Category: 四技
Tags: cmsimde, w4
Slug: wcm-1a-w4
Author: kmol
---

四技 WCM 第四週課程, 複習前三週的課程內容, 並且介紹 git 與 cmsimde 的相關用法.

<!-- PELICAN_END_SUMMARY -->

# 有關建立網站
這裡所謂的網站指的是 Web site, 也就是 WWW (World Wide Web) 伺服器 (Server)端的超文件 (Hypertext), 且此超文件包含 css 與 Javascript 資料, 用來定義使用者利用瀏覽器連線時所得到的資料內容.

網際內容管理的網際指的並非網際網路的 Internet, 而是指 Web-based, 也就是針對網頁瀏覽器檢視的內容加以管理, 而這些內容除了具備各種不同格式的文字外, 還包括靜態圖片與動態的影音多媒體.

因為希望所管理的網站內容, 從無到有的過程留下改版歷程, 因此使用分散式版次管理系統進行網頁的配置, 也就是利用 Github 所提供的 Pages 功能來建立網頁.

又因為直接編輯帶有各種標註符號的超文件過程較為繁瑣, 因此利用 Python 與 Javascript 編寫了一套網頁編輯系統, 也就是 cmsimde 套件, 可以在 Python 與特定模組的環境中啟動, 也就是所謂的動態編輯網站, 使用者在 cmsimde 網際管理系統中所編輯的超文件內容存入套件 config 目錄中的 content.htm, 並且利用此超文件中的 H1~H3 標註作為分頁界線, 將 content.htm 分割為具有三個階層的頁面內容, 用來展示使用者所建立的最終 Github Pages 靜態網頁內容, 此網頁資料儲存在 cmsimde 套件中的 content 目錄, 並將靜態的 css 與 Javascript 儲存在 cmsimde 套件中的 static 目錄中.

cmsimde 套件有關動態與靜態網站的標題、啟動網址與埠號設定位於 init.py 程式檔案中, 若將 init.py 中的啟動網址設為外部 IP, 則此網際內容管理系統的編輯網站, 可直接連外.

# Git Tutorial
<https://github.com/git-guides>

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