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

給定 [5j_wcm2024_midterm 資料](http://229.cycu.org/5j_wcm2024_midterm.csv) 與 [1a_wcm2024_midterm 資料](http://229.cycu.org/1a_wcm2024_midterm.csv) 檔案, 包含學號、Github 帳號與組別. 請各組設法在分組網站與網誌中, 建立能連結到各分組組員的課程倉儲與網站連結頁面. 且最終希望能在處理過程將各組員的歷程網站與網誌整理到分組倉儲中.

每位組員在各自的倉儲編寫網誌文章, 然後整合至分組倉儲與網站.

每位組員在各自的倉儲編寫專案報告 (in LaTeX 格式), 然後整合至分組倉儲並以 pdf 格式發佈.

每位組員在各自的倉儲編寫程式, 然後整合至分組倉儲與網站.

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

拆解工作流程:

1. 了解基本 html 語法
2. 了解如何在頁面導入 Javascript 程式
3. 了解如何在頁面啟動 Brython 程式解譯環境
4. 了解如何利用 Brython 透過網址讀取資料
5. 了解如何利用 Brython 程式分割 .csv 檔案, 了解數列的資料儲存方式
6. 了解如何使用 Brython 重複迴圈
7. 了解 Brython html 模組的應用, 了解 html DOM 運作方式
8. 了解 Brython 如何與 Javascript 程式互動
9. 了解 Brython 如何與 Python server 程式互動

從 Gist 讀取 [5j](https://gist.githubusercontent.com/mdecycu/8ba6fa28317bc7a784d8350e7bc33580/raw/8433006d7f66a1789ca99dea42af38a724521806/5j_wcm2024_midterm.csv) 與 [1a](https://gist.githubusercontent.com/mdecycu/8ba6fa28317bc7a784d8350e7bc33580/raw/8433006d7f66a1789ca99dea42af38a724521806/1a_wcm2024_midterm.csv) 的期中資料名單後, 將各學員的資料放入數列資料結構中:

對 Gemini 1.5 Pro 提問:

假如已知可以從 gist.githubusercontent.com/mdecycu/8ba6fa28317bc7a784d8350e7bc33580/raw/6efc959ee222102ffe51e326c66c4ad75fc3a3d1/1a_wcm2024_midterm.csv 取得 .csv 資料, 希望利用 Brython 讀取來自 gist 的檔案, 然後將其中的資料拆開存為數列, 程式要如何編寫?

回答結果:

<pre class="brush: python">
from browser import window, ajax

def fetch_csv_data():
  # CSV 檔案網址
  url = "https://gist.githubusercontent.com/mdecycu/8ba6fa28317bc7a784d8350e7bc33580/raw/6efc959ee222102ffe51e326c66c4ad75fc3a3d1/1a_wcm2024_midterm.csv"
  
  def on_complete(req):
    if req.status == 200 or req.status == 0:
      # 讀取 CSV 檔案內容
      content = req.text
      
      # 依照換行符號拆分資料
      lines = content.split('\n')
      
      # 建立空列表儲存資料
      data = []
      
      # 遍歷每一行資料
      for line in lines:
        # 忽略空白行
        if line.strip() == "":
          continue
        
        # 依照逗號拆分資料
        items = line.split(',')
        
        # 將拆分後的資料加入列表
        data.append(items)
      
      # 印出結果
      print(data)
    else:
      print("Error:", req.text)

  # 發送 AJAX 請求
  req = ajax.ajax()
  req.bind('complete', on_complete)
  req.open('GET', url, True)
  req.set_header('content-type', 'application/x-www-form-urlencoded')
  req.send()

# 呼叫函式讀取 CSV 資料
fetch_csv_data()
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

<pre class="brush: jscript">
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

# 常用英文單字

<a href="./../downloads/3900_common_words.html">3900 常用英文單字</a>

<a href="./../downloads/more_than_10k_words.html">More than 10k words</a>