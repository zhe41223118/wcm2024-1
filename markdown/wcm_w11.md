---
Title: WCM 第 11 週課程內容
Date: 2024-05-02 11:00
Category: WCM
Tags: Brython, w11
Slug: wcm-w11-Brython
Author: kmol
---

網際內容管理第 11 週課程, 說明如何在網頁中加入 Brython 程式應用

<!-- PELICAN_END_SUMMARY -->

# 1a 評分倉儲

倉儲: <https://github.com/mdewcm2024/1astud-site>

網站: <https://mdewcm2024.github.io/1astud-site>

有關 git pull 評分倉儲之後的處理要點:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/INs2QE2_A6s?si=-4hwUy5l1FA0bw36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

各組員或各組先將改版資料推向個人或分組的倉儲分支後, 再與主分支的版本內容合併:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/IeCdIhAebec?si=Com0Cz-TKJ5n82wf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# 5j 評分倉儲

倉儲: <https://github.com/mdewcm2024/5jstud-5jsite>

網站: <https://mdewcm2024.github.io/5jstud-5jsite/>

# 從教務主機直接擷取資料 {#nfulist}

利用 <a href="./../downloads/wsgi_v1_py.txt">wsgi_v1.py</a> 可以取得結果: <a href="./../downloads/wsgi_v1_output.txt">wsgi_v1_output.txt</a> 表示可以利用 Flask 建置網站程式取下教務主機中的相關資料.

以下影片說明如何利用 wsgi_v2.py 擷取各學期班級課表:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/Seg9jHuh72I?si=KKgo5loKzQY_7wZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

說明如何將 Python 程式配置為 Windows 操作系統中的服務:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/UgXZcpfSYXU?si=vNYGReZXxRsk32Kt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

經由上述影片將程式配置在伺服器後, 可以從[229 主機取下設一甲 90 學年度第一學期的課表](http://229.cycu.org:9447/?semester=901&classid=設一甲)

利用 <a href="./../downloads/wsgi_v2_py.txt">wsgi_v2.py</a> 可以取得以下結果:

<img src="./../images/wsgi_v2_output.png" width="551" height="647" />

# Brython 程式環境
將 <a href="/downloads/brython_w_editor_html.txt">brython_w_editor_html.txt</a> 超文件內容放入網誌中, 即可得到下列內容.

若要放入動態網站, 則必須注意各引用頁面是由 cmsimde 目錄中啟動, 必須使用 <a href="/downloads/brython_on_editor.txt">brython_on_editor.txt</a> 超文件格式.

<hr>

<p>這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 (<a href="./../downloads/practice_html.txt">practice_html.txt</a> 動態頁面超文件).</p>
<p><a href="./../downloads/practice_html.txt">practice_html.txt</a> 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用.</p>
<p>亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 <a href="https://docs.python.org/3/tutorial/classes.html">class</a> 後, 在範例導入時透過 <a href="https://docs.python.org/3/tutorial/classes.html#instance-objects">instance</a> 引用.</p>
<pre class="brush:html;auto-links:false;toolbar:false" contenteditable="false">&lt;!-- 啟動 Brython --&gt;
&lt;script&gt;
window.onload=function(){
brython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});
}
&lt;/script&gt;</pre>
<p>從 1 累加到 100:</p>
<p><button id="add1to100">1 add to 100</button></p>
<p>將 iterable 與 iterator <a href="https://home.gamer.com.tw/creationDetail.php?sn=4337438">相關說明</a>, 利用 Brython 與 Ace Editor 整理在這個頁面.</p>
<!-- 導入 brython 程式庫 -->
<p>
<script src="./../cmsimde/static/brython.js"></script>
<script src="./../cmsimde/static/brython_stdlib.js"></script>
</p>
<!-- 啟動 Brython -->
<p>
<script>
window.onload=function(){
brython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});
}
</script>
</p>
<p><!-- 導入 FileSaver 與 filereader --></p>
<p>
<script src="./../cmsimde/static/ace/FileSaver.min.js" type="text/javascript"></script>
<script src="./../cmsimde/static/ace/filereader.js" type="text/javascript"></script>
</p>
<p><!-- 導入 ace --></p>
<p>
<script src="./../cmsimde/static/ace/ace.js" type="text/javascript"></script>
<script src="./../cmsimde/static/ace/ext-language_tools.js" type="text/javascript"></script>
<script src="./../cmsimde/static/ace/mode-python3.js" type="text/javascript"></script>
<script src="./../cmsimde/static/ace/snippets/python.js" type="text/javascript"></script>
</p>
<p><!-- 導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫 -->
<script src="./../cmsimde/static/Cango-24v03-min.js"></script>
<script src="./../cmsimde/static/gearUtils-09.js"></script>
<script src="./../cmsimde/static/SVGpathUtils-6v03-min.js"></script>
<script src="./../cmsimde/static/sylvester.js"></script>
<script src="./../cmsimde/static/PrairieDraw.js"></script>
</p>
<p><!-- 請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱--></p>
<p>
<script type="text/javascript">
function doSave(storage_id, filename){
    var blob = new Blob([localStorage[storage_id]], {type: "text/plain;charset=utf-8"});
    filename = document.getElementById(filename).value
    saveAs(blob, filename+".py");
}
</script>
</p>
<p>
<script type="text/python3">
from browser import document as doc
import ace
# 清除畫布
def clear_bd1(ev):
    bd = doc["brython_div1"]
    bd.clear()
Ace1 = ace.Editor(editor_id="kw_editor1", console_id="kw_console1", container_id="kw__container1", storage_id="kw_py_src1" )
# 從 gist 取出程式碼後, 放入 editor 作為 default 程式
def run1():
    # 利用 get 取下 src 變數值
    try:
        url = doc.query["src"]
    except:
        url = "https://gist.githubusercontent.com/mdecourse/0229a8a017091476a79700b8a190f185/raw/c3a6deaf717f8f2739a4b1392a5ab10936e9693a/from_1_add_to_10_1.py"
    prog = open(url).read()

    # 將程式載入編輯區
    Ace1.editor.setValue(prog)
    Ace1.editor.scrollToRow(0)
    Ace1.editor.gotoLine(0)
    # 直接執行程式
    #ns = {'__name__':'__main__'}
    #exec(prog, ns)
    # 按下 run 按鈕
    Ace1.run()

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['kw_run1'].bind('click', Ace1.run)
doc['kw_show_console1'].bind('click', Ace1.show_console)
doc['kw_clear_console1'].bind('click', Ace1.clear_console)
doc['clear_bd1'].bind('click', clear_bd1)
# 呼叫函式執行
run1()
</script>
</p>
<p><!-- add 1 to 100 開始 -->
<script type="text/python3">
from browser import document as doc
import ace

# 清除畫布
def clear_bd1(ev):
    bd = doc["brython_div1"]
    bd.clear()

# 利用 ace 中的 Editor 建立 Ace2 物件, 其中的輸入變數分別對應到頁面中的編輯區物件
Ace2 = ace.Editor(editor_id="kw_editor1", console_id="kw_console1", container_id="kw__container1", storage_id="kw_py_src1" )

add1to100_url = "https://gist.githubusercontent.com/mdecourse/0229a8a017091476a79700b8a190f185/raw/c48e37714f055c3a0027cbfef59e442a6ef659b9/from_1_add_to_100_1.py"

# 從 gist 取得程式碼
add_src = open(add1to100_url).read()
def add(ev):
    Ace2.editor.setValue(add_src)
    Ace2.editor.scrollToRow(0)
    Ace2.editor.gotoLine(0)
    Ace2.run()

# id 為 "add1to100" 的按鈕點按時, 執行 add 方法
doc["add1to100"].bind('click', add)
</script>
</p>
<p><!-- add 1 to 100 結束--></p>
<!-- editor1 開始 -->
<p><!-- 用來顯示程式碼的 editor 區域 --></p>
<div id="kw_editor1" style="width: 600px; height: 300px;"></div>
<p><!-- 以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合 --></p>
<p><!-- 存擋表單開始 --></p>
<form><label>Filename: <input id="kw_filename" placeholder="input file name" type="text"/>.py</label> <input onclick="doSave('kw_py_src1', 'kw_filename1');" type="submit" value="Save"/></form>
<p><!-- 存擋表單結束 --></p>
<p></p>
<p><!-- 執行與清除按鈕開始 --></p>
<p><button id="kw_run1">Run</button> <button id="kw_show_console1">Output</button> <button id="kw_clear_console1">清除輸出區</button><button id="clear_bd1">清除繪圖區</button><button onclick="window.location.reload()">Reload</button></p>
<p><!-- 執行與清除按鈕結束 --></p>
<p></p>
<p><!-- 程式執行 ouput 區 --></p>
<div style="width: 100%; height: 100%;"><textarea autocomplete="off" id="kw_console1"></textarea></div>
<p><!-- Brython 程式執行的結果, 都以 brython_div1 作為切入位置 --></p>
<div id="brython_div1"></div>
<!-- editor1 結束 --><hr/><!-- ########################################## -->
<p>從 1 累加到 100 part2:</p>
<p><button id="add1to100part2">1 add to 100</button><button id="cango_three_gears">cango_three_gears</button><button id="bsnake">BSnake</button><button id="aitetris">AI Tetris</button><button id="threejsblock">Rotating Block</button></p>
<p><!-- 請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱--></p>
<p>
<script type="text/python3">
from browser import document as doc
import ace
# 清除畫布
def clear_bd2(ev):
    bd = doc["brython_div2"]
    bd.clear()
Ace3 = ace.Editor(editor_id="kw_editor2", console_id="kw_console2", container_id="kw__container2", storage_id="kw_py_src2" )
# 從 gist 取出程式碼後, 放入 editor 作為 default 程式
def run2():
    # 利用 get 取下 src 變數值
    try:
        url = doc.query["src2"]
    except:
        url = "https://gist.githubusercontent.com/mdecourse/0229a8a017091476a79700b8a190f185/raw/c3a6deaf717f8f2739a4b1392a5ab10936e9693a/from_1_add_to_10_1.py"
    prog = open(url).read()

    # 將程式載入編輯區
    Ace3.editor.setValue(prog)
    Ace3.editor.scrollToRow(0)
    Ace3.editor.gotoLine(0)
    # 直接執行程式
    #ns = {'__name__':'__main__'}
    #exec(prog, ns)
    # 按下 run 按鈕
    Ace3.run()

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['kw_run2'].bind('click', Ace3.run)
doc['kw_show_console2'].bind('click', Ace3.show_console)
doc['kw_clear_console2'].bind('click', Ace3.clear_console)
doc['clear_bd2'].bind('click', clear_bd2)
# 呼叫函式執行
run2()
</script>
</p>
<p><!-- add 1 to 100 part2 開始 -->
<script type="text/python3">
from browser import document as doc
import ace

# 清除畫布
def clear_bd2(ev):
    bd = doc["brython_div2"]
    bd.clear()

# 利用 ace 中的 Editor 建立 Ace2 物件, 其中的輸入變數分別對應到頁面中的編輯區物件
Ace4 = ace.Editor(editor_id="kw_editor2", console_id="kw_console2", container_id="kw__container2", storage_id="kw_py_src2" )

# 透過 Ace4 以類別建立一個通用的 button2, 可以在多個案例中將 gist 程導入編輯區

class button2:
    def __init__(self, url):
        self.url = url

    # 記得加入 event 輸入變數
    def do(self,ev):
        Ace4.editor.setValue(open(self.url).read())
        Ace4.editor.scrollToRow(0)
        Ace4.editor.gotoLine(0)
        Ace4.run()

add1to100_url = "https://gist.githubusercontent.com/mdecourse/0229a8a017091476a79700b8a190f185/raw/c48e37714f055c3a0027cbfef59e442a6ef659b9/from_1_add_to_100_1.py"

# 從 gist 取得程式碼
add_src = open(add1to100_url).read()
def add2(ev):
    Ace4.editor.setValue(add_src)
    Ace4.editor.scrollToRow(0)
    Ace4.editor.gotoLine(0)
    Ace4.run()

# id 為 "add1to100part2" 的按鈕點按時, 執行 add 方法
doc["add1to100part2"].bind('click', add2)
# 以下為運用 button2 class 的通用 gist 程式導入區
################################## cango_three_gears start
cango_three_gears_url = "https://gist.githubusercontent.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d/raw/f7a85d737d6723d5e34c526d5daee990ed92c32b/cango_three_gears_brython_div2.py"
cango_three_gears = button2(cango_three_gears_url)
doc["cango_three_gears"].bind("click", cango_three_gears.do)
################################## cango_three_gears end
################################## bsnake start
bsnake_url = "https://gist.githubusercontent.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d/raw/f7a85d737d6723d5e34c526d5daee990ed92c32b/kmol_snakey.py"
bsnake = button2(bsnake_url)
doc["bsnake"].bind("click", bsnake.do)
################################## bsnake end
################################## aitetris start
aitetris_url = "https://gist.githubusercontent.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d/raw/f7a85d737d6723d5e34c526d5daee990ed92c32b/pygame_to_brython_tetris_ai.py"
aitetris = button2(aitetris_url)
doc["aitetris"].bind("click", aitetris.do)
################################## aitetris end
################################## threejsblock start
threejsblock_url = "https://gist.githubusercontent.com/mdecycu/2c6323eff49b496d1bafd210f3ec9707/raw/df37802f9e8a386b6424f7945af622b1cd0a9ca5/threejs_rotating_block.py"
threejsblock = button2(threejsblock_url)
doc["threejsblock"].bind("click", threejsblock.do)
################################## threejsblock end
</script>
</p>
<p><!-- add 1 to 100 part2 結束--></p>
<!-- editor2 開始 -->
<p><!-- 用來顯示程式碼的 editor 區域 --></p>
<div id="kw_editor2" style="width: 600px; height: 300px;"></div>
<p><!-- 以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合 --></p>
<p><!-- 存擋表單開始 --></p>
<form><label>Filename: <input id="kw_filename2" placeholder="input file name" type="text"/>.py</label> <input onclick="doSave('kw_py_src2', 'kw_filename2');" type="submit" value="Save"/></form>
<p><!-- 存擋表單結束 --></p>
<p></p>
<p><!-- 執行與清除按鈕開始 --></p>
<p><button id="kw_run2">Run</button> <button id="kw_show_console2">Output</button> <button id="kw_clear_console2">清除輸出區</button><button id="clear_bd2">清除繪圖區</button><button onclick="window.location.reload()">Reload</button></p>
<p><!-- 執行與清除按鈕結束 --></p>
<p></p>
<p><!-- 程式執行 ouput 區 --></p>
<div style="width: 100%; height: 100%;"><textarea autocomplete="off" id="kw_console2"></textarea></div>
<p><!-- Brython 程式執行的結果, 都以 brython_div1 作為切入位置 --></p>
<div id="brython_div2"></div>
<!-- editor2 結束 --><hr/>
<p>
<script src="https://unpkg.com/three@0.144.0/build/three.js" type="text/javascript"></script>
