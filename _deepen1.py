import re

# ====================================================================
# 1. READ FILES
# ====================================================================
with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

with open(r"D:\workspaces\website\chinese-tea\public\tea-guide.js", "r", encoding="utf-8") as f:
    js = f.read()

# ====================================================================
# 2. FAQ EXPANSION: Add 5 new questions
# ====================================================================
new_faqs = """,
  { q: "How should I store Chinese tea?", a: "Store tea in an <strong>airtight, opaque container</strong> away from light, heat, moisture, and strong odors. Avoid the fridge for most teas (condensation ruins them). Green and lightly oxidized teas are best consumed within 6-12 months. Dark teas (Pu-erh) and aged whites improve with time if stored in a breathable environment (not sealed plastic). A dedicated tea cabinet or dark cupboard at room temperature is ideal." },
  { q: "Can I reuse Chinese tea leaves?", a: "Absolutely \u2014 this is one of the best things about loose leaf Chinese tea. Most quality teas can be steeped <strong>3-8+ times</strong>, with each infusion revealing different flavors. Gongfu-style brewing is specifically designed for multiple infusions. Western-style brewing typically yields 2-3 good steeps. The key is to increase steeping time slightly with each round. Green teas: 3-4 infusions. Oolongs: 5-8 infusions. Pu-erh: 8-15+ infusions." },
  { q: "What does 'hui gan' (\u56de\u7518) mean?", a: "<strong>Hui gan</strong> (\u56de\u7518, 'returning sweetness') is one of the most prized qualities in Chinese tea. It refers to the <strong>sweet aftertaste that emerges in your throat</strong> after swallowing \u2014 distinct from the initial sweetness on your tongue. A tea with good hui gan starts slightly bitter or astringent, then transforms into a lingering, cooling sweetness that can last for minutes. It's a key quality indicator in oolongs, pu-erhs, and premium green teas." },
  { q: "Is loose leaf Chinese tea better than tea bags?", a: "<strong>Almost always, yes.</strong> Tea bags typically contain broken leaf fragments (fannings or dust) that release tannins quickly, resulting in a bitter, one-dimensional brew. Loose leaf tea uses intact leaves that unfurl gradually, releasing complex flavors across multiple infusions. The difference is comparable to instant coffee vs. freshly ground beans. Even a budget loose leaf Chinese tea will outperform premium tea bags. That said, the best tea is the one you\u2019ll actually brew \u2014 if convenience matters, look for whole-leaf pyramid sachets as a middle ground." },
  { q: "How much caffeine is in Chinese tea compared to coffee?", a: "An 8oz cup of coffee contains ~95mg of caffeine. Chinese tea varies widely by type and brewing method: <strong>Green tea:</strong> 25-35mg (light, refreshing energy), <strong>White tea:</strong> 15-25mg (gentlest lift), <strong>Oolong:</strong> 30-45mg, <strong>Black tea:</strong> 40-60mg, <strong>Pu-erh:</strong> 40-70mg. Crucially, tea also contains <strong>L-theanine</strong>, an amino acid that promotes calm focus and counteracts caffeine jitters. This is why tea drinkers describe the energy as 'alert calm' rather than the spike-and-crash of coffee." }"""

# Insert before the closing ]; of faqData
faq_end = content.find("];", content.find("const faqData = ["))
content = content[:faq_end] + new_faqs + "\n" + content[faq_end:]

# ====================================================================
# 3. BREWING GUIDE: Add Yellow and Dark tea tabs (HTML buttons)
# ====================================================================
old_tabs_end = '<button class="px-5 py-2 rounded-full text-sm font-medium border border-zinc-200 text-zinc-600 hover:border-leaf-300 hover:text-leaf-700 transition-colors" data-brew="puerh">Pu-erh</button>'
new_tabs = old_tabs_end + '\n      <button class="px-5 py-2 rounded-full text-sm font-medium border border-zinc-200 text-zinc-600 hover:border-leaf-300 hover:text-leaf-700 transition-colors" data-brew="yellow">Yellow Tea</button>\n      <button class="px-5 py-2 rounded-full text-sm font-medium border border-zinc-200 text-zinc-600 hover:border-leaf-300 hover:text-leaf-700 transition-colors" data-brew="dark">Dark Tea</button>'
content = content.replace(old_tabs_end, new_tabs)

# ====================================================================
# 4. TEAWARE ESSENTIALS: Deepen each of the 4 cards
# ====================================================================
# Card 1: Gaiwan
old_gaiwan = """        <h3 class="font-semibold text-zinc-900 mb-1">Gaiwan</h3>
        <p class="text-xs text-zinc-500">The universal Chinese brewing vessel \u2014 three pieces: bowl, lid, saucer.</p>"""
new_gaiwan = """        <h3 class="font-semibold text-zinc-900 mb-1">Gaiwan</h3>
        <p class="text-xs text-zinc-500 leading-relaxed">The universal Chinese brewing vessel: bowl, lid, and saucer. Use for <strong>any tea type</strong> \u2014 the porcelain is neutral and won\u2019t absorb flavors. The lid doubles as a strainer. Beginner-friendly and easy to clean. <span class="text-zinc-400 mt-1 block">Price: $8-20 for a basic porcelain gaiwan (100-150ml).</span></p>"""
content = content.replace(old_gaiwan, new_gaiwan)

# Card 2: Yixing Teapot
old_yixing = """        <h3 class="font-semibold text-zinc-900 mb-1">Yixing Teapot</h3>
        <p class="text-xs text-zinc-500">Unglazed clay pot from Yixing \u2014 seasoned over time for richer brew.</p>"""
new_yixing = """        <h3 class="font-semibold text-zinc-900 mb-1">Yixing Teapot</h3>
        <p class="text-xs text-zinc-500 leading-relaxed">Handcrafted from <strong>zisha (purple clay)</strong> found only in Yixing, Jiangsu. The unglazed, porous clay <strong>absorbs tea oils over time</strong>, enhancing flavor with each use. <strong>Dedicate one pot to one tea type</strong> (never mix green and pu-erh in the same Yixing pot). Not for beginners \u2014 start with a gaiwan first. <span class="text-zinc-400 mt-1 block">Price: $30-200+ depending on clay quality and craftsmanship.</span></p>"""
content = content.replace(old_yixing, new_yixing)

# Card 3: Fairness Pitcher
old_pitcher = """        <h3 class="font-semibold text-zinc-900 mb-1">Fairness Pitcher</h3>
        <p class="text-xs text-zinc-500">Ensures even strength across cups \u2014 essential for gongfu brewing.</p>"""
new_pitcher = """        <h3 class="font-semibold text-zinc-900 mb-1">Fairness Pitcher (Gong Dao Bei)</h3>
        <p class="text-xs text-zinc-500 leading-relaxed">The <strong>unsung hero of gongfu brewing</strong>. After steeping, pour tea from the gaiwan or teapot into the pitcher first \u2014 this <strong>equalizes the strength</strong> across all cups. Without it, the first pour is weak and the last pour is over-steeped. Glass pitchers let you admire the tea\u2019s color. <span class="text-zinc-400 mt-1 block">Price: $10-30 for borosilicate glass.</span></p>"""
content = content.replace(old_pitcher, new_pitcher)

# Card 4: Tea Cups
old_cups = """        <h3 class="font-semibold text-zinc-900 mb-1">Tea Cups</h3>
        <p class="text-xs text-zinc-500">Small aroma cups + tasting cups \u2014 smell first, sip second.</p>"""
new_cups = """        <h3 class="font-semibold text-zinc-900 mb-1">Aroma + Tasting Cups</h3>
        <p class="text-xs text-zinc-500 leading-relaxed">Gongfu brewing uses <strong>two cups per person</strong>: a tall, narrow <strong>aroma cup</strong> (wen xiang bei) to capture fragrance, and a wide <strong>tasting cup</strong> (pin ming bei) for sipping. Pour from aroma cup into tasting cup, then <strong>inhale the empty aroma cup</strong> \u2014 the fragrance lingers. For casual brewing, any small (30-60ml) porcelain cup works. <span class="text-zinc-400 mt-1 block">Price: $5-25 for a set of 4-6 cups.</span></p>"""
content = content.replace(old_cups, new_cups)

# ====================================================================
# 5. TEA-GUIDE.JS: Add Yellow and Dark tea to brewData
# ====================================================================
old_puerh_entry = """    puerh: { title: \"Brewing Pu-erh Tea\", temp: \"200-212F (95-100C)\", time: \"20-40 seconds (gongfu)\", vessel: \"Yixing clay pot or gaiwan\", ratio: \"5g per 100ml\", tips: \"Always rinse pu-erh twice before drinking.\" }"""

new_puerh_entry = old_puerh_entry + """,
    yellow: { title: \"Brewing Yellow Tea\", temp: \"175-185F (80-85C)\", time: \"2-3 minutes\", vessel: \"Glass or porcelain gaiwan\", ratio: \"2-3g per 200ml\", tips: \"Yellow tea is the rarest category. It undergoes a unique 'men huan' (sealing yellow) step where leaves are gently heated and wrapped. Brew similarly to green tea but with slightly warmer water. Treat it as a luxury experience.\" },
    dark: { title: \"Brewing Dark Tea (Hei Cha)\", temp: \"200-212F (95-100C)\", time: \"30-60 seconds (gongfu) or 3-5 min (western)\", vessel: \"Yixing clay pot or gaiwan\", ratio: \"5g per 100ml (gongfu)\", tips: \"Beyond Pu-erh, dark teas include Liu Bao, Fu Zhuan, and Tian Jian. Most benefit from a quick rinse. Some dark teas have 'jin hua' (golden flowers) \u2014 a beneficial fungus that adds complexity. Boiling water brings out the best.\" }"""

js = js.replace(old_puerh_entry, new_puerh_entry)

# ====================================================================
# 6. WRITE BACK
# ====================================================================
with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

with open(r"D:\workspaces\website\chinese-tea\public\tea-guide.js", "w", encoding="utf-8") as f:
    f.write(js)

print(f"DONE. index.astro: {len(content)} chars, tea-guide.js: {len(js)} chars")