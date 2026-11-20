#!/usr/bin/env python3
"""Convert the common issues workbook (Numbers export) into src/data/commonIssues.json.

Usage: python3 scripts/convert-common-issues.py path/to/common-issues-audit.xlsx
Requires: pip install openpyxl
"""

import json
import re
import sys
from pathlib import Path

import openpyxl

OUT = Path(__file__).resolve().parent.parent / "src" / "data" / "commonIssues.json"

PRIORITIES = {"Blocker", "Critical", "Major", "Minor"}

CATEGORY_ALIASES = {
    "Buttons / Links": "Buttons/Links",
    "Image": "Images",
    "Video": "Videos",
}

# sheet -> {spreadsheet header: field}
SHEETS = {
    "Desktop": {
        "Issue #": "number",
        "Description": "description",
        "Expected Behaviors": "expectedBehavior",
        "Fixes": "fix",
        "Priority": "priority",
        "Working Example - Internal": "example:Internal",
        "Working Example - External": "example:External",
        "WCAG Guideline": "wcag",
        "Category": "category",
    },
    "iOS": {
        "Issue #": "number",
        "Description": "description",
        "Expected Behaviors": "expectedBehavior",
        "Fixes": "fix",
        "Priority": "priority",
        "Working Example - Internal": "example:Internal",
        "Working Example - External": "example:External",
        "WCAG Guideline": "wcag",
        "Category": "category",
        "Comments": "comments",
    },
    "Mobile": {
        "Issue #": "number",
        "Description": "description",
        "Expected Behaviors": "expectedBehavior",
        "iOS Fixes": "fix:iOS",
        "Android Fixes": "fix:Android",
        "Priority": "priority",
        "Working Example - Internal": "example:Internal",
        "Working Example - iOS": "example:iOS",
        "Working Example - Android": "example:Android",
        "WCAG Guideline": "wcag",
        "Category": "category",
        "Comments": "comments",
    },
}


def clean(value):
    if value is None:
        return ""
    text = str(value).replace("\r\n", "\n").strip()
    text = re.sub(r"[ \t]{2,}", " ", text)
    return text


def parse_wcag(value):
    return [c for c in re.findall(r"\d+\.\d+\.\d+", clean(value))]


def convert(path):
    wb = openpyxl.load_workbook(path)
    issues = []
    for sheet, mapping in SHEETS.items():
        ws = wb[sheet]
        headers = [clean(c.value) for c in ws[1]]
        for row in ws.iter_rows(min_row=2):
            cells = {headers[i]: row[i] for i in range(len(headers)) if headers[i]}
            if not clean(cells["Description"].value):
                continue
            issue = {
                "id": f"{sheet.lower()}-{int(cells['Issue #'].value)}",
                "platform": sheet,
                "number": int(cells["Issue #"].value),
                "description": "",
                "expectedBehavior": "",
                "fix": "",
                "priority": "",
                "wcag": [],
                "category": "",
                "comments": "",
                "examples": [],
            }
            fixes = []
            for header, field in mapping.items():
                cell = cells[header]
                value = clean(cell.value)
                if field == "number":
                    continue
                if field.startswith("example:"):
                    if value:
                        url = cell.hyperlink.target if cell.hyperlink else ""
                        issue["examples"].append({"kind": field.split(":")[1], "label": value, "url": url or ""})
                elif field.startswith("fix:"):
                    if value:
                        fixes.append(f"{field.split(':')[1]}: {value}")
                elif field == "wcag":
                    issue["wcag"] = parse_wcag(value)
                elif field == "priority":
                    issue["priority"] = value if value in PRIORITIES else ""
                elif field == "category":
                    issue["category"] = CATEGORY_ALIASES.get(value, value)
                else:
                    issue[field] = value
            if fixes:
                issue["fix"] = "\n\n".join(fixes)
            issues.append(issue)
    return issues


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    data = convert(sys.argv[1])
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {len(data)} issues to {OUT}")
