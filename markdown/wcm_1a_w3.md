Title: WCM 四技第三週課程
Date: 2024-03-07 11:00
Category: 四技
Tags: codespaces, gitpod, localhost, w3
Slug: wcm-1a-w3
Author: kmol
---

四技 WCM 第三週課程, 除了 Replit, Github Codespaces, Gitpod 之外, 還介紹如何利用可攜系統維護個人與分組網站.

<!-- PELICAN_END_SUMMARY -->

# 利用 Github Classroom 分組
四技期中分組作業名稱為 1a, 各組組長在取得作業連結之後, 自行建立各組 Team, 以第一組為例, Team 名稱為 ag1, 之後以每組至多 6 名組員, 透過作業連結加入 ag1 Team, 其餘各組組員則依序建立 ag2, ag3 等 Team 名稱, 讓該組組員可以加入.

以第一組為例, 完成 ag1 Team 建立後, 將取得 mdewcm2024 帳號下的 1a-ag1 倉儲, 所有第一組的組員均對此分組倉儲有管理權, 可以使用登入 Github 的帳號權限進行改版.

由於在 Replit 免費帳號下, 僅能與登入 Github 的帳號進行授權, 且在 Replit 導入的倉儲, 任何人都能夠取得倉儲下 .git 的所有資料, 因此無法利用組員的 Github 帳號 token 取得管理授權, 而必須動態在 /home/runner/.ssh 下建立 id_rsa 與 config 連線設定, 各組組員才能利用 Replit 管理分組網站內容.

# 利用 Github Codespaces 維護倉儲
如前所述, 使用 Replit 管理分組網站, 必須採動態建立 .ssh 目錄中的私鑰與 config, 過程比較複雜, 但若採用 Github Codespaces, 則可以在登入 Github 帳號下, 管理該帳號所有授權的倉儲, 包括分組倉儲與網站, 唯一的限制是每個月只能使用 120 core hours, 若以內定的 2 core 執行管理, 則平均每天可以使用兩個小時.

說明[如何利用 Codespaces 維護分組倉儲]

[如何利用 Codespaces 維護分組倉儲]: https://nfuedu-my.sharepoint.com/:v:/g/personal/yen_nfu_edu_tw/ET-PmJv_eF1KuEqnatnWncABDK_SWAhf15lEll8bdO24kQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=e9PD2D

# 常用的 git 指令
git 的新增、提交與推送指令:

git add .
git commit -m "說明字串"
git push

使用 git add . 表示要認列所進行的全部改版內容, git commit -m 執行之前, 若在近端使用, 必須先行設定 git config,  將 home_ipv6 目錄下的 .gitconfig 中明確列出改版者的身分, 其中包括:

git config --global user.name "提交者的 github 帳號名稱"

git config --global user.email "提交者在 github 所登錄的 email address"

使用者也可以利用 git version 查詢目前所使用的 git 版本.

git status 通常用來查核目前近端的改版狀況, 例如: 是否與遠端倉儲同步, 或者遠端倉儲已經有了新版本.

若遠端倉儲已經有新的版本, 則在 git push 之前, 必須設法取下遠端資料進行合併後, 才能再提交新的版本並推送到遠端.

git pull = git fetch + git merge

由於要將各組員的 wcm2024 設定為各分組倉儲的子模組, 因此必須利用 git submodule add 以各組員的學號作為子目錄名稱, 利用下列指令, 將組員倉儲新增為分組倉儲的子模組:

git submodule add 倉儲網址 子目錄

若只要取下倉儲的主要內容, 可以使用下列指令:

git clone 倉儲網址_協定.git 指定目錄與否 

若要取下帶有子模組的倉儲, 且可能該子模組還有設定其他子模組, 則必須要加上 --recurse-submodules:

git clone --recurse-submodules 倉儲網址_協定.git 指定目錄與否

# 利用 Gitpod 維護倉儲
<https://www.gitpod.io/> 的使用與 Codespaces 類似, 都可透過 Visual Studio Code 的網際介面進行倉儲的管理, 每個月有 50 小時的免費使用時間, 可以使用 Github 帳號登入, 相較於 Replit, 其給定的免費資源較多, 執行速度快且 .ssh 下的 id_rsa 與 config 僅需設定一次.

# 利用 localhost 維護倉儲
前面提到的 Replit, Codespaces 與 Gitpod 是目前利用雲端運算管理分散式版次管理系統較為有名的環境, 使用者可以直接在瀏覽器中執行各種運算與程式的開發, wcm2024 網際內容管理的第一個階段, 便利用這些目前提供免費使用的範圍內來維護個人與分組的網站. 即便如此, 免費帳號各有不銅的限制, 目前允許免費使用的 Github Pages, 也可能在未來轉為收費服務, 因此未來希望對個人或團隊的倉儲或網站掌控最大權限, 仍需學習如何利用近端或自架主機管理及部署網際內容.

首先, 透過 Windows 環境中的 USB 隨身碟, 配置可攜程式系統, 用來管理個人與分組的分組倉儲與網站, 之後再設法介紹如何利用自行建立的 Ubuntu 主機配置倉儲與網站.

# 利用 Wink 建立操作影片

Wink 官方網站: <https://www.debugmode.com/wink.html>

Wink 錄製 mp4 操作影片, 可以與 [Sharex](https://github.com/ShareX/ShareX/releases) 共用 ffmpeg.exe.

Sharex 可用於電腦畫面截圖, 也可以錄製電腦連續操作影片, 而 Wink 則可取電腦操作過程的關鍵影格, 加上文字說明標籤後, 製作操作流程示範影片.

[下載 wink3.7z](http://229.cycu.org/wink3.7z) (需要密碼)

以下利用 Wink 建立操作過程影片:

<div class="winkVideoContainerClass"><video width="1008" height="630" autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData_wcm_1a_w3" muted="true">
<source src="./../downloads/wcm_1a_w3.mp4" type="video/mp4" /></video></div>

[wink3.7z](htt://229.cycu.org/wink3.7z) (需要下載密碼)

<pre class="brush: html">
<div class="winkVideoContainerClass"><video width="1008" height="630" autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData_wcm_1a_w3" muted="true">
<source src="./../downloads/wcm_1a_w3.mp4" type="video/mp4" /></video></div>
</pre>