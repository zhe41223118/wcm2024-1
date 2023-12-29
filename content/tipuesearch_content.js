var tipuesearch = {"pages": [{'title': 'About', 'text': '靜態網頁:  https://mde.tw/wcm2024  and  https://s.cycu.org/~pj2022/wcm2024 \n 倉儲:  https://github.com/mdecycu/wcm2024 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Python', 'text': 'cmsimde \n https://github.com/mdecycu/cmsimde \n gen_portable_python312.py \n import urllib.request\nimport os\n \ndir_path = os.path.dirname(os.path.realpath(__file__))\n# basic files for Python installation\n# before 3.12.0\n#py_list = ["core", "dev", "exe", "lib", "tcltk", "tools"]\n# 3.12.1 no tools.msi\npy_list = ["core", "dev", "exe", "lib", "tcltk"]\n# Python version\nversion = "3.12.1"\n# Python msi download URL\nftp = "https://www.python.org/ftp/python/" + version + "/amd64/"\n# location for Portable Python\npath = "y:\\\\tmp\\\\Python312"\n# create directory\ntry:\n    os.mkdir(path)\nexcept:\n    # path exists\n    pass\n# get Python installation msi files and extract into target dir\nfor i in py_list:\n    filename = i + ".msi"\n    url = ftp + filename\n    # download basic python msi file\n    urllib.request.urlretrieve(url, filename)\n    os.system("msiexec.exe /a " + i + ".msi targetdir=" + path)\n    # delete msi file\n    os.remove(path + "\\\\" + i + ".msi") \n get-pip.py \n cmsimde 啟動需要下列模組: \n pip install flask flask_ cors  bs4 lxml pelican markdown leo pyopenssl \n', 'tags': '', 'url': 'Python.html'}, {'title': 'Replit', 'text': '假如 Replit 關閉原先的 repl.co, 讓 cmsimde 啟動編輯之後, 只能在 Webview 頁面中運行, 儘管無法透過 Deployment 執行網際協同, 但仍可讓各學員用來編輯管理其從 Github 的倉儲與網站. \n 尤其若能讓各用戶利用 Replit 管理其取自 Github Classroom 的倉儲, 將更能提升 Github 與 Replit 在課程教學上的使用效能. \n 讓各學員取自 Github Classroom 的倉儲, 可以推向具有 Admin 權限的 Github 倉儲中: \n ssh-keygen 建立 .ssh/id_rsa 與 id_rsa.pub, 將 id_rsa.pub 放入 Github SSH 對應設定區 \n 建立 .ssh/config 如下: \n Host github.com\n# git clone 時的 URL 為 git@github.com:帳號/倉儲.git\nUser git\nHostname github.com\n# 因為 Replit 與 github.com  都支援 IPv4 網路協定因此無需代理主機設定\n# ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n References: \n https://intuitiveexplanations.com/tech/replit/', 'tags': '', 'url': 'Replit.html'}, {'title': 'Games', 'text': 'https://github.com/replit/kaboom \n https://github.com/replit/kaboomsite \n https://github.com/replit/replit-py \n https://github.com/replit/replit-ai-python \n https://github.com/replit/replit-ai-modelfarm-typescript \n', 'tags': '', 'url': 'Games.html'}, {'title': 'Typescript', 'text': 'PMKS 原始碼  (採  Silverlight ) \n PMKS + 原始碼  (採  Typescript ) \n pmks+ 平面機構設計範例1 ,  機構合成範例1 ,\xa0 \n 電子書: \n 2018 Pro Typescript \n 2019 Essential Typescript \n 2021 Developing Web Components with Typescript \n 2021 Essential Typescript4 \n 2022 Modern Full-Stack Development  \n 2023 Modern Typescript \n 2023 Typescript Basics \n', 'tags': '', 'url': 'Typescript.html'}, {'title': 'Servers', 'text': 'stud and stud2 servers are on 229, setup is on usr/portable_python3.10.6 directory. \n stud: 32GB Ram and 800GB HD \n stud2: 32GB Ram and 2TB HD \n \n \n', 'tags': '', 'url': 'Servers.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};