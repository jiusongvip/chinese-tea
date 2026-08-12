with open(r"D:\workspaces\website\chinese-tea\public\tea-guide.js", "r", encoding="utf-8") as f:
    js_content = f.read()

with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

old_tag = '<script src="/tea-guide.js" is:inline></script>'
new_tag = '<script>\n' + js_content + '\n</script>'
content = content.replace(old_tag, new_tag)

with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

print("DONE: " + str(len(content)) + " chars")