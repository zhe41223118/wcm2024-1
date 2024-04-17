---
Title: WCM 分組專案
Date: 2024-04-18 11:00
Category: Project
Tags: Brython, w10
Slug: wcm-w10-project
Author: kmol
---

網際內容管理課程分組專案 - 網頁與 Brython 程式應用

<!-- PELICAN_END_SUMMARY -->

# 分組專案

給定 [5j_wcm2024_midterm 資料](http://229.cycu.org/5j_wcm2024_midterm.csv)檔案, 包含學號、姓名、Github 帳號與組別. 請各組設法在分組網站與網誌中, 建立能連結到各分組組員的課程倉儲與網站連結頁面. 且最終希望能在處理過程將各組員的歷程網站與網誌整理到分組倉儲中.

# Brython

從 [Brython Introduction] 開始. Brython's goal is to replace Javascript with Python, as the scripting language for web browsers.

目前 [cmsimde] 採用 [Brython 3.10.5], 但是最新的 Brython 已經升級到 [3.12.3], 現在正測試希望使用的功能是否需要升級.

請利用下列 Brython 程式碼, 在課程網站或分組網站中的 Brython 頁面編輯器中進行執行測試, 並透過與 AI 對話了解每一行程式的意義與用法:

<pre class="brush: python">
from browser import document, html
from browser.widgets.dialog import InfoDialog

# Define a function to handle button click event
def on_click(event):
    # Get the value of the input field
    input_value = document["zone"].value
    # Output the value in the console
    print(input_value)

# Create input element with id "zone"
input_element = html.INPUT(id="zone")

# Create button element with id "echo" and text "click !"
button_element = html.BUTTON("click !", id="echo")

# Add event listener to the button
button_element.bind("click", on_click)

# Append input and button elements to the document body with "brython_div1"
document["brython_div1"] <= input_element
document["brython_div1"] <= button_element

def click(ev):
    InfoDialog("Hello", f"Hello, {document['zone'].value} !")

# bind event 'click' on button to callback function
document["echo"].bind("click", click)
</pre>

與 Brython 開發有關的 Google 論壇: [Brython Google Groups]

[Brhton Google Groups]: https://groups.google.com/g/brython
[Brython Introduction]: https://brython.info/static_doc/3.12/en/intro.html
[cmsimde]: https://github.com/mdecycu/cmsimde
[Brython 3.10.5]: https://raw.githubusercontent.com/mdecycu/cmsimde/a67c261141c21c5ee0ebbb8ffc2cb323330e8cca/static/brython.js
[3.12.3]: https://github.com/brython-dev/brython/releases/tag/3.12.3

將 [matter](https://github.com/liabru/matter-js) 導入 Brython. 必須特別注意 [Brython 3.10 Javascript] 與 [Brython 3.12 Javascript] 與 Javascript 程式互動的方法差異. 就長遠的 Brython 程式相容考量, 必須將 [cmsimde] 中的 Brython 升級到 3.12.3.

[Brython 3.10 Javascript]: https://brython.info/static_doc/3.10/en/jsobjects.html
[Brython 3.12 Javascript]: https://brython.info/static_doc/3.12/en/jsobjects.html

# Replit 現況

先前在 Replit 中啟用 cmsimde_site 相關的倉儲網站, 僅能在動態編輯與靜態檢視兩者擇一, 因為內建的網路埠號並未開放給免費帳號使用, 但自 w8 開始, Replit 與 Copespaces 相同, 新增了 Networking tool, 允許免費帳號用戶可以自行選擇設定內外網路對接埠號, 也就是在 .replit 設定檔案中加入了 Ports 的設定選項:

<pre class="brython: jscript">
[[ports]]
localPort = 80
externalPort = 3000

[[ports]]
localPort = 8080
externalPort = 80

[[ports]]
localPort = 8081
externalPort = 3001
</pre>

其中 main.py 使用 內部埠號 8080, 網站啟動後, 或轉跳到 port 80 (再跳轉至 https 443), 只要將 main2.py 中原先的 8080 改為 8081 避開 main.py 已經佔用的 8080, 然後再將 localPort 8081 設定跳轉到外部的 3001, 動態網站啟動後, 就會使用 443 連結, 而靜態網站將可從 3001 埠號進行伺服.