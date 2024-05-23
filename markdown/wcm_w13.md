---
Title: WCM w13 內容
Date: 2024-05-16 11:00
Category: wcm
Tags: w13, AI, Guessing
Slug: wcm-w13-ai-and-guessing-game
Author: kmol
---

網際內容管理課程第十三週, 從單機猜數字遊戲與 AI 應用談起

<!-- PELICAN_END_SUMMARY -->

# 先看看 Linux 

在 Linux 設定全域 Proxy 伺服器的位置, 可以是 /etc/environment 檔案中的:

http_proxy="http://your_proxy_server:port"
https_proxy="http://your_proxy_server:port"

能不能讓每一位學員都擁有遠端登入 stud.cycu.org 這台主機的帳號? How? 擁有帳號, 然後呢?

# 猜猜看遊戲

<a href="./../downloads/guess_game.7z">guess_game.7z</a> 是在 AI 輔助下, 將簡單的單人 [Brython 線上猜數字遊戲](https://mde.tw/wcm2024/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/aaced903b90465ed1718edb68e3d10a6/raw/cfce17938843e1f9a9be75d0cf2c2dee7c702291/guess_game.py) 轉化為可以多人同場比賽猜數字的線上遊戲.

<http://229.cycu.org:88>

由於使用 Flask, 直接啟動模式僅用於程式開發, 若要部署在 Windows 或 Linux 電腦上, 還需進行下列考量:

1. 有沒有比較好的啟動模式?
2. 要如何使用 https? 有沒有必要?
3. 能不能透過電腦的服務執行猜數字遊戲? 也就是隨著電腦開機後能直接自動執行?
4. 假如要配置使用者註冊制或儲存比賽資料, 該使用哪一種資料庫? SQLite 就可以, 還是需要使用 PostgreSQL?
5. 一但部署成功, 該如何設置網站的符號名稱?

最後, 延伸以上的多人網際程式架構, 是不是就可以開發一個網際協同產品開發網站?

在現今 AI 系統的輔助下, 上列程式開發有沒有變得比較簡單?

後續猜數字遊戲的開發倉儲: <https://github.com/mdecycu/guess_game>

值得加入的功能:

1. 具有管理者模式, 可以重新啟動伺服器.
2. 可讓參賽者經由 Github、Gmail 或其他支援 [Oauth2](https://developers.google.com/identity/protocols/oauth2) 登入協定的帳號登入.
3. 加入資料庫, 儲存參賽者的得分資料、歷史紀錄並提供排行榜等功能.
4. 加入其他可多人線上參與競技或進行同步對話功能, 或納入其他專業相關的協同設計功能.

# w14 各組啟動並執行網際猜數字遊戲

說明影片:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/nVAZJh5PzEM?si=tyhjvi1bqb4rT_dr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# w14 有關可攜程式系統的批次檔案說明

以下影片說明如何針對不同的 Python 版本修改啟動批次檔案, 並利用 AI 取得各指令的詳細說明:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/83g9NFbtR_k?si=XhNGHvvilN3suuS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
