import re

with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

count = 0

# SIX TYPES: Use regex to match any separator
types_data = [
    (r'Unoxidized.{1,10}Fresh.{1,10}Vegetal',
     'Unoxidized \u00b7 Fresh \u00b7 Vegetal',
     'Leaves are <strong>pan-fired or oven-dried</strong> immediately after picking to halt oxidation, preserving their green color and fresh character. The most ancient tea processing method, dating back over 1,500 years. Best consumed within 6-12 months of harvest for peak freshness.',
     'Green'),
    (r'Minimally Processed.{1,10}Delicate.{1,10}Sweet',
     'Minimally Processed \u00b7 Delicate \u00b7 Sweet',
     'The <strong>least processed</strong> of all teas: simply withered and sun-dried. No rolling, no firing. This gentleness preserves the leaf\u2019s natural sweetness and high antioxidant content. White tea <strong>ages gracefully</strong> \u2014 3+ year aged whites develop honey and dried fruit notes.',
     'White'),
    (r'Lightly Oxidized.{1,10}Mellow.{1,10}Rare',
     'Lightly Oxidized \u00b7 Mellow \u00b7 Rare',
     'The <strong>rarest category</strong> \u2014 only a handful of producers still make it. After pan-firing like green tea, leaves undergo <strong>men huan</strong> (sealing yellow): a gentle, multi-hour sweat that removes grassy notes and creates a uniquely mellow, almost buttery character. A true connoisseur\u2019s find.',
     'Yellow'),
    (r'Partially Oxidized.{1,10}Floral.{1,10}Roasted',
     'Partially Oxidized \u00b7 Floral to Roasted',
     'The <strong>most diverse category</strong> \u2014 oxidation ranges from 10% (floral Tie Guan Yin) to 70% (roasted Da Hong Pao). Leaves are bruised, rolled, and sometimes roasted. Many oolongs are <strong>tightly rolled into balls</strong> that unfurl across 5-8+ infusions, each steep revealing new layers.',
     'Oolong'),
    (r'Fully Oxidized.{1,10}Malty.{1,10}Robust',
     'Fully Oxidized \u00b7 Malty \u00b7 Robust',
     'Called <strong>hong cha</strong> (red tea) in Chinese \u2014 named for the reddish liquor, not the leaf. The leaves are fully oxidized before drying, creating deep, malty flavors. Chinese black teas are generally <strong>smoother and less astringent</strong> than Indian varieties and are excellent without milk.',
     'Black'),
    (r'Post-Fermented.{1,10}Earthy.{1,10}Aged',
     'Post-Fermented \u00b7 Earthy \u00b7 Aged',
     'Unlike other teas, dark tea undergoes <strong>microbial fermentation</strong> after initial processing \u2014 similar to composting or aging cheese. Pu-erh is the most famous, but the category also includes Liu Bao and Fu Zhuan. Many dark teas <strong>improve with age</strong> like fine wine, developing complex earthy, woody, and medicinal notes over decades.',
     'Dark'),
]

for pattern, new_label, desc, label in types_data:
    m = re.search(r'<p class="text-sm text-zinc-500 mb-3">(' + pattern + r')</p>', content)
    if m:
        new_text = '<p class="text-sm text-zinc-500 mb-1">' + new_label + '</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed">' + desc + '</p>'
        content = content.replace(m.group(0), new_text)
        count += 1
        print(label + ': REPLACED')
    else:
        print(label + ': NOT FOUND')

# WHAT IS CHINESE TEA: replace by finding distinctive phrase
m = re.search(r'Chinese tea refers to tea produced from the leaves of the <strong>Camellia sinensis</strong> plant.*?4,000 years\.', content, re.DOTALL)
if m:
    replacement = 'All true tea \u2014 green, white, oolong, black, and everything between \u2014 comes from one plant: <strong>Camellia sinensis</strong>. What makes Chinese tea unique isn\u2019t the plant, but <strong>how it\u2019s processed</strong>. The same leaf, picked on the same day from the same bush, can become any of the six types depending on how it\u2019s withered, rolled, oxidized, and fired.'
    content = content.replace(m.group(0), replacement)
    count += 1
    print('What: REPLACED')
else:
    print('What: NOT FOUND')

# GONGFU
m = re.search(r'A traditional brewing method using small clay pots and multiple short infusions\..*?formally\.', content, re.DOTALL)
if m:
    new_gongfu = 'The Chinese approach to tea at its most refined. Using a small clay pot (often Yixing) or gaiwan, a high leaf-to-water ratio, and multiple short infusions (10-60 seconds each), gongfu cha reveals how a tea\u2019s flavor evolves across 5-15+ steeps. Unlike the formal Japanese tea ceremony, gongfu cha is practiced casually at home \u2014 it\u2019s less about ritual and more about the tea itself. The phrase means \u201ctea made with skill.\u201d'
    content = content.replace(m.group(0), new_gongfu)
    count += 1
    print('Gongfu: REPLACED')
else:
    print('Gongfu: NOT FOUND')

# WEDDING
m = re.search(r'Couples serve tea to their parents as a gesture of respect and gratitude \u2014 one of the most cherished Chinese wedding traditions\.', content)
if m:
    new_wed = 'The Chinese wedding tea ceremony is one of the <strong>most meaningful moments</strong> of the celebration. The bride and groom kneel before their parents and serve tea, formally transitioning from being children to partners. Parents often add auspicious ingredients \u2014 red dates (for early offspring), lotus seeds (for harmony), and longan (for sweetness). In return, parents offer red envelopes (hong bao) with gifts or money.'
    content = content.replace(m.group(0), new_wed)
    count += 1
    print('Wed: REPLACED')
else:
    print('Wed: NOT FOUND')

with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

print('DONE. ' + str(count) + ' replacements. Size: ' + str(len(content)) + ' chars')