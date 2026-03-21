import PyPDF2

try:
    with open('public/HACK ARENA ROUND 1 SHORTLISTED TEAMS.pdf', 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n'
        with open('extracted_teams.txt', 'w', encoding='utf-8') as outfile:
            outfile.write(text)
except Exception as e:
    print(f"Error: {e}")
