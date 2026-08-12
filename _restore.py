import re

# Fix tea-guide.js
with open(r"D:\workspaces\website\chinese-tea\public\tea-guide.js", "r", encoding="utf-8") as f:
    js = f.read()

# Fix all broken patterns in one pass
fixed = re.sub(r'  }\); }\n    }\);\n  }\);\n', '  });\n', js)
fixed = re.sub(r'  }\); }\n    }\);\n', '  });\n', fixed)

with open(r"D:\workspaces\website\chinese-tea\public\tea-guide.js", "w", encoding="utf-8") as f:
    f.write(fixed)

# Fix index.astro
with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

# Replace inline script block with external reference
m = re.search(r'<script>\n.*?\n</script>', content, re.DOTALL)
if m:
    new_tag = '<script src="/tea-guide.js" is:inline></script>'
    content = content[:m.start()] + new_tag + content[m.end():]

with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

print("index.astro:", len(content), "chars")
print("tea-guide.js:", len(fixed), "chars")