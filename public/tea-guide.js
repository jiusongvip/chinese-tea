// Tea data from server frontmatter (visible in built HTML for SEO)
  const teaDetails = [
  { id: "longjing", name: "Longjing (Dragon Well)", nameChinese: "龙井", type: "Green", origin: "Xihu, Hangzhou, Zhejiang", flavorShort: "Fresh, nutty, chestnut, sweet finish", caffeine: "Medium", beginner: "★★★★★", harvest: "Pre-Qingming (before April 5) is premium; Guyu (April 20) is standard grade.", flavor: { aroma: "Toasted chestnut, fresh-cut grass, hint of orchid", taste: "Smooth, sweet, nutty with a clean vegetal backbone", color: "Pale jade green, clear and bright", body: "Light to medium, silky" }, brewing: { temp: "175°F (80°C)", timeGongfu: "30-45 seconds", timeWestern: "2-3 minutes", vessel: "Glass teapot or tall glass", ratio: "2-3g per 200ml", infusions: "3-4" }, buying: { priceEntry: "$10-20 / 100g (standard grade)", priceAdvance: "$40-100+ / 100g (pre-Qingming, Shifeng origin)", qualityCheck: "Flat, spear-shaped leaves with yellowish-green color. Genuine Longjing has a recognizable chestnut aroma when dry. Avoid broken or dusty leaves.", searchKeywords: "Longjing tea, Dragon Well tea, Xihu Longjing, Shifeng Longjing, pre-qingming Longjing", commonScams: "Fake Longjing from Sichuan/Guizhou processed to look authentic. Wuniu Zao, an early-sprouting cultivar, is often sold as Longjing but lacks the chestnut aroma." }, history: "China's most celebrated green tea, named after the Dragon Well spring near West Lake in Hangzhou. Designated imperial tribute tea during the Qing Dynasty. Emperor Qianlong visited the gardens and named 18 tea bushes Imperial Tea Bushes, still producing today.", idealFor: "Beginners and green tea enthusiasts. Perfect for daily drinking, after meals, or as a gift." },
  { id: "biluochun", name: "Biluochun", nameChinese: "碧螺春", type: "Green", origin: "Dongting Mountain, Suzhou, Jiangsu", flavorShort: "Fruity, floral, delicate, apricot", caffeine: "Medium", beginner: "★★★★★", harvest: "Early spring, only buds and the first leaf. Peak season is late March to early April.", flavor: { aroma: "Fresh fruit, apricot, floral bouquet, light vegetal", taste: "Delicate sweetness, fruity with a hint of nuttiness, clean finish", color: "Pale green with silver-white tips, clear liquor", body: "Very light, ethereal" }, brewing: { temp: "170°F (75°C)", timeGongfu: "20-30 seconds", timeWestern: "2 minutes", vessel: "Tall clear glass (enjoy the visual spectacle)", ratio: "2-3g per 200ml", infusions: "3" }, buying: { priceEntry: "$15-30 / 100g (standard grade)", priceAdvance: "$60-120+ / 100g (Dongting origin, pure bud)", qualityCheck: "Tiny, tightly curled leaves covered in white down. Dry aroma should be intensely fruity. Avoid flat, unfurled, or dark leaves.", searchKeywords: "Biluochun tea, Pi Lo Chun, Green Snail Spring, Dongting Biluochun, Suzhou green tea", commonScams: "Non-Dongting Biluochun from Zhejiang or Sichuan. Machine-harvested versions lack the downy white tips. Over-roasted imitations taste flat and lack the fruity bouquet." }, history: "Also called Green Snail Spring for its tightly curled shape. Originated on Dongting Mountain near Lake Tai in Jiangsu. Legend says a tea picker ran out of basket space and carried leaves in her clothing; body heat caused the distinctive curl and fragrance. One of China's Top Ten Teas.", idealFor: "Those who love light, fragrant teas. Excellent introduction to premium Chinese greens. Perfect for spring afternoons." },
  { id: "huangshan-maofeng", name: "Huangshan Maofeng", nameChinese: "黄山毛峰", type: "Green", origin: "Huangshan (Yellow Mountain), Anhui", flavorShort: "Fresh, orchid, sweet, lingering", caffeine: "Medium", beginner: "★★★★☆", harvest: "Pre-Qingming for top grade. Harvested from high-altitude gardens (800m+) on Yellow Mountain.", flavor: { aroma: "Fresh orchid, vegetal sweetness, hint of chestnut", taste: "Clean, sweet, full orchid flavor, pleasant lingering aftertaste", color: "Clear, pale ivory with a green tint", body: "Medium-light, smooth" }, brewing: { temp: "175°F (80°C)", timeGongfu: "30-45 seconds", timeWestern: "2-3 minutes", vessel: "Glass teapot or gaiwan", ratio: "2-3g per 200ml", infusions: "3-4" }, buying: { priceEntry: "$8-15 / 100g (standard)", priceAdvance: "$30-60 / 100g (pre-Qingming, high-altitude)", qualityCheck: "Leaves should bear the distinctive peak shape with white downy tips. Dry leaves are ivory-green with a slight golden tinge. Orchid aroma should be detectable in dry leaves.", searchKeywords: "Huangshan Maofeng, Yellow Mountain Fur Peak, Anhui green tea, maofeng tea", commonScams: "Lower-altitude imitations from non-Huangshan areas. Leaves lacking white tips indicate either poor harvest timing or machine processing." }, history: "Grown on the mist-shrouded peaks of Huangshan (Yellow Mountain), one of China's most scenic areas and a UNESCO World Heritage Site. The maofeng name refers to the tea's appearance: mao meaning downy/furry and feng meaning peak, describing the white-tipped, peak-shaped leaves. Another Top Ten Tea.", idealFor: "Green tea lovers seeking something between Longjing's nuttiness and Biluochun's fruitiness. Great afternoon tea." },
  { id: "silver-needle", name: "Silver Needle (Bai Hao Yin Zhen)", nameChinese: "白毫银针", type: "White", origin: "Fuding and Zhenghe, Fujian", flavorShort: "Soft, melon, hay, natural sweetness", caffeine: "Low", beginner: "★★★★★", harvest: "Early spring, only the unopened bud. Harvested for just 2-3 days per year on each bush.", flavor: { aroma: "Fresh hay, honeydew melon, faint floral", taste: "Gentle sweetness, melon, light cream, minimal astringency", color: "Very pale straw, almost colorless, crystal clear", body: "Very light, silky, almost water-like" }, brewing: { temp: "175°F (80°C)", timeGongfu: "45-60 seconds", timeWestern: "3-5 minutes", vessel: "Glass or porcelain gaiwan", ratio: "2g per 200ml", infusions: "3-5" }, buying: { priceEntry: "$15-25 / 100g (standard grade)", priceAdvance: "$50-100+ / 100g (Fuding origin, pure bud, early spring)", qualityCheck: "Entirely silver-white buds, plump and uniform, covered in fine white down. Avoid buds with green or brown discoloration. Dry aroma should be clean and sweet, never musty.", searchKeywords: "Silver Needle white tea, Bai Hao Yin Zhen, Fuding white tea, premium white tea", commonScams: "Yunnan Silver Needle (Yue Guang Bai) is sometimes sold as Fujian Silver Needle but uses a different cultivar. Aged Silver Needle is a legitimate category but verify storage conditions." }, history: "The pinnacle of white tea, made exclusively from unopened buds harvested in early spring. Originated in Fuding, Fujian in the late 18th century. White tea is the least processed of all tea types, simply withered and dried, preserving the leaf's natural character. Often called the champagne of teas.", idealFor: "Absolute beginners, those sensitive to caffeine, and anyone who thinks they don't like tea. Also excellent iced. The most forgiving tea to brew." },
  { id: "white-peony", name: "White Peony (Bai Mu Dan)", nameChinese: "白牡丹", type: "White", origin: "Fuding and Zhenghe, Fujian", flavorShort: "Soft, fruity, floral, fuller body", caffeine: "Low", beginner: "★★★★★", harvest: "Spring, one bud with one or two young leaves. Slightly later harvest than Silver Needle.", flavor: { aroma: "Fresh wildflowers, ripe stone fruit, faint honey", taste: "Richer than Silver Needle, clear fruity notes, honey sweetness, subtle floral finish", color: "Pale golden, bright", body: "Light to medium, rounder than Silver Needle" }, brewing: { temp: "180°F (82°C)", timeGongfu: "45-60 seconds", timeWestern: "3-4 minutes", vessel: "Porcelain gaiwan or glass", ratio: "2-3g per 200ml", infusions: "4-6" }, buying: { priceEntry: "$10-20 / 100g (standard grade)", priceAdvance: "$30-60 / 100g (Fuding origin, high proportion of buds)", qualityCheck: "Mix of silvery buds and green-brown leaves. Leaves should appear as if dancing when brewed. Dry fragrance should be fresh and mildly sweet, avoid smoky or stale notes.", searchKeywords: "White Peony tea, Bai Mu Dan, Fuding white tea, budget white tea", commonScams: "Lower-quality production using summer or autumn leaves lacks the fruity sweetness. Machine-processed versions lose the leaf integrity and visual appeal." }, history: "Bai Mu Dan means White Peony, the brewed leaves resemble peony petals floating in water. Second only to Silver Needle in white tea hierarchy but offers more flavor complexity at a friendlier price. A great everyday white tea.", idealFor: "Those who find Silver Needle too subtle. Great value daily white tea. Pairs beautifully with light foods." },
  { id: "tie-guan-yin", name: "Tie Guan Yin (Iron Goddess of Mercy)", nameChinese: "铁观音", type: "Oolong", origin: "Anxi County, Fujian", flavorShort: "Floral, orchid, creamy, lingering sweetness", caffeine: "Low", beginner: "★★★★☆", harvest: "Spring (May) and autumn (October). Autumn harvest has a richer aroma; spring is more delicate.", flavor: { aroma: "Captivating orchid, lilac, light cream", taste: "Smooth and creamy entry, blooming floral mid-palate, long sweet finish (hui gan)", color: "Bright golden-green, clear", body: "Medium, creamy, coating" }, brewing: { temp: "195°F (90°C)", timeGongfu: "30-60 seconds", timeWestern: "3-4 minutes", vessel: "Gaiwan or small porcelain teapot", ratio: "5g per 100ml (gongfu)", infusions: "5-8" }, buying: { priceEntry: "$8-15 / 100g (modern green-style)", priceAdvance: "$30-80+ / 100g (traditional roast, high mountain, competition grade)", qualityCheck: "Tightly rolled dark green balls that unfurl dramatically when brewed. Dry aroma should be intensely floral. Modern style is greener and more floral; traditional style has a light charcoal roast.", searchKeywords: "Tie Guan Yin, Iron Goddess of Mercy, Anxi oolong, TGY tea, Chinese oolong tea", commonScams: "Low-altitude TGY from non-Anxi regions. Overly green versions with a seaweed note are poorly made. Pure Tie Guan Yin cultivar vs. blended Guan Yin style." }, history: "Named after the Buddhist deity Guanyin. Legend says a poor farmer named Wei Yin discovered the tea bush beneath a Guanyin temple and was rewarded for his devotion. The most famous Chinese oolong, with a distinctive ball-rolled shape and intoxicating orchid fragrance.", idealFor: "The perfect entry oolong. If you enjoy floral notes, this is your tea. Equally enjoyable brewed casually or gongfu style." },
  { id: "da-hong-pao", name: "Da Hong Pao (Big Red Robe)", nameChinese: "大红袍", type: "Oolong", origin: "Wuyi Mountains, Fujian", flavorShort: "Roasted, mineral, dark chocolate, rock rhythm", caffeine: "Medium", beginner: "★★★☆☆", harvest: "Spring (late April to May). The rocky terroir of Wuyi is inseparable from the tea's character.", flavor: { aroma: "Deep roast, charcoal, mineral, warm stone fruit", taste: "Bold mineral entry (yan yun or rock rhythm), dark chocolate, dried longan, lingering sweet and cooling aftertaste", color: "Deep amber to dark copper", body: "Full, structured, warming" }, brewing: { temp: "205°F (95°C)", timeGongfu: "30-50 seconds", timeWestern: "3-5 minutes", vessel: "Yixing clay pot or gaiwan", ratio: "5g per 100ml (gongfu)", infusions: "6-10+" }, buying: { priceEntry: "$15-30 / 100g (modern clone/cutting)", priceAdvance: "$80-300+ / 100g (Wuyi core area, high roast, aged)", qualityCheck: "Dark, twisted, rope-like leaves. True Da Hong Pao has yan yun, a distinctive mineral-rock character from Wuyi's unique terroir. The original mother bushes no longer produce commercially.", searchKeywords: "Da Hong Pao, Big Red Robe, Wuyi rock tea, Wuyi yancha, Chinese oolong tea", commonScams: "The original 6 mother bushes on Wuyi Mountain are protected and no longer harvested. All Da Hong Pao today is from clones/cuttings. Cheap Da Hong Pao may be blended with non-Wuyi teas. Authentic yancha has mineral depth that imitations lack." }, history: "China's most legendary tea. Story goes that a Ming Dynasty scholar was cured of illness by tea from Wuyi's cliffs. When he later became a high official, he draped his red robe over the tea bushes in gratitude, hence Big Red Robe. The original mother bushes are over 350 years old and tourists pay to see them. A true connoisseur's tea.", idealFor: "Adventurous drinkers who enjoy whiskey, dark chocolate, or roasted coffee. A winter tea that warms from within. The tea to graduate to after Tie Guan Yin." },
  { id: "phoenix-dan-cong", name: "Phoenix Dan Cong", nameChinese: "凤凰单丛", type: "Oolong", origin: "Chaozhou, Guangdong", flavorShort: "Peach, almond, honey, complex, natural fruit", caffeine: "Medium", beginner: "★★★☆☆", harvest: "Spring (April-May). Each Dan Cong variety comes from a single bush and mimics a specific fruit/flower fragrance.", flavor: { aroma: "Intense natural fruit, peach, almond, honey, gardenia (varies by cultivar)", taste: "Complex and layered, the fruit fragrance is natural (no flavoring). Bitter-sweet opening, rich fruit mid-palate, enduring sweet aftertaste", color: "Golden to amber, bright", body: "Full, robust, mouth-filling" }, brewing: { temp: "203°F (95°C)", timeGongfu: "20-40 seconds (flash infusions)", timeWestern: "3-4 minutes", vessel: "Small gaiwan or Chaozhou clay pot", ratio: "5-6g per 100ml (gongfu)", infusions: "8-15+" }, buying: { priceEntry: "$15-30 / 100g (common cultivars like Mi Lan Xiang)", priceAdvance: "$60-200+ / 100g (rare single-bush, old tree, competition grade)", qualityCheck: "Long, twisted, dark leaves. Dry aroma should be intensely fragrant, the fruit note should hit you immediately. Check for natural vs. added fragrance: natural Dan Cong aroma evolves across infusions; artificial fades after the first steep.", searchKeywords: "Phoenix Dan Cong, Fenghuang Dancong, Mi Lan Xiang, Ya Shi Xiang, Chao Zhou oolong", commonScams: "Artificially scented Dan Cong is common, the strong fruit aroma lasts only 1-2 infusions before going flat. Genuine Dan Cong should evolve across 8+ infusions. Non-Phoenix Mountain cultivars lack the shan yun (mountain character)." }, history: "From the Phoenix Mountain in Chaozhou, Guangdong, where tea bushes grow among fruit trees at high altitudes. Dan Cong means single bush, each tea comes from one specific bush, and each bush naturally mimics a different fragrance: honey orchid, duck shit (don't let the name fool you), almond, and more. The Chaozhou gongfu tea ceremony is considered the most refined in China.", idealFor: "Serious tea explorers and flavor hunters. If you're into wine, whiskey, or single-origin coffee, Dan Cong is your tea. Each cultivar is a completely different experience." },
  { id: "keemun", name: "Keemun (Qimen)", nameChinese: "祁门红茶", type: "Black", origin: "Qimen County, Anhui", flavorShort: "Malty, smooth, cocoa, hint of smoke", caffeine: "Medium", beginner: "★★★★★", harvest: "Spring and early summer. Qimen County's misty climate is essential to the tea's character.", flavor: { aroma: "Wine-like, floral, hint of smoke, cocoa", taste: "Smooth, malty, rich cocoa, subtle smokiness, no bitterness", color: "Bright copper-red, clear", body: "Medium-full, smooth, round" }, brewing: { temp: "200°F (93°C)", timeGongfu: "30-45 seconds", timeWestern: "3-4 minutes", vessel: "Porcelain teapot or gaiwan", ratio: "2.5g per 200ml (Western) or 5g per 100ml (gongfu)", infusions: "3-5" }, buying: { priceEntry: "$8-15 / 100g (standard grade)", priceAdvance: "$25-50 / 100g (Qimen origin, Hao Ya grade)", qualityCheck: "Small, thin, tightly twisted leaves. Dry aroma: wine-like with floral notes. Liquor should be bright copper-red, never dull brown. The Keemun fragrance is distinctive, winey, floral, slightly smoky.", searchKeywords: "Keemun tea, Qimen black tea, Qimen Hong Cha, Chinese breakfast tea, Anhui black tea", commonScams: "Non-Qimen black teas sold under the Keemun name. Lower grades (broken leaf, fannings) are common in tea bags. True Qimen Hao Ya consists of fine, uniform leaf tips." }, history: "A relative newcomer (created 1875) but quickly became one of the world's three most fragrant black teas alongside Darjeeling and Uva. A key component in English Breakfast blends. Keemun is the only Chinese tea that ranks alongside the great British-style black teas.", idealFor: "The natural bridge from Western black tea to Chinese tea. If you love English Breakfast or Earl Grey, start here. Excellent with or without milk. The perfect morning tea." },
  { id: "dian-hong", name: "Dian Hong (Yunnan Black)", nameChinese: "滇红", type: "Black", origin: "Fengqing and Lincang, Yunnan", flavorShort: "Sweet potato, cocoa, rich, golden tips", caffeine: "Medium", beginner: "★★★★☆", harvest: "Spring and autumn. Uses the large-leaf Yunnan broad-leaf cultivar.", flavor: { aroma: "Sweet potato, dried fruit, cocoa, malt", taste: "Rich, thick, naturally sweet with prominent cocoa and sweet potato notes, minimal astringency", color: "Deep red-gold, bright, almost coppery", body: "Full, thick, almost syrupy" }, brewing: { temp: "200°F (93°C)", timeGongfu: "30-45 seconds", timeWestern: "3-5 minutes", vessel: "Porcelain or clay teapot", ratio: "2.5g per 200ml (Western) or 5g per 100ml (gongfu)", infusions: "4-6" }, buying: { priceEntry: "$8-15 / 100g (standard)", priceAdvance: "$25-60 / 100g (pure golden tips/buds, ancient tree)", qualityCheck: "Golden tips throughout, the more golden tips, the higher the grade. Leaves are large and wiry. Dry aroma: intense malt and sweet potato. Liquor is deep red with a golden ring.", searchKeywords: "Dian Hong, Yunnan black tea, golden tips black tea, Yunnan red tea, Fengqing black tea", commonScams: "Low-tip content sold as high-grade. Dian Hong made from small-leaf cultivars lacks the characteristic richness. Pure golden tip versions at suspiciously low prices are usually imitation." }, history: "Developed in the 1930s in Fengqing, Yunnan, using the indigenous large-leaf tea trees that grow at high altitudes. Yunnan is the birthplace of all tea, and its ancient tea forests give Dian Hong a depth that other black teas can't match. One of the most forgiving and rewarding Chinese black teas.", idealFor: "Those who take milk in their black tea but want to graduate to drinking it plain. The natural sweetness and thick body make it satisfying without additions. Also makes incredible iced tea." },
  { id: "lapsang-souchong", name: "Lapsang Souchong", nameChinese: "正山小种", type: "Black", origin: "Tongmu Village, Wuyi Mountains, Fujian", flavorShort: "Smoky, pine, bold, longan", caffeine: "Medium", beginner: "★★☆☆☆", harvest: "Late spring to early summer. Traditional pine-smoking process in wooden smoking sheds.", flavor: { aroma: "Campfire smoke, pine wood, dried longan, cedar", taste: "Assertive smoke upfront, pine resin, sweet dried longan underneath, surprisingly smooth finish", color: "Deep red-brown, warm", body: "Full, bold, warming" }, brewing: { temp: "205°F (96°C)", timeGongfu: "30-45 seconds", timeWestern: "3-4 minutes", vessel: "Porcelain teapot (smoke can season clay pots permanently)", ratio: "2.5g per 200ml (Western) or 5g per 100ml (gongfu)", infusions: "3-5" }, buying: { priceEntry: "$10-20 / 100g (standard smoked)", priceAdvance: "$30-70 / 100g (Tongmu origin, traditional pine smoke)", qualityCheck: "Large, coarse leaves. Traditional version uses pine wood smoking. Genuine Tongmu Lapsang has balanced smoke, not acrid or chemical.", searchKeywords: "Lapsang Souchong, Zheng Shan Xiao Zhong, smoked black tea, Tongmu black tea, Wuyi black tea", commonScams: "Many Lapsang Souchong teas are artificially smoke-flavored, not traditionally pine-smoked. The real thing comes only from the Tongmu protected area. Over-smoked versions can be harsh and acrid." }, history: "The original black tea. Invented accidentally in the 17th century when Tongmu villagers had to quickly dry tea leaves over pine fires. The resulting smoky tea became wildly popular in Europe. Lapsang is the single malt whiskey of the tea world, polarizing but unforgettable.", idealFor: "Whiskey and mezcal drinkers. Camping trips. Cold winter mornings. Also brilliant as a cooking ingredient. Definitely not for everyone, and that's the point." },
  { id: "pu-erh-sheng", name: "Pu-erh (Sheng / Raw)", nameChinese: "生普洱", type: "Dark", origin: "Xishuangbanna, Lincang, Pu'er, Yunnan", flavorShort: "Green, astringent when young, ages into complexity", caffeine: "High", beginner: "★★★☆☆", harvest: "Spring and autumn. Pressing occurs after sun-drying, then aged for years or decades.", flavor: { aroma: "Young: green, floral, slight smoke. Aged: dried fruit, camphor, wood, medicinal", taste: "Young: bright, astringent, bitter-sweet, strong hui gan. Aged: smooth, complex, dried plum, camphor, cooling", color: "Pale golden (young) to deep amber/copper (aged)", body: "Medium to full, structured, mouth-coating" }, brewing: { temp: "200-212°F (95-100°C)", timeGongfu: "15-30 seconds (young), 30-60 seconds (aged)", timeWestern: "3-5 minutes", vessel: "Yixing clay pot (dedicated to sheng) or gaiwan", ratio: "5g per 100ml (gongfu)", infusions: "10-20+" }, buying: { priceEntry: "$15-40 / 357g cake (young, generic origin)", priceAdvance: "$100-500+ / 357g cake (famous mountain: Lao Ban Zhang, Bing Dao, aged 10+ years)", qualityCheck: "Pressed into cakes (bing), bricks, or tuos. Leaves should be intact, visible on surface. Young sheng is greenish; aged turns reddish-brown. Store in breathable environment.", searchKeywords: "Sheng Pu-erh, raw Pu-erh, aged Pu-erh, Lao Ban Zhang, Bing Dao, Yunnan Pu-erh tea", commonScams: "Fake famous mountain tea (Lao Ban Zhang claims vastly outnumber production). Aged Pu-erh artificially wet-piled. Low-quality plantation tea passed off as ancient tree (gu shu). Poor storage leading to mold." }, history: "Sheng Pu-erh is the original Pu-erh, sun-dried green tea from Yunnan's large-leaf trees, pressed and aged naturally. Like wine, it transforms with time. The famous tea horse road carried Pu-erh from Yunnan to Tibet for centuries.", idealFor: "Collectors, connoisseurs, and those who enjoy watching tea evolve. The ultimate hobby tea. Young sheng pairs with rich food; aged sheng is a meditation tea." },
  { id: "pu-erh-shou", name: "Pu-erh (Shou / Ripe)", nameChinese: "熟普洱", type: "Dark", origin: "Menghai, Xishuangbanna, Yunnan", flavorShort: "Earthy, woody, smooth, dark chocolate", caffeine: "Medium", beginner: "★★★★☆", harvest: "Spring and autumn. Wet-piling (wo dui) fermentation takes 45-60 days.", flavor: { aroma: "Damp earth, aged wood, dark chocolate, old books", taste: "Smooth, earthy, woody, dark chocolate bitterness, zero astringency, naturally sweet finish", color: "Dark mahogany, opaque, like black coffee", body: "Full, thick, velvety, almost chewy" }, brewing: { temp: "212°F (100°C)", timeGongfu: "15-30 seconds", timeWestern: "3-5 minutes", vessel: "Yixing clay pot (dedicated to shou) or gaiwan", ratio: "5g per 100ml (gongfu)", infusions: "8-15+" }, buying: { priceEntry: "$10-25 / 357g cake (standard fermentation)", priceAdvance: "$50-150+ / 357g cake (Menghai/Dayi factory, premium leaf grade, aged)", qualityCheck: "Pressed cake intact and firm. Dry aroma: clean earth, wood, no fishy or moldy notes. Fishy smell indicates poor fermentation, avoid. Liquor should be clear dark red, not murky.", searchKeywords: "Shou Pu-erh, ripe Pu-erh, cooked Pu-erh, Menghai Pu-erh, Dayi Pu-erh, Yunnan dark tea", commonScams: "Poorly fermented shou with fishy/musty odor. Fake vintage claims, most shou dates to 1973 at earliest. Low-quality plantation material fermented to mask defects." }, history: "Shou Pu-erh developed in 1973 to accelerate aging. Wet-piling ferments tea in 45-60 days, approximating decades of aging. It democratized Pu-erh, making the earthy profile accessible immediately.", idealFor: "Coffee drinkers switching to tea. After heavy meals (aids digestion). Cold winter evenings. The most beginner-friendly Pu-erh and best value in dark tea." },
  { id: "gunpowder-green", name: "Gunpowder Green (Zhu Cha)", nameChinese: "珠茶", type: "Green", origin: "Zhejiang (primarily Pingshui region)", flavorShort: "Bold, smoky, vegetal, assertive", caffeine: "Medium", beginner: "★★★☆☆", harvest: "Spring and summer. Tightly rolled into small pellets resembling gunpowder grains.", flavor: { aroma: "Smoky, vegetal, slightly metallic", taste: "Bold, assertive, smoky-vegetal, slightly astringent, brisk finish", color: "Golden-green to amber", body: "Medium-full, brisk, astringent" }, brewing: { temp: "175°F (80°C)", timeGongfu: "30-45 seconds", timeWestern: "2-3 minutes", vessel: "Glass or porcelain", ratio: "1.5-2g per 200ml", infusions: "2-3" }, buying: { priceEntry: "$5-10 / 100g", priceAdvance: "$15-25 / 100g (high-grade, tight roll, consistent size)", qualityCheck: "Tightly rolled pellets of uniform size. Should unfurl gradually when brewed. Avoid loose, broken, or dusty pellets.", searchKeywords: "Gunpowder green tea, Zhu Cha, pearl tea, Chinese green tea, Pingshui Gunpowder", commonScams: "Lower-grade dust rolled to look like pellets. Machine-harvested with inconsistent size. Over-fired versions taste burnt." }, history: "Named for its resemblance to gunpowder grains. A major Chinese export to North Africa and the Middle East, foundation of Moroccan mint tea. Tight rolling preserves freshness during shipping. Budget-friendly with real character.", idealFor: "Those who find most green teas too delicate. Excellent base for Moroccan mint tea. Great value daily green tea." },
  { id: "anji-bai-cha", name: "Anji Bai Cha", nameChinese: "安吉白茶", type: "Green", origin: "Anji County, Zhejiang", flavorShort: "Delicate, sweet, umami, extraordinary smoothness", caffeine: "Low", beginner: "★★★★★", harvest: "Early spring only (late March to early April). Unique albino mutation, leaves are pale jade-white in early spring.", flavor: { aroma: "Subtle chestnut, fresh spring water, faint floral", taste: "Exceptionally smooth and sweet, high theanine from albino mutation gives savory umami character. Zero bitterness.", color: "Very pale jade, almost translucent", body: "Light, ethereal, silken" }, brewing: { temp: "170°F (75°C)", timeGongfu: "30-45 seconds", timeWestern: "2-3 minutes", vessel: "Tall clear glass", ratio: "2-3g per 200ml", infusions: "3-4" }, buying: { priceEntry: "$20-40 / 100g (standard grade)", priceAdvance: "$60-150+ / 100g (pure bud, early harvest, core origin)", qualityCheck: "Leaves pale jade-green to almost white, the prized albino characteristic. Long, needle-like shape. Any bitterness means it's not genuine.", searchKeywords: "Anji Bai Cha, Anji white tea, Zhejiang green tea, high theanine tea, umami green tea", commonScams: "True Anji Bai Cha only harvested in early spring when leaves show albino trait. Counterfeits use regular green tea from non-Anji regions. Despite the name, it's a green tea not a white tea." }, history: "Despite its name (Bai Cha means white tea), Anji Bai Cha is a green tea. Discovered in the 1980s in Anji. The albino mutation causes high theanine retention (3-4x normal), giving it uniquely smooth, umami character. Rapidly becoming one of China's most sought-after modern teas.", idealFor: "Those who find most green teas too bitter or grassy. The smoothest green tea you'll ever taste. Excellent cold-brewed. The ultimate beginner green tea." },
];



  const relatedTeas = {longjing:["biluochun","huangshan-maofeng","anji-bai-cha"],biluochun:["longjing","silver-needle","huangshan-maofeng"],"huangshan-maofeng":["longjing","biluochun","anji-bai-cha"],"silver-needle":["white-peony","biluochun","anji-bai-cha"],"white-peony":["silver-needle","longjing","tie-guan-yin"],"tie-guan-yin":["phoenix-dan-cong","da-hong-pao","white-peony"],"da-hong-pao":["phoenix-dan-cong","pu-erh-sheng","lapsang-souchong"],"phoenix-dan-cong":["tie-guan-yin","da-hong-pao","pu-erh-sheng"],keemun:["dian-hong","lapsang-souchong","da-hong-pao"],"dian-hong":["keemun","lapsang-souchong","pu-erh-shou"],"lapsang-souchong":["keemun","da-hong-pao","dian-hong"],"pu-erh-sheng":["pu-erh-shou","da-hong-pao","phoenix-dan-cong"],"pu-erh-shou":["pu-erh-sheng","keemun","dian-hong"],"gunpowder-green":["longjing","biluochun","huangshan-maofeng"],"anji-bai-cha":["longjing","silver-needle","huangshan-maofeng"]};
  function renderRelatedTeas(teaId){var ids=relatedTeas[teaId]||[];if(!ids.length)return"";var items=ids.map(function(id){var t=teaDetails.find(function(x){return x.id===id});if(!t)return"";return"<button class=\"px-3 py-1.5 bg-white rounded-lg border border-zinc-200 text-sm hover:border-leaf-400 hover:text-leaf-700 transition-colors cursor-pointer\" onclick=\"event.stopPropagation();toggleTeaDetail('"+id+"')\" type=\"button\">"+t.name+" <span class=\"text-zinc-400 text-xs ml-1\">"+t.nameChinese+"</span></button>"}).filter(Boolean).join("");if(!items)return"";return"<div class=\"mt-5 pt-4 border-t border-zinc-100\"><p class=\"text-xs font-mono uppercase tracking-[0.15em] text-zinc-400 mb-2\">You May Also Like</p><div class=\"flex flex-wrap gap-2\">"+items+"</div></div>"}
  let sortKey = "name";
  let sortAsc = true;
  let currentFilter = "all";

  function renderTable() {
    const searchTerm = (document.getElementById("tea-search") || {}).value || "";
    const countEl = document.getElementById("tea-count");
    const tbody = document.getElementById("tea-table-body");
    if (!tbody) return;
    let filtered = teaDetails;
    if (currentFilter !== "all") filtered = teaDetails.filter(t => t.type === currentFilter);
    if (searchTerm) { const s = searchTerm.toLowerCase(); filtered = filtered.filter(t => t.name.toLowerCase().includes(s) || t.type.toLowerCase().includes(s) || t.origin.toLowerCase().includes(s) || t.flavorShort.toLowerCase().includes(s)); }
    if (countEl) countEl.textContent = filtered.length + " of " + teaDetails.length + " teas";
    filtered = [...filtered].sort((a, b) => {
      const va = a[sortKey] || "";
      const vb = b[sortKey] || "";
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    tbody.innerHTML = filtered.map((t, i) => renderTeaRow(t, i)).join("");
  }


  function renderTeaRow(t, i) {
    const rowBg = i % 2 === 0 ? "bg-white" : "bg-bone-50/50";
    return `<tr class="${rowBg} tea-row cursor-pointer group relative" data-tea-id="${t.id}" data-type="${t.type}" tabindex="0" role="button" aria-expanded="false">
        <td class="px-5 py-3 font-medium text-zinc-800 group-hover:text-leaf-700 transition-colors">
          <span class="inline-flex items-center gap-2">
            <svg class="w-4 h-4 text-zinc-300 group-hover:text-leaf-500 transition-transform expand-icon flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            <span>${t.name} <span class="text-zinc-400 font-normal text-xs ml-1">${t.nameChinese}</span></span>
          </span>
        </td>
        <td class="px-5 py-3"><span class="px-2 py-0.5 text-xs rounded-full bg-leaf-50 text-leaf-700 whitespace-nowrap">${t.type}</span></td>
        <td class="px-5 py-3 text-zinc-500 hidden sm:table-cell">${t.origin}</td>
        <td class="px-5 py-3 text-zinc-500 hidden md:table-cell">${t.flavorShort}</td>
        <td class="px-5 py-3 text-zinc-500 hidden lg:table-cell">${t.caffeine}</td>
        <td class="px-5 py-3 text-zinc-500 hidden lg:table-cell">${t.beginner}</td>
      </tr>
      <tr class="tea-detail-row hidden" id="detail-${t.id}" data-tea-id="${t.id}">
        <td colspan="6" class="p-0 bg-bone-50/60 border-t border-leaf-200">
          ${renderDetailPanel(t)}
        </td>
      </tr>`;


  }



  function getTeaImage(type) {
    const map = { Green: "/images/green-tea.webp", White: "/images/white-tea.webp", Yellow: "/images/yellow-tea.webp", Oolong: "/images/oolong-tea.webp", Black: "/images/black-tea.webp", Dark: "/images/dark-tea.webp" };
    return map[type] || "";
  }
  function renderDetailPanel(t) {
    return `<div class="px-5 sm:px-8 py-6 md:py-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0"><img src="${getTeaImage(t.type)}" alt="${t.type} tea" class="w-full h-full object-cover" /></div>
        <div>
          <h4 class="text-lg font-bold text-zinc-900">${t.name}</h4>
          <p class="text-sm text-zinc-400">${t.nameChinese} &middot; ${t.type} Tea &middot; ${t.origin}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h5 class="text-xs font-mono uppercase tracking-[0.15em] text-leaf-600 mb-3">Flavor Profile</h5>
          <div class="space-y-2.5 text-sm">
            <div class="flex gap-2"><span class="text-zinc-400 w-16 flex-shrink-0">Aroma</span><span class="text-zinc-700">${t.flavor.aroma}</span></div>
            <div class="flex gap-2"><span class="text-zinc-400 w-16 flex-shrink-0">Taste</span><span class="text-zinc-700">${t.flavor.taste}</span></div>
            <div class="flex gap-2"><span class="text-zinc-400 w-16 flex-shrink-0">Color</span><span class="text-zinc-700">${t.flavor.color}</span></div>
            <div class="flex gap-2"><span class="text-zinc-400 w-16 flex-shrink-0">Body</span><span class="text-zinc-700">${t.flavor.body}</span></div>
          </div>
          <div class="mt-3 flex flex-wrap gap-3 text-xs text-zinc-500">
            <span class="px-2 py-1 bg-white rounded-md border border-zinc-200">Caffeine: ${t.caffeine}</span>
            <span class="px-2 py-1 bg-white rounded-md border border-zinc-200">Harvest: ${t.harvest}</span>
          </div>
        </div>
        <div>
          <h5 class="text-xs font-mono uppercase tracking-[0.15em] text-leaf-600 mb-3">Brewing Guide</h5>
          <div class="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            <div><span class="text-zinc-400 block text-xs">Water</span><span class="text-zinc-700 font-medium">${t.brewing.temp}</span></div>
            <div><span class="text-zinc-400 block text-xs">Vessel</span><span class="text-zinc-700 font-medium">${t.brewing.vessel}</span></div>
            <div><span class="text-zinc-400 block text-xs">Gongfu Time</span><span class="text-zinc-700 font-medium">${t.brewing.timeGongfu}</span></div>
            <div><span class="text-zinc-400 block text-xs">Western Time</span><span class="text-zinc-700 font-medium">${t.brewing.timeWestern}</span></div>
            <div><span class="text-zinc-400 block text-xs">Ratio</span><span class="text-zinc-700 font-medium">${t.brewing.ratio}</span></div>
            <div><span class="text-zinc-400 block text-xs">Infusions</span><span class="text-zinc-700 font-medium">${t.brewing.infusions}</span></div>
          </div>
        </div>
      </div>
      <div class="mb-6 p-4 sm:p-5 bg-white rounded-xl border border-zinc-200">
        <h5 class="text-xs font-mono uppercase tracking-[0.15em] text-amber-600 mb-3">Buying Guide</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
          <div class="p-3 bg-bone-50 rounded-lg"><span class="text-zinc-400 block text-xs mb-0.5">Entry Level</span><span class="text-zinc-800 font-medium">${t.buying.priceEntry}</span></div>
          <div class="p-3 bg-bone-50 rounded-lg"><span class="text-zinc-400 block text-xs mb-0.5">Premium / Collector</span><span class="text-zinc-800 font-medium">${t.buying.priceAdvance}</span></div>
        </div>
        <div class="space-y-3 text-sm">
          <div class="flex gap-2"><span class="text-leaf-600 mt-0.5 flex-shrink-0">&#10003;</span><span><strong class="text-zinc-700">Quality Check:</strong> <span class="text-zinc-600">${t.buying.qualityCheck}</span></span></div>
          <div class="flex gap-2"><span class="text-amber-500 mt-0.5 flex-shrink-0">&#9888;</span><span><strong class="text-zinc-700">Watch Out:</strong> <span class="text-zinc-600">${t.buying.commonScams}</span></span></div>
          <div class="flex gap-2"><span class="text-zinc-400 mt-0.5 flex-shrink-0">&#128269;</span><span><strong class="text-zinc-700">Search:</strong> <span class="text-zinc-500">${t.buying.searchKeywords}</span></span></div>
        </div>
      </div>
      <div class="mb-5 text-sm">
        <h5 class="text-xs font-mono uppercase tracking-[0.15em] text-zinc-400 mb-2">History and Background</h5>
        <p class="text-zinc-600 leading-relaxed">${t.history}</p>
      </div>
      <div class="p-3 bg-leaf-50 rounded-lg border border-leaf-100 text-sm">
        <span class="font-semibold text-leaf-800">Ideal For: </span><span class="text-leaf-700">${t.idealFor}</span></div>${renderRelatedTeas(t.id)}
      </div>
    </div>`;

  }


  
  // Tea search input
  const searchInput = document.getElementById("tea-search");
  if (searchInput) {
    let searchTimer;
    searchInput.addEventListener("input", function() {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function() { document.querySelectorAll("tr.tea-detail-row:not(.hidden)").forEach(function(d){d.classList.add("hidden")}); renderTable(); }, 250);
    });
  }
  document.addEventListener("keydown",function(e){if(e.key==="/"&&document.activeElement.tagName!=="INPUT"&&document.activeElement.tagName!=="TEXTAREA"){e.preventDefault();var s=document.getElementById("tea-search");if(s)s.focus()}});
  document.addEventListener("DOMContentLoaded", () => {
    renderTable();

  function toggleTeaDetail(teaId) {
    const detailRow = document.getElementById("detail-" + teaId);
    const summaryRow = document.querySelector(`tr.tea-row[data-tea-id="${teaId}"]`);
    if (!detailRow || !summaryRow) return;
    const isOpen = !detailRow.classList.contains("hidden");
    const icon = summaryRow.querySelector(".expand-icon");
    document.querySelectorAll("tr.tea-detail-row:not(.hidden)").forEach(d => {
      if (d.dataset.teaId !== teaId) {
        d.classList.add("hidden");
        const oi = document.querySelector(`tr.tea-row[data-tea-id="${d.dataset.teaId}"] .expand-icon`);
        if (oi) oi.style.transform = "";
      }
    });
    if (isOpen) {
      detailRow.classList.add("hidden");
      if (icon) icon.style.transform = "";
      if (window.location.hash === "#tea-" + teaId) history.replaceState(null, "", window.location.pathname);
    } else {
      detailRow.classList.remove("hidden");
      if (icon) icon.style.transform = "rotate(90deg)";
      history.replaceState(null, "", "#tea-" + teaId);
      setTimeout(() => {
        const rect = detailRow.getBoundingClientRect();
        if (rect.bottom > window.innerHeight) detailRow.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }

  // Table sort
  document.querySelectorAll("[data-sort]").forEach(th => th.addEventListener("click", () => {
    const key = th.dataset.sort;
    sortKey === key ? sortAsc = !sortAsc : (sortKey = key, sortAsc = true);
    document.querySelectorAll("tr.tea-detail-row:not(.hidden)").forEach(d => d.classList.add("hidden"));
    renderTable();
  }));

  // Table filter
  const filterBtns = document.querySelectorAll("#tea-filter [data-filter]");
  filterBtns.forEach(btn => btn.addEventListener("click", () => {
    filterBtns.forEach(b => { b.classList.remove("border-2", "border-leaf-600", "bg-leaf-600", "text-white", "active"); b.classList.add("border", "border-zinc-200", "text-zinc-600"); });
    btn.classList.add("border-2", "border-leaf-600", "bg-leaf-600", "text-white", "active"); btn.classList.remove("border-zinc-200", "text-zinc-600");
    currentFilter = btn.dataset.filter;
    document.querySelectorAll("tr.tea-detail-row:not(.hidden)").forEach(d => d.classList.add("hidden"));
    renderTable();
  }));

  // Row click to expand detail
  // Event delegation on tbody — survives renderTable() re-renders
  document.getElementById("tea-table-body").addEventListener("click", e => {
    const row = e.target.closest("tr.tea-row");
    if (row && !e.target.closest("a")) toggleTeaDetail(row.dataset.teaId);
  });
  document.getElementById("tea-table-body").addEventListener("keydown", e => {
    const row = e.target.closest("tr.tea-row");
    if (row && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); toggleTeaDetail(row.dataset.teaId); }
  });

  // ARIA state tracking
  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      if (m.attributeName === "class" && m.target.classList.contains("tea-detail-row")) {
        const r = document.querySelector(`tr.tea-row[data-tea-id="${m.target.dataset.teaId}"]`);
        if (r) r.setAttribute("aria-expanded", m.target.classList.contains("hidden") ? "false" : "true");
      }
    });
  });
  document.querySelectorAll("tr.tea-detail-row").forEach(d => observer.observe(d, { attributes: true, attributeFilter: ["class"] }));

  // URL hash deep linking
  if (window.location.hash && window.location.hash.startsWith("#tea-")) {
    setTimeout(() => toggleTeaDetail(window.location.hash.replace("#tea-", "")), 300);
  }


  // Flavor Finder
  const recommendations = {
    fresh: { teaId: "longjing", title: "Try Longjing (Dragon Well) Green Tea", desc: "The most famous Chinese green tea, with a fresh nutty flavor and sweet aftertaste. Perfect if you enjoy vegetal, clean-tasting teas.", brew: "Brew: 175F, 2-3 minutes, 2g per cup" },
    floral: { teaId: "tie-guan-yin", title: "Try Tie Guan Yin Oolong Tea", desc: "A lightly oxidized oolong with an enchanting orchid fragrance. Smooth and creamy, with natural floral sweetness.", brew: "Brew: 195F, 30-60s gongfu, 5g per 100ml" },
    malty: { teaId: "keemun", title: "Try Keemun Black Tea", desc: "A smooth, malty black tea from Anhui with notes of cocoa and a hint of smoke.", brew: "Brew: 200F, 3-4 minutes, 2.5g per cup" },
    earthy: { teaId: "pu-erh-shou", title: "Try Shou (Ripe) Pu-erh", desc: "A post-fermented dark tea from Yunnan with deep earthy, woody notes. Ages beautifully like fine wine.", brew: "Brew: 212F, 20-40s gongfu, 5g per 100ml" },
    roasted: { teaId: "da-hong-pao", title: "Try Da Hong Pao (Big Red Robe) Oolong", desc: "A legendary Wuyi rock oolong with deep roasted notes and mineral complexity.", brew: "Brew: 205F, 30-50s gongfu, 5g per 100ml" },
    sweet: { teaId: "silver-needle", title: "Try Silver Needle White Tea", desc: "The purest expression of tea, just buds, minimally processed. Naturally sweet with notes of melon.", brew: "Brew: 175F, 3-5 minutes, 2g per cup" }
  };
  const flavorBtns = document.querySelectorAll("#flavor-options [data-flavor]");
  const resultDiv = document.getElementById("finder-result");
  flavorBtns.forEach(btn => btn.addEventListener("click", () => {
    const rec = recommendations[btn.dataset.flavor]; if (!rec) return;
    flavorBtns.forEach(b => { b.classList.remove("border-leaf-600", "bg-leaf-50", "text-leaf-700"); b.classList.add("border-zinc-200", "text-zinc-600"); });
    btn.classList.add("border-leaf-600", "bg-leaf-50", "text-leaf-700"); btn.classList.remove("border-zinc-200");
    document.getElementById("result-title").textContent = rec.title;
    const link = document.getElementById("result-link");
    link.textContent = "View in table →";
    link.href = "#famous";
    link.classList.remove("hidden");
    link.onclick = (e) => { e.preventDefault(); document.getElementById("famous").scrollIntoView({ behavior: "smooth" }); setTimeout(() => toggleTeaDetail(rec.teaId), 400); };
    document.getElementById("result-desc").textContent = rec.desc;
    document.getElementById("result-brew").textContent = rec.brew;
    resultDiv.classList.remove("hidden"); setTimeout(function(){ resultDiv.scrollIntoView({ behavior: "smooth", block: "center" }) }, 100);
  }));

  // Brewing Guide Tabs
  const brewData = {
    green: { title: "Brewing Green Tea", temp: "160-175F (70-80C)", time: "2-3 minutes", vessel: "Glass teapot or gaiwan", ratio: "2g per 200ml", tips: "Never use boiling water; it burns the leaves and creates bitterness. Watch the leaves dance in a glass vessel." },
    oolong: { title: "Brewing Oolong Tea", temp: "185-205F (85-95C)", time: "30-60 seconds (gongfu)", vessel: "Yixing clay pot or gaiwan", ratio: "5g per 100ml", tips: "Use gongfu style for best results. Oolongs shine across 5-8 infusions, with flavor evolving each round." },
    black: { title: "Brewing Black Tea", temp: "195-212F (90-100C)", time: "3-5 minutes", vessel: "Porcelain teapot", ratio: "2.5g per 200ml", tips: "Chinese black teas (hong cha) are smoother than Indian and do not need milk." },
    white: { title: "Brewing White Tea", temp: "175-185F (80-85C)", time: "3-5 minutes", vessel: "Glass or porcelain", ratio: "2g per 200ml", tips: "White tea is the most forgiving; hard to over-brew. Aged white teas can handle hotter water." },
  puerh: { title: "Brewing Pu-erh Tea", temp: "200-212F (95-100C)", time: "20-40 seconds (gongfu)", vessel: "Yixing clay pot or gaiwan", ratio: "5g per 100ml", tips: "Always rinse pu-erh twice before drinking, quick rinses to wake up the leaves." }
    ,
    yellow: { title: "Brewing Yellow Tea", temp: "170-180F (75-82C)", time: "2-3 minutes", vessel: "Glass or porcelain gaiwan", ratio: "2g per 200ml", tips: "Yellow tea is rare and delicate — treat it gently. The 'men huang' (yellowing) step gives it a uniquely mellow, sweet character distinct from green tea." },
    dark: { title: "Brewing Dark Tea", temp: "200-212F (95-100C)", time: "30-60 seconds (gongfu)", vessel: "Yixing clay pot or gaiwan", ratio: "5g per 100ml", tips: "Dark teas (hei cha) like Liu Bao and Fu Zhuan are often aged. Rinse once to wake the leaves. These teas can steep 8-15+ times and develop deeper character with each infusion." },
  };
  const brewTabs = document.querySelectorAll("#brew-tabs [data-brew]");
  const brewContent = document.getElementById("brew-content");
  function renderBrew(type) {
    const d = brewData[type]; if (!d) return;
    brewContent.innerHTML = `<h3 class="text-xl font-bold text-zinc-900 mb-6">${d.title}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-4 bg-bone-50 rounded-xl"><p class="text-xs text-zinc-400 uppercase tracking-wider mb-1">Water Temperature</p><p class="font-semibold text-zinc-800">${d.temp}</p></div>
        <div class="p-4 bg-bone-50 rounded-xl"><p class="text-xs text-zinc-400 uppercase tracking-wider mb-1">Steeping Time</p><p class="font-semibold text-zinc-800">${d.time}</p></div>
        <div class="p-4 bg-bone-50 rounded-xl"><p class="text-xs text-zinc-400 uppercase tracking-wider mb-1">Best Vessel</p><p class="font-semibold text-zinc-800">${d.vessel}</p></div>
        <div class="p-4 bg-bone-50 rounded-xl"><p class="text-xs text-zinc-400 uppercase tracking-wider mb-1">Leaf-to-Water Ratio</p><p class="font-semibold text-zinc-800">${d.ratio}</p></div>
      </div>
      <div class="mt-6 p-4 bg-leaf-50 rounded-xl border border-leaf-200">
        <p class="text-sm font-semibold text-leaf-800 mb-1">Pro Tips</p>
        <p class="text-sm text-leaf-700">${d.tips}</p>
      </div>`;

  }
  brewTabs.forEach(tab => tab.addEventListener("click", () => {
    brewTabs.forEach(t => { t.classList.remove("bg-leaf-600", "text-white"); t.classList.add("border", "border-zinc-200", "text-zinc-600"); });
    tab.classList.add("bg-leaf-600", "text-white"); tab.classList.remove("border-zinc-200", "text-zinc-600");
    renderBrew(tab.dataset.brew);
  }));
  renderBrew("green");

  // Type card click to filter
  document.querySelectorAll('[data-type]').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type;
      if (!type || type === 'all') return;
      const titleType = type.charAt(0).toUpperCase() + type.slice(1);
      const btns = document.querySelectorAll('#tea-filter [data-filter]');
      const filterBtn = [...btns].find(b => b.dataset.filter === titleType);
      if (filterBtn) { filterBtn.click(); filterBtn.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      });
    });
  document.querySelectorAll('[data-filter-type]').forEach(row => {
    row.addEventListener('click', () => {
      const type = row.dataset.filterType;
      const btns = document.querySelectorAll('#tea-filter [data-filter]');
      const filterBtn = [...btns].find(b => b.dataset.filter === type);
      if (filterBtn) { filterBtn.click(); document.getElementById('famous').scrollIntoView({ behavior: 'smooth' }); }
    });
  });


  });
