---
Title: WCM 五專第三週課程內容
Date: 2024-03-04 11:00
Category: 五專
Tags: 計概, 分組, w3
Slug: wcm-5j-w3
Author: kmol
---

以下為五專精密機械科網際內容管理課程第三週上課內容, 包括回顧計算機概論, 利用 Github Classroom 進行分組作業派送(名稱為 wcmj), 並且說明如何利用 Github Codespaces 維護個人與分組網站 .

<!-- PELICAN_END_SUMMARY -->

#計算機概論摘要
[高中計概]

[大學計概]

[Github Pages 參考網站] ([倉儲](https://github.com/ckmsc39th/ckmsc39th.github.io)) ([相關影片](https://www.youtube.com/@lumine39th))

[Github Pages 參考網站]: https://ckmsc39th.github.io/ 

如何利用 [OBS download] + 網際簡報進行[直播同時錄影](https://www.google.com/search?q=OBS+live+stream+and+record+at+the+same+time)?

[高中計概]: https://www.ntsh.ntct.edu.tw/ischool/public/resource_view/show.php?view=1&aid=135
[大學計概]: http://ocw.aca.ntu.edu.tw/ntu-ocw/ocw/cou/101S210
[OBS download]: https://obsproject.com/download

# nslookup 與 tracert
nslookup - name server lookup 符號名稱伺服器查詢

tracert - trace route 路由追蹤

# 利用 codespaces 維護 wcm2024 網站內容
一般所謂網站, 指的是 [www] (world wide web) 全球資訊網協定中的 [html] 超文件檔案資料, 可以直接用網頁瀏覽器在近端開啟, 或放在 [www] 伺服器上, 由網頁瀏覽器透過網址連線後觀看網頁內容.

網頁的組成 - 請用瀏覽器連結到一個網站, 然後用滑鼠右鍵帶出 Chrome 瀏覽器的"檢視頁面來源", 查看該網頁有哪些超文件標註內容.

[www]: https://en.wikipedia.org/wiki/World_Wide_Web
[html]: https://en.wikipedia.org/wiki/HTML

## 建立網頁內容
由於採直接編寫 [html] 建立網頁的方法比較繁瑣, 因此在網際內容管理課程中, 運用 [Python] 程式編寫了一套系統, 用來協助使用者建立網站內容.

當使用者在建立網站過程, 資料不斷被納入, 雖然可以利用章節對內容分類, 但在網站內容完成之前, 使用者無法依照內容建構的時間先後次序, 主題式閱讀網站資料, 因此除了章節式的網站內容之外, 可以採流水帳的方式建立網站內容, 一般稱依照時間先後次序編寫網站文章的方式為"網誌" ([Weblog]).

[Python]: https://en.wikipedia.org/wiki/Python_(programming_language)
[Weblog]: https://en.wikipedia.org/wiki/Blog

如何在 [Replit] 中建立並維護個人或分組的網站內容?

## 建立網誌內容
網際內容管理課程建立 [Pelican] 建構, 並且利用 [Markdown] 格式編寫之後, 再利用轉檔流程轉為 html.

如何在 [Replit] 中設定並建立個人網站中的網誌內容?

[Replit]: https://replit.com
[Pelican]: https://getpelican.com/
[Markdown]: https://www.markdownguide.org/

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