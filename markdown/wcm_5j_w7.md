---
Title: WCM 五專第七週課程內容
Date: 2024-04-01 11:00
Category: 五專
Tags: Brython, w7
Slug: wcm-5j-w7
Author: kmol
---

五專 WCM 第七週課程, 開始說明如何在頁面配置 Brython 環境, 並將 Brython 程式配置在個人 Github 帳號係的 Gist.

<!-- PELICAN_END_SUMMARY -->

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
<!DOCTYPE html>
<html>
<head>
  <!-- 引入 Brython 的 JavaScript 文件 -->
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3.9.5/brython.min.js"></script>
</head>
<body>
<script type="text/javascript">
window.onload=function(){
brython();
}
</script>
<h1>累加結果：</h1>
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
</body>
</html>
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

# Gist

