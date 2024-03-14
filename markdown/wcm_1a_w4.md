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

[wcm2024_1a_w4_複習有關網站與 cmsimde 相關內容]教學影片

[wcm2024_1a_w4_複習有關網站與 cmsimde 相關內容]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EX1Dck3V_qlFjUk9FFZQyAwBlWqZGwSJ1BQBc0FLt9J21g?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=QCTY0r

# Replit 靜態網站檢視
下載 [main2.txt](https://mde.tw/wcm2024/downloads/main2.txt) 與 [static.txt](https://mde.tw/wcm2024/downloads/static.txt), 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. 

說明[如何在 Replit 檢視靜態網站]教學影片

說明[如何下載 replit_main2.7z 並在倉儲中建立兩個檔案]教學影片

[如何在 Replit 檢視靜態網站]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/ERnjR87AyRpCnxB2Md2BWKAB7UyHg1FbBl0lDn8MFS19Cg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=z4WWL6

[如何下載 replit_main2.7z 並在倉儲中建立兩個檔案]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/EbuB_eNbGMlErR95cQtPz9gBnFGL_lJtBtS1EXJ_OMUcuA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=7SfxEM

## Replit 建立分組倉儲權限
由於 Replit 上的免費帳號僅允許與一個 Github 帳號對應, 因此若將分組網站 import 到 Replit, 必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config (id_rsa.pub 必須登錄到 Github 對應帳號), 其中的 config 內容為:

<pre class="brush: jscript">
Host github.com
User git
Hostname github.com
</pre>

而 Host 的設定與 Windows putty 中的 session 名稱相同, 配合使用的 ssh 連線指令將會是:

git clone --recurse-submodules git@github.com:mdewcm2024/分組倉儲名稱.git

當使用者完成 /home/runner/.ssh 目錄中的 id_rsa 與 config 建立後, Replit 會定期刪除免費用戶的 .ssh 目錄, 因此使用者必須將此兩個檔案存至隨身碟, 並在需要對分組倉儲改版時, 啟動分組倉儲的動態網站, 將隨身碟中的 id_rsa 與 config 檔案, upload 到分組倉儲的 downloads 目錄後, 再利用 ssh.py 的執行, 將 id_rsa 與 config 移動到 /home/runner/.ssh 目錄中. 也就是執行:

python3 ssh.py

ssh.py 程式內容如下:

<pre class="brush:python">
import os
if not os.path.exists("/home/runner/.ssh"): 
    os.makedirs("/home/runner/.ssh") 
os.system("mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa")
os.system("mv ./downloads/config.txt /home/runner/.ssh/config")
os.system("chmod og-rwx /home/runner/.ssh/id_rsa")
</pre>

# Replit, Codespaces 與 Gitpod 執行動態與靜態網站
說明[如何在 Replit, Codespaces 與 Gitpod 維護並檢視網頁內容]

[如何在 Replit, Codespaces 與 Gitpod 維護並檢視網頁內容]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/Eah8hKe_Ca1JipYuBBkGX7sBnXvN0nHDHOhi0VpTzR9HCQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=YfCZse

# LaTeX
為了利用 LaTeX 建立各組的期中與期末報告, 請下載 [http://229.cycu.org/miktex-portable.7z](http://229.cycu.org/miktex-portable.7z) (需要密碼)

# Git Tutorial
<https://github.com/git-guides>

<https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources>

[A Tutorial for Github](https://www.ifi.uzh.ch/dam/jcr:ff780599-d5e2-4d05-b923-1c333cbf2842/A Tutorial for GitHub.pdf)

<https://git-scm.com/book/zh-tw/v2> (繁體中文, 僅翻譯至第六章)

<https://git-scm.com/book/zh/v2> (簡體中文)

請各分組在分組網站中建立一個名稱為"git"的 H1 頁面, 以協同方式整理上述與 Git 有關的內容:

<a href="https://mdewcm2024.github.io/1a-ag1">1a-ag1</a>&nbsp;(<a href="https://github.com/mdewcm2024/1a-ag1">repo</a>)<br><a href="https://mdewcm2024.github.io/1a-ag2">1a-ag2</a>&nbsp;(<a href="https://github.com/mdewcm2024/1a-ag2">repo</a>)<br><a href="https://mdewcm2024.github.io/1a-ag3">1a-ag3</a>&nbsp;(<a href="https://github.com/mdewcm2024/1a-ag3">repo</a>)<br><a href="https://mdewcm2024.github.io/1a-ag4">1a-ag4</a>&nbsp;(<a href="https://github.com/mdewcm2024/1a-ag4">repo</a>)<br><a href="https://mdewcm2024.github.io/1a-ag5">1a-ag5</a>&nbsp;(<a href="https://github.com/mdewcm2024/1a-ag5">repo</a>)<br><a href="https://mdewcm2024.github.io/1a-ag6">1a-ag6</a>&nbsp;(<a href="https://github.com/mdewcm2024/1a-ag6">repo</a>)<br><a href="https://mdewcm2024.github.io/1a-ag7">1a-ag7</a>&nbsp;(<a href="https://github.com/mdewcm2024/1a-ag7">repo</a>)<br><a href="https://mdewcm2024.github.io/1a-ag8">1a-ag8</a>&nbsp;(<a href="https://github.com/mdewcm2024/1a-ag8">repo</a>)

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