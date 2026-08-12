import os

base = r"D:\workspaces\website\chinese-tea"

# Read all parts
parts = {}
for fname in ["_r1.txt","_r2.txt","_r3.txt","_r4.txt","_r5.txt","_r6.txt"]:
    with open(os.path.join(base, fname), "r", encoding="utf-8") as f:
        parts[fname] = f.read()

# Read index.astro
with open(os.path.join(base, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Extract teaDetails block from frontmatter
start = content.find("const teaDetails = [")
end = content.find("];", start) + 2
tea_block = content[start:end]

# Build the complete scripts section
scripts = '<!-- ========== CLIENT-SIDE SCRIPTS ========== -->\n'
scripts += '<script>\n'
scripts += '  // Tea data from server frontmatter (visible in built HTML for SEO)\n'
scripts += '  ' + tea_block + '\n\n'
scripts += parts["_r1.txt"] + '\n\n'
scripts += parts["_r2.txt"] + '\n\n'
scripts += parts["_r3.txt"] + '\n\n'
scripts += '  document.addEventListener("DOMContentLoaded", () => {\n'
scripts += '    renderTable();\n\n'
scripts += parts["_r4.txt"] + '\n'
scripts += parts["_r5.txt"] + '\n'
scripts += '  });\n'
scripts += '</script>\n\n'
scripts += '<style>\n'
scripts += parts["_r6.txt"] + '\n'
scripts += '</style>\n\n'

# Replace CLIENT-SIDE SCRIPTS section
old_start = content.find('<!-- ========== CLIENT-SIDE SCRIPTS ========== -->')
old_end = content.rfind('</BaseLayout>')
content = content[:old_start] + scripts + content[old_end:]

# Update description text
content = content.replace(
    'Iconic teas every tea lover should know. Click column headers to sort, or use the filter to find teas by type.',
    'Click any tea to see its full profile -- flavor notes, brewing guide, buying tips, and history. Filter by type or click column headers to sort.'
)

# Write back
with open(os.path.join(base, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print(f"DONE: {len(content)} chars, {content.count(chr(10))} lines")