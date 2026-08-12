import re, json

# Read the current frontmatter to extract teaDetails
with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

# Extract teaDetails from frontmatter code block
start = content.find("const teaDetails = [")
end = content.find("];", start) + 2
tea_code = content[start:end]

# Create a safe environment to eval the tea data
tea_code_js = tea_code.replace("const teaDetails = ", "teaDetails = ")
# Use a JSON roundtrip approach - extract the data by parsing the JS literal
# Since it uses JS object syntax (unquoted keys), we need a different approach
# Let's just reconstruct minimal data for JS

print("Extracting tea data from frontmatter...")
print(f"Tea code length: {len(tea_code)}")
print("Generating scripts...")
