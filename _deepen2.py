with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

# ====================================================================
# 1. WHAT IS CHINESE TEA: Deepen
# ====================================================================
old_what = """    <p class="text-zinc-600 text-lg leading-relaxed">
      Chinese tea refers to tea produced from the leaves of the <strong>Camellia sinensis</strong> plant using traditional Chinese processing methods. Unlike many Western teas, Chinese tea is categorized by <strong>processing method</strong> rather than region alone, resulting in six distinct types: green, white, yellow, oolong, black, and dark (post-fermented) tea. China is the birthplace of tea culture, with a history spanning over 4,000 years.
    </p>"""

new_what = """    <div class="prose prose-zinc max-w-none">
      <p class="text-zinc-600 text-lg leading-relaxed mb-4">
        All true tea \u2014 green, white, oolong, black, and everything between \u2014 comes from one plant: <strong>Camellia sinensis</strong>. What makes Chinese tea unique isn\u2019t the plant, but <strong>how it\u2019s processed</strong>. The same leaf, picked on the same day from the same bush, can become any of the six types depending on how it\u2019s withered, rolled, oxidized, and fired.
      </p>
      <p class="text-zinc-600 leading-relaxed mb-4">
        China categorizes tea by <strong>processing method and oxidation level</strong>, not by region or flavor. This is fundamentally different from how the West thinks about tea (Earl Grey, English Breakfast, etc.) and even different from Japan (which focuses almost entirely on steamed green teas). The result is a spectrum of flavor unimaginable from a single plant \u2014 from the delicate sweetness of white tea to the deep earthiness of aged pu-erh.
      </p>
      <p class="text-zinc-600 leading-relaxed mb-4">
        Tea originated in China around <strong>2737 BCE</strong>, according to legend, when Emperor Shen Nong discovered it when leaves blew into his boiling water. By the Tang Dynasty (618-907 CE), tea had evolved from medicine to cultural cornerstone. Lu Yu\u2019s <em>Classic of Tea</em> (760 CE), the world\u2019s first book on tea, codified everything from cultivation to brewing \u2014 and is still referenced today.
      </p>
      <p class="text-zinc-600 leading-relaxed">
        Today, China produces <strong>over 40% of the world\u2019s tea</strong>, with distinct tea cultures in every province. The six categories below are your map to this world \u2014 each one a different expression of the same remarkable leaf.
      </p>
    </div>"""

content = content.replace(old_what, new_what)

# ====================================================================
# 2. SIX TYPES CARDS: Add processing method context to each card
# Each card has: <h3>Name 中文</h3>\n        <p class="text-sm text-zinc-500 mb-3">Flavor</p>
# I'll insert processing info BETWEEN the flavor line and the example teas

# Green Tea Card
old_green_flavor = '<p class="text-sm text-zinc-500 mb-3">Unoxidized \u00b7 Fresh \u00b7 Vegetal</p>'
new_green_flavor = '<p class="text-sm text-zinc-500 mb-1">Unoxidized \u00b7 Fresh \u00b7 Vegetal</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed">Leaves are <strong>pan-fired or oven-dried</strong> immediately after picking to halt oxidation, preserving their green color and fresh character. The most ancient tea processing method, dating back over 1,500 years. Best consumed within 6-12 months of harvest for peak freshness.</p>'
content = content.replace(old_green_flavor, new_green_flavor)

# White Tea Card
old_white_flavor = '<p class="text-sm text-zinc-500 mb-3">Minimally Processed \u00b7 Delicate \u00b7 Sweet</p>'
new_white_flavor = '<p class="text-sm text-zinc-500 mb-1">Minimally Processed \u00b7 Delicate \u00b7 Sweet</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed">The <strong>least processed</strong> of all teas: simply withered and sun-dried. No rolling, no firing. This gentleness preserves the leaf\u2019s natural sweetness and high antioxidant content. White tea <strong>ages gracefully</strong> \u2014 3+ year aged whites develop honey and dried fruit notes.</p>'
content = content.replace(old_white_flavor, new_white_flavor)

# Yellow Tea Card
old_yellow_flavor = '<p class="text-sm text-zinc-500 mb-3">Lightly Oxidized \u00b7 Mellow \u00b7 Rare</p>'
new_yellow_flavor = '<p class="text-sm text-zinc-500 mb-1">Lightly Oxidized \u00b7 Mellow \u00b7 Rare</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed">The <strong>rarest category</strong> \u2014 only a handful of producers still make it. After pan-firing like green tea, leaves undergo <strong>\u201cmen huan\u201d</strong> (sealing yellow): a gentle, multi-hour sweat that removes grassy notes and creates a uniquely mellow, almost buttery character. A true connoisseur\u2019s find.</p>'
content = content.replace(old_yellow_flavor, new_yellow_flavor)

# Oolong Tea Card
old_oolong_flavor = '<p class="text-sm text-zinc-500 mb-3">Partially Oxidized \u00b7 Floral to Roasted</p>'
new_oolong_flavor = '<p class="text-sm text-zinc-500 mb-1">Partially Oxidized \u00b7 Floral to Roasted</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed">The <strong>most diverse category</strong> \u2014 oxidation ranges from 10% (floral Tie Guan Yin) to 70% (roasted Da Hong Pao). Leaves are bruised, rolled, and sometimes roasted. Many oolongs are <strong>tightly rolled into balls</strong> that unfurl across 5-8+ infusions, each steep revealing new layers.</p>'
content = content.replace(old_oolong_flavor, new_oolong_flavor)

# Black Tea Card
old_black_flavor = '<p class="text-sm text-zinc-500 mb-3">Fully Oxidized \u00b7 Malty \u00b7 Robust</p>'
new_black_flavor = '<p class="text-sm text-zinc-500 mb-1">Fully Oxidized \u00b7 Malty \u00b7 Robust</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed">Called <strong>\u201chong cha\u201d (red tea)</strong> in Chinese \u2014 named for the reddish liquor, not the leaf. The leaves are fully oxidized before drying, creating deep, malty flavors. Chinese black teas are generally <strong>smoother and less astringent</strong> than Indian varieties and are excellent without milk.</p>'
content = content.replace(old_black_flavor, new_black_flavor)

# Dark Tea Card
old_dark_flavor = '<p class="text-sm text-zinc-500 mb-3">Post-Fermented \u00b7 Earthy \u00b7 Aged</p>'
new_dark_flavor = '<p class="text-sm text-zinc-500 mb-1">Post-Fermented \u00b7 Earthy \u00b7 Aged</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed">Unlike other teas, dark tea undergoes <strong>microbial fermentation</strong> after initial processing \u2014 similar to composting or aging cheese. Pu-erh is the most famous, but the category also includes Liu Bao and Fu Zhuan. Many dark teas <strong>improve with age</strong> like fine wine, developing complex earthy, woody, and medicinal notes over decades.</p>'
content = content.replace(old_dark_flavor, new_dark_flavor)

# ====================================================================
# 3. TEA BY REGION: Deepen each card with terroir and tradition
# ====================================================================

# Zhejiang
old_zj = '<p class="text-sm text-zinc-500 mb-3">Home of China\u2019s most famous green tea, blessed with misty mountains and mild climate.</p>'
new_zj = '<p class="text-sm text-zinc-500 mb-1">Home of China\u2019s most famous green tea, blessed with misty mountains and mild climate.</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed"><strong>Terroir:</strong> West Lake\u2019s unique microclimate \u2014 morning mist, afternoon sun, mineral-rich spring water \u2014 creates Longjing\u2019s signature chestnut aroma. Tea gardens dot the hills around Hangzhou, with the prestigious Shifeng peak producing the most sought-after leaves. <strong>Tradition:</strong> Zhejiang is the heart of Chinese green tea culture; locals drink Longjing year-round as a daily ritual, not a luxury.</p>'
content = content.replace(old_zj, new_zj)

# Fujian
old_fj = '<p class="text-sm text-zinc-500 mb-3">China\u2019s tea capital \u2014 produces more tea varieties than any other province.</p>'
new_fj = '<p class="text-sm text-zinc-500 mb-1">China\u2019s tea capital \u2014 produces more tea varieties than any other province.</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed"><strong>Terroir:</strong> Fujian\u2019s diverse geography \u2014 coastal plains (Fuding for white tea), granite peaks (Wuyi for rock oolongs), and high mountains (Anxi for Tie Guan Yin) \u2014 produces white, oolong, and black teas all within one province. <strong>Tradition:</strong> The gongfu tea ceremony originated here. Fujian is also home to the legendary Da Hong Pao mother bushes and centuries-old tea cultivars.</p>'
content = content.replace(old_fj, new_fj)

# Yunnan
old_yn = '<p class="text-sm text-zinc-500 mb-3">Birthplace of tea itself \u2014 ancient tea forests and the home of Pu-erh.</p>'
new_yn = '<p class="text-sm text-zinc-500 mb-1">Birthplace of tea itself \u2014 ancient tea forests and the home of Pu-erh.</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed"><strong>Terroir:</strong> Yunnan\u2019s ancient tea forests house trees <strong>500-1,000+ years old</strong>, growing wild at 1,200-2,000m altitude. The indigenous large-leaf cultivar (da ye zhong) produces teas of extraordinary depth. <strong>Tradition:</strong> The Tea Horse Road (\u8336\u9a6c\u53e4\u9053) carried pressed Pu-erh cakes from Yunnan to Tibet for over a thousand years. Yunnan is the only place where tea still grows wild.</p>'
content = content.replace(old_yn, new_yn)

# Anhui
old_ah = '<p class="text-sm text-zinc-500 mb-3">Known for its iconic Yellow Mountain teas and the world-famous Keemun black tea.</p>'
new_ah = '<p class="text-sm text-zinc-500 mb-1">Known for its iconic Yellow Mountain teas and the world-famous Keemun black tea.</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed"><strong>Terroir:</strong> Huangshan (Yellow Mountain), a UNESCO site, provides high-altitude gardens (800m+) shrouded in clouds \u2014 ideal for slow-growing, flavor-dense leaves. Qimen County\u2019s unique soil gives Keemun its wine-like notes. <strong>Tradition:</strong> Anhui produces three of China\u2019s Top Ten Teas. The province\u2019s tea culture is tied to literati and poetry \u2014 Huangshan\u2019s misty peaks inspired centuries of tea poetry.</p>'
content = content.replace(old_ah, new_ah)

# Jiangsu
old_js = '<p class="text-sm text-zinc-500 mb-3">Produces Biluochun, one of China\u2019s top ten teas, known for delicate fruity notes.</p>'
new_js = '<p class="text-sm text-zinc-500 mb-1">Produces Biluochun, one of China\u2019s top ten teas, known for delicate fruity notes.</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed"><strong>Terroir:</strong> Dongting Mountain rises from the shores of Lake Tai, where tea bushes grow alongside fruit trees \u2014 peach, plum, and apricot blossoms are said to infuse Biluochun\u2019s leaves with natural fruit fragrance. <strong>Tradition:</strong> Suzhou\u2019s tea culture is intertwined with its classical gardens and scholar traditions. Drinking Biluochun while gazing at Lake Tai is a quintessential Jiangnan experience.</p>'
content = content.replace(old_js, new_js)

# Guangdong
old_gd = '<p class="text-sm text-zinc-500 mb-3">Famous for Phoenix Dancong oolongs with natural fruit and floral aromas.</p>'
new_gd = '<p class="text-sm text-zinc-500 mb-1">Famous for Phoenix Dancong oolongs with natural fruit and floral aromas.</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed"><strong>Terroir:</strong> Phoenix Mountain\u2019s volcanic soil and high altitudes (800-1,500m) produce Dan Cong teas that naturally mimic fruit and flower fragrances \u2014 no added flavoring. Each tea bush develops its own unique aroma profile. <strong>Tradition:</strong> The Chaozhou gongfu tea ceremony is the most refined in China, using tiny pots (under 100ml) and flash infusions. In Chaozhou, tea is not a hobby \u2014 it\u2019s a way of life, consumed from morning to night.</p>'
content = content.replace(old_gd, new_gd)

# ====================================================================
# 4. TEA CULTURE: Expand sub-sections
# ====================================================================

# Gongfu Ceremony
old_gongfu = """              <h3 class="font-semibold text-white mb-1">Gongfu Tea Ceremony</h3>
              <p class="text-sm text-zinc-400">A traditional brewing method using small clay pots and multiple short infusions. Focused on appreciating flavor evolution \u2014 less rigid than Japanese tea ceremony, practiced casually at home or formally.</p>"""
new_gongfu = """              <h3 class="font-semibold text-white mb-1">Gongfu Tea Ceremony</h3>
              <p class="text-sm text-zinc-400">The Chinese approach to tea at its most refined. Using a small clay pot (often Yixing) or gaiwan, a high leaf-to-water ratio, and multiple short infusions (10-60 seconds each), gongfu cha reveals how a tea\u2019s flavor evolves across 5-15+ steeps. Unlike the formal Japanese tea ceremony, gongfu cha is practiced casually at home \u2014 it\u2019s less about ritual and <strong>more about the tea itself</strong>. The phrase means \u201ctea made with skill,\u201d and the focus is on extraction, temperature control, and appreciating the journey from first steep to last.</p>"""
content = content.replace(old_gongfu, new_gongfu)

# Tea as Hospitality
old_hosp = """              <h3 class="font-semibold text-white mb-1">Tea as Hospitality</h3>
              <p class="text-sm text-zinc-400">Serving tea to guests is a fundamental Chinese custom. The phrase \u201c\u8bf7\u559d\u8336\u201d (please drink tea) is one of the most common expressions of welcome.</p>"""
new_hosp = """              <h3 class="font-semibold text-white mb-1">Tea as Hospitality</h3>
              <p class="text-sm text-zinc-400">Serving tea to guests is a <strong>fundamental Chinese custom</strong> that predates recorded history. When you visit a Chinese home or office, tea appears before small talk begins \u2014 it\u2019s a gesture of respect, warmth, and connection. The phrase \u201c\u8bf7\u559d\u8336\u201d (<em>please drink tea</em>) is one of the most common expressions of welcome. In formal settings, the host pours tea for guests in order of seniority, and guests tap two fingers on the table as a silent \u201cthank you\u201d \u2014 a tradition said to originate with an emperor traveling incognito.</p>"""
content = content.replace(old_hosp, new_hosp)

# Wedding Tea
old_wed = """              <h3 class="font-semibold text-white mb-1">Wedding Tea Ceremony</h3>
              <p class="text-sm text-zinc-400">Couples serve tea to their parents as a gesture of respect and gratitude \u2014 one of the most cherished Chinese wedding traditions.</p>"""
new_wed = """              <h3 class="font-semibold text-white mb-1">Wedding Tea Ceremony</h3>
              <p class="text-sm text-zinc-400">The Chinese wedding tea ceremony is one of the <strong>most meaningful moments</strong> of the celebration. The bride and groom kneel before their parents and serve tea, formally transitioning from being \u201cchildren\u201d to \u201cpartners.\u201d Parents often add auspicious ingredients \u2014 red dates (for early offspring), lotus seeds (for harmony), and longan (for sweetness). In return, parents offer red envelopes (hong bao) with gifts or money. This tradition appears across Chinese communities worldwide, from Beijing to San Francisco.</p>"""
content = content.replace(old_wed, new_wed)

with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

print(f"DONE. index.astro: {len(content)} chars")