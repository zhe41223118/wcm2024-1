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

以下影片說明如何在近端電腦執行猜數字遊戲伺服器程式:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/fjheqtLYATg?si=NWsWxWPZHOQIUdpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

以下影片說明如何配置一個 Flask + Socketio 建立一個非同步的網際內容管理程式:

<iframe width="1120" height="630" src="https://www.youtube.com/embed/bwcsnPzgLg8?si=-7_gDB_Y1mUyAK8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

以下為 Python 參考程式:

將原先沒有 tab 符號介入兩行資料的原始檔案, 利用 Python 轉為 csv 檔案格式:

處理方式: 逐列透過空白分割, 若隨後沒有資料加入 tab 符號, 若有資料則將空白換為 tab 符號, 然後列印出 (也可以直接存檔)

<pre class="brush: python">
import io

def process_file(file_path):
  """
  讀取檔案，處理後回傳處理後的文字。

  Args:
    file_path: 檔案路徑。

  Returns:
    處理後的文字。
  """

  with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

  processed_lines = [lines[0].strip()]  # 保留第一行標題

  for line in lines[1:]:
    parts = line.strip().split(" ", 1)  # 只分割一次，以保留後面的空白和中文字
    if len(parts) == 1:
      processed_lines.append(parts[0] + "\t")  # 若沒有後續資料，加tab
    else:
      processed_lines.append(parts[0] + "\t" + parts[1])  # 將空白換成tab

  return "\n".join(processed_lines)

# 測試
file_path = '1a_w14.txt'  # 檔案路徑
processed_text = process_file(file_path)
print(processed_text)
</pre>

以下程式則可讀取 w14 點名 csv 檔案, 並從期中自評表 csv 檔案中剃除已經退選者的資料:

處理方式: 利用 csv 模組讀取各列資料, 以 w14 留下的學員學號為基準, 接著讀取期中期望資料時, 只能下仍在 w14 名單中的學員資料

<pre class="brush: python">
import csv # 導入 csv 模組，用於處理 csv 檔案

def filter_and_save_csv(rollcall_file, midterm_file, output_file):
  """
  讀取兩個 csv 檔案，篩選學號後儲存。

  Args:
    rollcall_file: 點名 csv 檔案路徑。
    midterm_file: 期中成績 csv 檔案路徑。
    output_file: 輸出 csv 檔案路徑。
  """

  # 讀取點名檔案中的學號
  valid_student_ids = set() # 建立一個空的集合，用於儲存有效的學號
  with open(rollcall_file, 'r', encoding='utf-8') as f: # 開啟點名 csv 檔案，使用 utf-8 編碼讀取
    reader = csv.reader(f) # 建立 csv 讀取器
    next(reader) # 跳過標題列
    for row in reader: # 逐行讀取點名檔案
      student_id = row[0].strip() # 取得學號，並去除前後空白
      valid_student_ids.add(student_id) # 將學號加入到有效的學號集合中

  # 讀取期中成績檔案，篩選學號並儲存
  with open(midterm_file, 'r', encoding='utf-8') as f_in, open(output_file, 'w', encoding='utf-8', newline='') as f_out: 
    # 同時開啟期中成績 csv 檔案（讀取模式）和輸出 csv 檔案（寫入模式），使用 utf-8 編碼，並設定 newline='' 以避免空行
    reader = csv.reader(f_in) # 建立 csv 讀取器
    writer = csv.writer(f_out) # 建立 csv 寫入器
    writer.writerow(next(reader)) # 將期中成績 csv 檔案的第一行（標題列）寫入輸出檔案
    for row in reader: # 逐行讀取期中成績檔案
      student_id = row[0].strip() # 取得學號，並去除前後空白
      if student_id in valid_student_ids: # 檢查學號是否存在於有效的學號集合中
        writer.writerow(row) # 若存在，則將該學生的完整資料寫入輸出檔案

# 設定檔案路徑
rollcall_file = '1a_w14_rollcall.csv' # 點名 csv 檔案路徑
midterm_file = '1a wcm2024 midterm - Sheet1.csv' # 期中成績 csv 檔案路徑
output_file = '1a_wcm2024_midterm_wishful.csv' # 輸出 csv 檔案路徑

# 執行篩選和儲存
filter_and_save_csv(rollcall_file, midterm_file, output_file) # 呼叫函式，執行篩選和儲存操作
</pre>