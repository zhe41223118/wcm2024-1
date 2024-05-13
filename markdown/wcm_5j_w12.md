---
Title: WCM 五專 w12 專案
Date: 2024-05-06 11:00
Category: 5j
Tags: Python, w12, angry bird
Slug: wcm-w12-angry_bird
Author: kmol
---

五專網際內容管理課程第十二週專案

<!-- PELICAN_END_SUMMARY -->

# Python 可攜系統

請下載 Python 3.7.1 <http://229.cycu.org/wcm2024_5j.7z> (需要輸入帳號密碼), 解開壓縮後, 放入 C:\tmp 或 USB 隨身碟.

使用方法: 

1. 雙點擊 start_ipv6_py371.bat 啟動可攜程式環境
2. 雙點擊 stop.bat 關閉可攜程式環境

利用 [gen_py3123_portable.py](https://gist.githubusercontent.com/mdecycu/4a3e639fa0a7282fb3a3c8b6668e9e95/raw/69dfca6b6ee26b3b5cb8e0a1e2a37be6dc0556ca/gen_py3123_portable.py) 在上列舊版的 Python 可攜環境執行, 可在 C:\tmp 建立最基本的可攜 Python3123 程式目錄.

若將 Python3123 放入先前舊版的可攜 Python371 data 目錄中, 且配合建立 start_ipv6_py3123.bat, 則可以將 Python 3.7.1 版的可攜 Python 升級為 Python 3.12.3 版.

以下影片說明如何從 Python 3.7.1 加入可攜的 Python 3.12.3 版:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/E-BmUqSA_YU?si=Ho-aEaO2NnODx_sr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

但是利用上述流程所建立的 Python 3.12.3 版可攜程式並沒有 pip, 必須啟動 start_ipv6_py3123.bat 後, 在命令列執行 python [get-pip.py](https://bootstrap.pypa.io/get-pip.py) 才能在可攜系統安裝 pip, 安裝 pip 後, 可以在命令列中以 pip list 查驗目前所安裝的 Python 模組.

# Angry Bird 專案 {#angry_bird}

專案程式: <https://github.com/mdecycu/angry-birds-python>

操作影片:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/ShF1rXcTN50?si=e7E54RAMnULXBmAD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

以下影片說明如何利用 ShareX 製作影片放入 Youtube 之後, 再嵌入自己的課程網誌後, 將網誌連結回報到[指定討論區](https://github.com/mdecycu/wcm2024/discussions/10):

<iframe width="1120" height="630" src="https://www.youtube.com/embed/Hw_uu-ykL38?si=igR4A1WFLl_vrTer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

近端操作方式:

1. 啟動可攜程式環境, 可以使用隨身碟中的可攜環境或 C:\ 中的可攜環境
2. 在命令列視窗, 取下程式碼: git clone https://github.com/mdecycu/angry-birds-python bird
3. 在命令列視窗, 安裝所需的 Python 模組: pip install -r requirements.txt
4. 在命令列視窗: cd bird\src, 然後執行 python main.py

Replit 操作方式:

1. 利用 URL = https://github.com/mdecycu/angry-birds-python 並選擇 language 為 Python 後 import 倉儲內容
2. Run 設定為 "cd src && python3 main.py
3. 在 Shell 中以 pip install -r requirements.txt 安裝所需 Python 模組
4. 按下 Run 執行畫面將出現在 Tools 工具中的 output 頁面.

# Brython 程式 {#brython}

以下為猜數字遊戲的操作說明:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/LjEFtaPMk0k?si=STgSE8Am5NbY6gkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[從教務主機取出班級課表程式](https://gist.githubusercontent.com/mdecycu/aaced903b90465ed1718edb68e3d10a6/raw/4dc447c1114bb35a3c5ee02ffc0d6ce97f555688/nfulist_2024_v2.py)

<a href="./../downloads/guess_in_brython.txt">猜數字遊戲</a> | <a href="https://mde.tw/wcm2024/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/4a3e639fa0a7282fb3a3c8b6668e9e95/raw/3214565e419e00b1607344e173a0280fc3418e90/guess_in_brython.py">執行猜數字遊戲</a>

延伸單一用戶猜數字遊戲至[可多人競賽的遊戲程式](./../downloads/guess_game_server_wcm2024.7z)

<a href="./../downloads/roc_flag_in_brython.txt">ROC Flag</a> | <a href="https://mde.tw/wcm2024/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/4a3e639fa0a7282fb3a3c8b6668e9e95/raw/3214565e419e00b1607344e173a0280fc3418e90/roc_flag_in_brython.py">執行畫 ROC flag</a>

<a href="./../downloads/proc_flag_in_brython.txt">PROC Flag</a> | <a href="https://mde.tw/wcm2024/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/4a3e639fa0a7282fb3a3c8b6668e9e95/raw/3214565e419e00b1607344e173a0280fc3418e90/proc_flag_in_brython.py">執行畫 PROC flag</a>

<a href="./../downloads/usa_flag_in_brython.txt">USA Flag</a> | <a href="https://mde.tw/wcm2024/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/4a3e639fa0a7282fb3a3c8b6668e9e95/raw/3214565e419e00b1607344e173a0280fc3418e90/usa_flag_in_brython.py">執行畫 USA flag</a>

<a href="./../downloads/draw_grid_in_brython.txt">畫格線</a> | <a href="https://mde.tw/wcm2024/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/4a3e639fa0a7282fb3a3c8b6668e9e95/raw/3214565e419e00b1607344e173a0280fc3418e90/draw_grid_in_brython.py">執行畫格線</a>

<a href="./../downloads/single_snake_in_brython.txt">單節貪食蛇遊戲</a> | <a href="https://mde.tw/wcm2024/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/4a3e639fa0a7282fb3a3c8b6668e9e95/raw/3214565e419e00b1607344e173a0280fc3418e90/single_snake_in_brython.py">執行單節貪食蛇遊戲</a>

# 雲端 IDE {#ide}

<https://replit.com>, <https://github.com/codespaces> 與 <https://gitpod.io> 都是雲端 IDE, 建立帳號後, 可以用來開發各種單機與網路程式套件.

設定系上代理主機後, 連線至 <http://wcm.cycu.org:88/github/cpnote/> (只能透過系上 IPv6 網段連線), 可以參考如何在 Replit 使用 ANSI C 開發程式.

有關 Replit: 

<https://yujih.com/blog/replit-journey/>

以下資料取自 <https://en.wikipedia.org/wiki/Replit>

Replit：線上整合開發環境 (IDE)

Replit（發音為 /ˈrɛplɪt/），前身為 Repl.it，是一家美國新創公司，提供線上整合開發環境 (IDE)。Replit 允許使用者建立線上程式設計專案，稱為「repls」。

歷史

Replit 由程式設計師 [Amjad Masad]、[Faris Masad] 和設計師 [Haya Odeh] 於 2016 年共同創立，公司位於 [San Mateo]。其名稱來自縮寫 REPL，代表 "read–evaluate–print loop" (讀取-執行-列印 循環。

[Amjad Masad]: https://amasad.me/about
[Faris Masad]: https://youtu.be/FudqFqDR-FQ?si=pb2oH3_7zB3DGGfU
[Haya Odeh]: https://www.hayaodeh.com/
[San Mateo]: https://en.wikipedia.org/wiki/San_Mateo,_California

[Amjad Masad] 在創立 Replit 之前曾在 Yahoo 和 Facebook 擔任工程師，負責開發工具，並參與創立了 Codecademy。他早在十多年前就有了 Replit 的構想。

2009 年，[Amjad Masad] 嘗試用 JavaScript 實現其他程式語言，但發現這實際上不可行。他看到瀏覽器和網頁技術的巨大進步，並受到 Google Docs 網頁功能的啟發，想到可以在網頁瀏覽器中編寫和共享程式碼的想法。他與 Haya Odeh 花了兩年時間建立了一個名為「JSRepl」的開源產品，該產品允許他將語言編譯成 JavaScript，並為 Udacity 和 Codecademy 的教程提供支援。在他成為 Codecademy 的早期員工後，這個項目被擱置了一段時間，直到多年後，他和 Odeh 決定重啟在瀏覽器中建立程式設計環境的項目。

隨著 Replit 的成形，Masad 和 Odeh 希望擁有一個「真正的環境，而不是在瀏覽器中模擬的東西」。他們最初將重點放在教育市場，然後轉向專業開發人員。

自 2021 年 3 月起，「replit.com」已成為該網路服務的預設域名，取代了舊的「repl.it」。這個改變是因為 Masad 希望人們將網站名稱發音為 /ˈrɛplɪt/，而不是 /ˈrɛpəl/。Masad 還提到另一個原因是 ".it" 頂級域名的問題，例如續期限制。

Replit 最初只是一個 REPL。然而，最終實現了 [Ace 編輯器]，允許編輯程式。2017 年，Replit 切換到 [Monaco 程式碼編輯器]，與 [Visual Studio Code] 中使用的編輯器相同。由於行動裝置支援問題，程式碼編輯器在 2021 年至 2022 年間切換到 [CodeMirror]。這個決定遭到了 Replit 社群的反彈和批評，但在修復錯誤和主要問題後，最終平息了下來。

[Ace 編輯器]: https://github.com/ajaxorg/ace
[Monaco 程式碼編輯器]: https://github.com/microsoft/monaco-editor
[Visual Studio Code]: https://github.com/microsoft/vscode
[CodeMirror]: https://github.com/codemirror

Replit 曾提供 Teams for Education 產品，用於協助課堂上的程式設計教學。但官方宣布從 2023 年 11 月 15 日起，將不再為該產品添加錯誤修復和功能。

2024 年，Replit 宣布將從其位於舊金山市南市場的總部搬遷到福斯特市的新地點。

功能

Replit 是一個線上整合開發環境 (IDE)，支援多種程式語言。

Replit 最初支援 50 多種程式語言，但自 2022 年 2 月 23 日起，Replit 使用 Nix 套件管理器，讓使用者可以存取整個 Nixpkgs 套件資料庫。新的 Repls 可以透過官方語言模板或使用者的自訂 Nix 配置來建立。使用者可以配置 Repl 的各種功能，從語言伺服器協議到除錯器支援。

它使用 [CodeMirror] 6 編輯器元件，與 [CodePen] 等其他主要網站使用的編輯器元件相同。

[CodePen]: https://codepen.io/

Replit 支援協作編碼，允許多個使用者編輯共享的 repl，即時編輯跨文件，並進行即時通訊。使用共享計算引擎，程式碼可以在 Repl 中運行並以相同的方式顯示給多個使用者。

Repl 環境內建了所有 Repls 的 Git 版本控制，使用者可以切換分支、推送檔案和還原程式碼。Replit 允許從 GitHub 儲存庫提取程式碼，并将 Repls 連結到 GitHub 儲存庫。

一些 Repls 還支援除錯器和單元測試。Replit 使用除錯器介面卡協議為連接到 Repl 的所有使用者提供 Java、Python、Node.js 和 C++ 的除錯服務。Replit 在多種語言中提供零設定單元測試。Repls 還具有祕密管理功能，允許使用者對公開的 Repl 隱藏數值。

使用者還可以從 [Glitch] 導入專案，[Glitch] 提供與 Replit 類似的服務，但尚不清楚此功能是否仍受官方支援；截至 2022 年 7 月，該功能仍可使用。

[Glitch]: https://glitch.com/

2023 年 10 月，Replit 向所有使用者開放了由機器學習提供支援的新功能，包括程式碼完成建議和聊天軟體開發。Replit AI 的公開發布公告稱：「Replit 將成為軟體開發人員的 AI 代名詞——只有這樣，我們才能完成我們的使命。」 Replit 的常見問題解答指出，演算法是在公共程式碼上訓練的。所有託管在 Replit 上的公共程式碼都受 MIT 許可證的約束，可以用于訓練機器學習模型。使用者可以透過設定禁用機器學習建議。為了防止程式碼被用於訓練 Replit 演算法，使用者必須將其 Repl 設為私有。

有關 Python:

以下資料取自: <https://en.wikipedia.org/wiki/Python_(programming_language)>

Python：高階通用程式語言

Python 是一種高階、通用型的程式語言。它的設計哲學強調使用顯著的縮排來提高程式碼可讀性。Python 是動態類型且具備垃圾回收機制，支援多種程式設計範式，包括結構化（特別是程序式）、物件導向和函數式程式設計。由於其全面的標準庫，Python 常被描述為「內建電池」的語言。

歷史

Python 由 [Guido van Rossum] 在 1980 年代後期於荷蘭 [Centrum Wiskunde & Informatica] (CWI) 開發，作為 [ABC 程式語言]的後繼者。[ABC 程式語言]受到 [SETL] 的啟發，具有異常處理能力，並可與 [Amoeba 作業系統]互動。Python 的實作始於 1989 年 12 月。Van Rossum 一直擔任該項目的主要開發者，直到 2018 年 7 月 12 日宣布從 Python 的「終身仁慈獨裁者」（BDFL）職責中「永久休假」。BDFL 這個稱號是由 Python 社群賦予他的，以反映他作為專案主要決策者的長期承諾。2019 年 1 月，活躍的 Python 核心開發者選舉了五名成員組成的指導委員會來領導該項目。

[Guido van Rossum]: https://zh.wikipedia.org/zh-tw/%E5%90%89%E5%A4%9A%C2%B7%E8%8C%83%E7%BD%97%E8%8B%8F%E5%A7%86
[Centrum Wiskunde & Informatica]: https://www.cwi.nl/en/
[SETL]: https://setl.org/setl/
[ABC 程式語言]: https://homepages.cwi.nl/~steven/abc/
[Amoeba 作業系統]: https://en.wikipedia.org/wiki/Amoeba_(operating_system)

Python 2.0 於 2000 年 10 月 16 日發布，具有許多主要的新功能，例如列表推導式、循環檢測垃圾回收、引用計數和 Unicode 支援。Python 3.0 於 2008 年 12 月 3 日發布，其許多主要功能都移植到了 Python 2.6.x 和 2.7.x。Python 3 的版本包含 2to3 工具，可自動將 Python 2 程式碼轉換為 Python 3。

Python 2.7 的生命週期最初設定於 2015 年結束，但由於擔心大量現有程式碼無法輕易移植到 Python 3，因此推遲到 2020 年。目前，只有 3.8 及更高版本才受支援。儘管 Python 2.7 及更舊版本官方已不再支援，但另一個非官方的 Python 實作 PyPy 繼續支援 Python 2，即「2.7.18+」，其中加號表示（至少一些）「移植的安全性更新」。

截至 2023 年 10 月，Python 3.12 是穩定版本，3.12 和 3.11 是僅有的兩個版本具有積極（不僅僅是安全性）支援。3.11 中與 3.10 相比的顯著變化包括提高了程式執行速度和改進了錯誤報告。Python 3.12 為該語言添加了語法（實際上，每個 Python 版本至少從 3.5 開始都添加了一些語法），新的（軟）關鍵字 type（最近的版本添加了許多類型支援，例如 3.10 中的新類型聯合運算子），以及 3.11 用於異常處理，以及 3.10 的 match 和 case（軟）關鍵字，用於結構化模式匹配語句。Python 3.12 還删除了過時的模組和功能，未來的版本也將如此。

Python 3.11 聲稱比 Python 3.10 快 10% 到 60%，而 Python 3.12 在此基礎上又增加了 5%。它還改進了錯誤訊息，並進行了許多其他更改。

自 2023 年 6 月 27 日起，由於 Python 3.7 達到生命週期結束，Python 3.8 成為了 Python 最舊的受支援版本（儘管處於「安全性支援」階段）。

Python 3.13 有一個垃圾回收器，現在是增量式的（可以意味著更短的暫停），並有一個實驗性的 JIT 編譯器；它從 C API 中删除了一些內容（并删除了一些標準庫模組，19 個「死電池」，以及許多已棄用的類、函數和方法，更多的內容將在 Python 3.15 和/或 3.16 中删除）。從 3.13 開始，它和以後的版本將有 2 年的全面支援（從一年半增加到兩年）；然後是 3 年的安全性支援（與之前的總支援時間相同）。

設計哲學和功能

Python 是一種多範式程式設計語言。它完全支援物件導向程式設計和結構化程式設計，其許多功能也支援函數式程式設計和面向方面程式設計（包括元程式設計和元物件）。通過擴展，Python 還支援許多其他範式，包括按契約設計和邏輯程式設計。

Python 使用動態類型和引用計數與循環檢測垃圾回收器相結合的内存管理方式。它使用動態名稱解析（後期綁定），在程式執行期間绑定方法和變數名稱。

其設計在 Lisp 傳統中為函數式程式設計提供了一些支援。它具有 filter、map 和 reduce 函數；列表推導式、字典、集合和生成器表達式。標準庫中有兩個模組（itertools 和 functools）實現了從 Haskell 和 Standard ML 中借鑒的函數式工具。

Python 的核心哲學總結在「Python 之禪」（PEP 20）中，其中包括一些格言，例如：

1. 美麗勝於醜陋。
2. 顯式勝於隱式。
3. 簡單勝於複雜。
4. 複雜勝於難懂。
5. 可讀性很重要。

然而，Python 的功能經常違反這些原則，並因添加不必要的語言冗餘而受到批評。對這些批評的回應是，Python 之禪只是一個指導方針，而不是規則。添加一些新功能一直備受爭議，以至於 Guido van Rossum 在 Python 3.8 中添加賦值表達式運算子後，因激烈的反對而辭去了終身仁慈獨裁者的職務。

儘管如此，Python 並沒有將所有功能都構建到其核心中，而是設計為可透過模組高度擴展。這種緊湊的模組化使其在為現有應用程式添加可程式設計介面方面特別受歡迎。Van Rossum 對於小型核心語言、大型標準庫和易於擴展的直譯器的願景源於他對 ABC 的失望，ABC 主張相反的方法。

Python 聲稱致力於更簡單、更簡潔的語法和語法，同時讓開發人員可以選擇自己的編碼方法。與 Perl 的「做一件事有很多方法」的座右銘相比，Python 擁抱「做一件事應該有一種——最好只有一種——顯而易見的方法」的哲學。然而，在實踐中，Python 提供了許多方法來完成相同的任務。例如，至少有三種格式化字串文字的方法，但沒有哪一種是程式設計師應該使用的。Python 軟體基金會的研究員兼 Python 書籍作者 Alex Martelli 寫道：「在 Python 文化中，將某事描述為『聰明』不被認為是一種讚美。」

Python 的開發人員通常努力避免過早優化，并拒絕對 CPython 參考實作的非關鍵部分進行修補，因為這些修補會以犧牲清晰度為代價來略微提高速度。可以通過將速度關鍵函數移至以 C 等語言編寫的擴展模組，或使用 PyPy 等即時編譯器來提高執行速度。也可以跨編譯成其他語言，但由於 Python 是一種非常動態的語言，它要么不能提供預期的全部加速，要么編譯的是 Python 的受限子集，并且可能會稍微更改語義。

Python 的開發人員的目標是讓它使用起來很有趣。這體現在它的名字中——向英國喜劇團體 Monty Python 致敬——以及偶爾在教程和參考材料中使用的俏皮方法，例如在示例中使用術語「spam」和「eggs」（Monty Python 小品的參考），而不是常用的「foo」和「bar」。Python 社群中的一個常見新詞是 pythonic，它具有與程式風格相關的各種含義。「Pythonic」程式碼可能很好地使用了 Python 的習慣用法，很自然或顯示出對該語言的流利程度，或者符合 Python 的極簡主義哲學和對可讀性的重視。難以理解或讀起來像從另一種程式語言粗略轉錄的程式碼被稱為「unpythonic」。



