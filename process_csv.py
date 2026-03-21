import csv
import json

data = {}

with open('public/Round_1__PPT_Submission_1427116_Profiles_20260321_2028_NoFilters.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        team_name = row['Team Name'].strip()
        # Some team names might have small typos between the shortlists and the CSV, e.g., Bitstrom vs Bitstorm. But mostly they should match. Let's just create the dictionary based on CSV.
        if team_name not in data:
            data[team_name] = []
        data[team_name].append({
            'name': row["Candidate's Name"].strip(),
            'email': row["Candidate's Email"].strip(),
            'role': row["User Type"].strip(),
            'course': row["Course"].strip(),
            'organization': row["Candidate's Organisation"].strip()
        })

# Write to src/constants/teamDetails.js
with open('src/constants/teamDetails.js', 'w', encoding='utf-8') as f:
    f.write('export const teamDetails = ')
    json.dump(data, f, indent=2)
    f.write(';\n')
