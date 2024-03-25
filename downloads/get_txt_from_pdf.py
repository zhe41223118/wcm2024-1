import fitz # install using: pip install PyMuPDF

with fitz.open("progit.pdf") as doc:
    text = ""
    for page in doc:
        text += page.get_text()

print(text)