---
Title: WCM 五專第七週課程內容
Date: 2024-04-01 11:00
Category: 五專
Tags: Brython, w7
Slug: wcm-5j-w7
Author: kmol
---

五專 WCM 第七週課程, 開始說明如何在頁面配置 Brython 環境, 並將 Brython 程式配置在個人 Github 帳號下的 Gist.

<!-- PELICAN_END_SUMMARY -->

# 練習利用程式建立單字查詢網頁

wcm2024 5j w7 利用 Python 建立 Javascript 電子書的單字查詢超文件

<iframe width="1120" height="630" src="https://www.youtube.com/embed/dJB6unDgngA?si=vWHr08lU6LbVJU4u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

利用 [2.txt](https://mde.tw/wcm2024/downloads/2.txt) 與 [1.txt](https://mde.tw/wcm2024/downloads/1.txt) Python 程式, 從下列電子書建立英文單字查詢網頁:

[2023 Programming for Absolute Beginners - Using the JavaScript Programming Language](https://link.springer.com/book/10.1007/978-1-4842-8751-4)

[單字查詢網頁](https://mde.tw/wcm2024/downloads/words_2023_Programming%20for%20Absolute%20Beginners.html)

# Brython 程式

首先, 對 ChatGPT 提問: Brython 是甚麼程式語言? 該如何使用?

回答:

Brython 是一種在瀏覽器中運行的 Python 解譯器。它允許您在網頁上使用 Python 來編寫 Web-based 前端程式，而無需安裝任何套件或外部解譯器。

要使用 Brython，您可以按照以下步驟進行：

1. 在您的網頁中引入 Brython 的 JavaScript 程式。就可以透過 CDN 或將文件下載到網頁中。
2. 在 HTML 文件中，使用 `<script type="text/python">` 標籤來編寫 Python 程式碼。
3. 當網頁加載時，Brython 會自動解譯並執行這些 Python 程式碼，並將結果呈現在網頁上。

如此就可以在瀏覽器中使用 Python 編寫動態網頁，而無需使用 JavaScript。這對於喜歡 Python 語法的開發者來說是一個很好的選擇。

再問: 可以舉一個簡單 Brython 程式範例, 從 1 累加到 10, 然後在網頁中以 html 列出運算結果

回答:

<pre class="brush: html">
<!-- 導入 Brython 程式庫 -->
<script src="./../cmsimde/static/brython.js"></script>
<script src="./../cmsimde/static/brython_stdlib.js"></script>
<!-- 啟動 Brython -->
<script>
window.onload=function(){
brython();
}
</script>
<h1>累加結果：</h1>
<!-- 顯示結果標註 -->
<ul id="result"></ul>

<!-- 在 <script type="text/python"> 標籤中編寫 Python 代碼 -->
<script type="text/python">
from browser import document
result_list = document.getElementById("result")
# sum 初始值設為 0
sum = 0
init = 1
upto = 10
# 利用 for 重複迴圈與變數加法進行累加
for i in range(init, upto+1):
    sum = sum + i
    # skip the first one
    if i !=1:
        result_list.innerHTML += "<li>{} + {} = {}</li>".format(sum-i, i, sum)
</script>
</pre>
<!-- 導入 Brython 程式庫 -->
<script src="./../cmsimde/static/brython.js"></script>
<script src="./../cmsimde/static/brython_stdlib.js"></script>
<!-- 啟動 Brython -->
<script>
window.onload=function(){
brython();
}
</script>
<h1>累加結果：</h1>
<!-- 顯示結果標註 -->
<ul id="result"></ul>

<!-- 在 <script type="text/python"> 標籤中編寫 Python 代碼 -->
<script type="text/python">
from browser import document
result_list = document.getElementById("result")
# sum 初始值設為 0
sum = 0
init = 1
upto = 10
# 利用 for 重複迴圈與變數加法進行累加
for i in range(init, upto+1):
    sum = sum + i
    # skip the first one
    if i !=1:
        result_list.innerHTML += "<li>{} + {} = {}</li>".format(sum-i, i, sum)
</script>

請根據上面的 Brython 範例, 寫出能夠從 https://mde.tw/cd2024/content/About.html  取出 anchor 字串為 "2021_odoo_reading.html" 的 href 資料

網頁中特定 anchor 的 href 資料：
 <span id="result2"></span>

  <!-- 在 <script type="text/python"> 標籤中編寫 Python 代碼 -->
<script type="text/python">
from browser import document
# 從網站讀取超文件資料
html_content = open("https://mde.tw/cd2024/content/About.html").read()
# 列出檢查
#print(html_content)
# 將 HTML 內容轉換為 DOM 物件
dom = document.createElement('html')
dom.innerHTML = html_content
result_list = document.getElementById("result2")

# 查找所有的 anchor 標籤
anchors = dom.querySelectorAll('a')
# 列出檢查
#print(anchors)
# 遍歷每個 anchor 標籤
for anchor in anchors:
    # 檢查 anchor 文字是否為特定值
    if anchor.text.strip() == "2021_odoo_reading.html":
        # 在網頁上顯示 href 資料
        result_list.innerHTML += "<li>{}</li>".format(anchor.getAttribute('href')) 
</script>

以下為 Brython 由電腦執行猜數字遊戲:

wcm2024 5j w7 intro brython number guessing

<iframe width="1120" height="630" src="https://www.youtube.com/embed/UJXBDkeHNII?si=m7a4MgSn93KyDXNJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

自動猜數字遊戲 Brython 程式碼:

<pre class="brush: python">
# 程式自動猜數字遊戲
# 從 browser 導入 document, html 與 alert 模組
from browser import document, html, alert
# 導入 random 模組
import random

# 宣告一個變數, 名稱為 "id4", 與超文件中 id 為 "brython_div1" 的物件進行對應
id4 = document["brython_div1"]
# 宣告一個變數, 名稱為 "執行次數", 起始對應為 100
執行次數 = 100
# 宣告 "總猜測次數" 變數, 起始對應為 0
總猜測次數 = 0
# range() 是一個能夠建立一系列數字的函式
for i in range(執行次數):
    # "<=" 是 Brython 特有符號, 用來將超文字指向左邊對應的變數在網頁超文件標註中的位置
    id4 <= "第" + str(i+1) + "次玩:" + html.BR()
    下限 = 1
    上限 = 100
    # 利用能夠產生整數亂數的函式, 建立標準答案變數對應整數
    標準答案 = random.randint(下限, 上限)
    # pc 所猜的數字也是由亂數函式產生
    pc猜的數字 = random.randint(下限, 上限)
    #print(標準答案, pc猜的數字)
    #integer int()
    #string str()
    #float float()
    #你猜的數字 = int(input("請輸入您所猜的整數:"))
    猜測次數 = 1
    while 標準答案 != pc猜的數字:
        if 標準答案 < pc猜的數字:
            #print("太大了，再猜一次 :)加油")
            # 因此已經確定"pc猜的數字"不是答案, 因此 - 1
            id4 <= "電腦猜的數字:" + str(pc猜的數字) + " 太大了!" + html.BR()
            上限 = pc猜的數字 - 1
        else:
            #print("太小了，再猜一次 :)加油")
            # 因此已經確定"pc猜的數字"不是答案, 因此 + 1
            id4 <= "電腦猜的數字:" + str(pc猜的數字) + " 太小了!" + html.BR()
            下限 = pc猜的數字 + 1
        #pc猜的數字 = int(input("請輸入您所猜的整數:"))
        pc猜的數字 = random.randint(下限, 上限)
        猜測次數 += 1
    #print("猜對了！總共猜了", 猜測次數, "次")
    id4 <= "電腦猜對了, 答案為: " + str(標準答案) + ", 總共猜了 "+ str(猜測次數) + "次" + html.BR()
    總猜測次數 += 猜測次數
平均猜測次數 = int(總猜測次數/執行次數)
#print("平均次數", 平均猜測次數)
id4 <= "平均次數: " + str(平均猜測次數)
</pre>

# Gist

<https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists>

請根據上列有關 Github Gist 的簡介說明, 將 Gist 相關的參考資料整理到各自的網誌.

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

