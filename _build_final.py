import json, re

# Read the current file
with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()
print(f"Read file: {len(content)} chars")

# Verify tea data is there
has_tea = "const teaDetails = [" in content
print(f"Has tea data: {has_tea}")

# Find section boundaries
old_cli_start = content.find("<!-- ========== CLIENT-SIDE SCRIPTS ========== -->")
old_cli_end = content.rfind("</BaseLayout>")
print(f"Client scripts section: chars {old_cli_start}-{old_cli_end}")

# Read the new script content from an external file
with open(r"D:\workspaces\website\chinese-tea\_new_scripts.txt", "r", encoding="utf-8") as f:
    new_scripts = f.read()

# Replace
content = content[:old_cli_start] + new_scripts + content[old_cli_end:]

# Write back
with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Final: {len(content)} chars, {content.count(chr(10))+1} lines")
print("DONE")
