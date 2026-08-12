with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

sep = "\u00b7"

# ---- SIX TYPES CARDS ----
reps = [
    ('Unoxidized ' + sep + ' Fresh ' + sep + ' Vegetal',
     'Unoxidized ' + sep + ' Fresh ' + sep + ' Vegetal',
     'Leaves are <strong>pan-fired or oven-dried</strong> immediately after picking to halt oxidation, preserving their green color and fresh character. The most ancient tea processing method, dating back over 1,500 years. Best consumed within 6-12 months of harvest for peak freshness.',
     'Green'),
    ('Minimally Processed ' + sep + ' Delicate ' + sep + ' Sweet',
     'Minimally Processed ' + sep + ' Delicate ' + sep + ' Sweet',
     'The <strong>least processed</strong> of all teas: simply withered and sun-dried. No rolling, no firing. This gentleness preserves the leaf\u2019s natural sweetness and high antioxidant content. White tea <strong>ages gracefully</strong> \u2014 3+ year aged whites develop honey and dried fruit notes.',
     'White'),
    ('Lightly Oxidized ' + sep + ' Mellow ' + sep + ' Rare',
     'Lightly Oxidized ' + sep + ' Mellow ' + sep + ' Rare',
     'The <strong>rarest category</strong> \u2014 only a handful of producers still make it. After pan-firing like green tea, leaves undergo <strong>men huan</strong> (sealing yellow): a gentle, multi-hour sweat that removes grassy notes and creates a uniquely mellow, almost buttery character. A true connoisseur\u2019s find.',
     'Yellow'),
    ('Partially Oxidized ' + sep + ' Floral to Roasted',
     'Partially Oxidized ' + sep + ' Floral to Roasted',
     'The <strong>most diverse category</strong> \u2014 oxidation ranges from 10% (floral Tie Guan Yin) to 70% (roasted Da Hong Pao). Leaves are bruised, rolled, and sometimes roasted. Many oolongs are <strong>tightly rolled into balls</strong> that unfurl across 5-8+ infusions, each steep revealing new layers.',
     'Oolong'),
    ('Fully Oxidized ' + sep + ' Malty ' + sep + ' Robust',
     'Fully Oxidized ' + sep + ' Malty ' + sep + ' Robust',
     'Called <strong>hong cha</strong> (red tea) in Chinese \u2014 named for the reddish liquor, not the leaf. The leaves are fully oxidized before drying, creating deep, malty flavors. Chinese black teas are generally <strong>smoother and less astringent</strong> than Indian varieties and are excellent without milk.',
     'Black'),
    ('Post-Fermented ' + sep + ' Earthy ' + sep + ' Aged',
     'Post-Fermented ' + sep + ' Earthy ' + sep + ' Aged',
     'Unlike other teas, dark tea undergoes <strong>microbial fermentation</strong> after initial processing \u2014 similar to composting or aging cheese. Pu-erh is the most famous, but the category also includes Liu Bao and Fu Zhuan. Many dark teas <strong>improve with age</strong> like fine wine, developing complex earthy, woody, and medicinal notes over decades.',
     'Dark'),
]

for flavor_line, new_flavor, desc, label in reps:
    # Find the paragraph that contains this flavor text and has mb-3 class
    old_p = '<p class="text-sm text-zinc-500 mb-3">' + flavor_line + '</p>'
    new_p = '<p class="text-sm text-zinc-500 mb-1">' + new_flavor + '</p>\n        <p class="text-xs text-zinc-400 mb-3 leading-relaxed">' + desc + '</p>'
    if old_p in content:
        content = content.replace(old_p, new_p)
        print(label + ': REPLACED')
    else:
        print(label + ': NOT FOUND - searching...')
        # Try to find similar text
        idx = content.find(flavor_line[:20])
        if idx >= 0:
            print('  Found at ' + str(idx) + ': ' + repr(content[idx:idx+60]))

# ---- WHAT IS CHINESE TEA ----
old_what = 'Chinese tea refers to tea produced from the leaves of the <strong>Camellia sinensis</strong> plant using traditional Chinese processing methods. Unlike many Western teas, Chinese tea is categorized by <strong>processing method</strong> rather than region alone, resulting in six distinct types: green, white, yellow, oolong, black, and dark (post-fermented) tea. China is the birthplace of tea culture, with a history spanning over 4,000 years.'
if old_what in content:
    # Replace with richer version
    new_what_short = 'All true tea \u2014 green, white, oolong, black, and everything between \u2014 comes from one plant: <strong>Camellia sinensis</strong>. What makes Chinese tea unique isn\u2019t the plant, but <strong>how it\u2019s processed</strong>. The same leaf, picked on the same day from the same bush, can become any of the six types depending on how it\u2019s withered, rolled, oxidized, and fired.'
    content = content.replace(old_what, new_what_short)
    print('What: REPLACED')
else:
    print('What: NOT FOUND')

# ---- TEA CULTURE SUBSECTIONS ----
old_gongfu = 'A traditional brewing method using small clay pots and multiple short infusions. Focused on appreciating flavor evolution \u2014 less rigid than Japanese tea ceremony, practiced casually at home or formally.'
new_gongfu = 'The Chinese approach to tea at its most refined. Using a small clay pot (often Yixing) or gaiwan, a high leaf-to-water ratio, and multiple short infusions (10-60 seconds each), gongfu cha reveals how a tea\u2019s flavor evolves across 5-15+ steeps. Unlike the formal Japanese tea ceremony, gongfu cha is practiced casually at home \u2014 it\u2019s less about ritual and more about the tea itself. The phrase means \u201ctea made with skill.\u201d'
if old_gongfu in content:
    content = content.replace(old_gongfu, new_gongfu)
    print('Gongfu: REPLACED')
else:
    print('Gongfu: NOT FOUND')

old_hosp = 'Serving tea to guests is a fundamental Chinese custom. The phrase'
new_hosp = 'Serving tea to guests is a <strong>fundamental Chinese custom</strong> that predates recorded history. When you visit a Chinese home or office, tea appears before small talk begins \u2014 it\u2019s a gesture of respect, warmth, and connection. The phrase'
if old_hosp in content:
    content = content.replace(old_hosp, new_hosp)
    print('Hosp: REPLACED')
else:
    print('Hosp: NOT FOUND')

old_wed = 'Couples serve tea to their parents as a gesture of respect and gratitude \u2014 one of the most cherished Chinese wedding traditions.'
new_wed = 'The Chinese wedding tea ceremony is one of the <strong>most meaningful moments</strong> of the celebration. The bride and groom kneel before their parents and serve tea, formally transitioning from being children to partners. Parents often add auspicious ingredients \u2014 red dates (for early offspring), lotus seeds (for harmony), and longan (for sweetness). In return, parents offer red envelopes (hong bao) with gifts or money.'
if old_wed in content:
    content = content.replace(old_wed, new_wed)
    print('Wed: REPLACED')
else:
    print('Wed: NOT FOUND')

with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

print('DONE. Size: ' + str(len(content)) + ' chars')