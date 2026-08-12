with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

# ====================================================================
# 1. HERO: Change subtext to value-driven + add 3-step flow after hero
# ====================================================================
old_hero_p = "Discover China\u2019s six major tea categories, famous regional teas, traditional brewing methods, and how to find the perfect cup for your taste."
new_hero_p = "From confused to confident in 3 steps. Learn the types, match your taste, and brew like a pro \u2014 all on one page."
content = content.replace(old_hero_p, new_hero_p)

three_step = """
<!-- ========== 3-STEP GUIDE ========== -->
<section class="max-w-7xl mx-auto px-4 pb-16 -mt-6 relative z-10">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <a href="#types" class="group bg-white rounded-xl border border-zinc-200 p-5 hover:shadow-md hover:border-leaf-200 transition-all">
      <div class="w-10 h-10 rounded-full bg-leaf-100 text-leaf-700 flex items-center justify-center font-bold mx-auto mb-3 group-hover:bg-leaf-600 group-hover:text-white transition-colors">1</div>
      <h3 class="font-semibold text-center text-zinc-900 mb-1">Know the Types</h3>
      <p class="text-sm text-center text-zinc-500">Green, white, oolong, black &amp; more \u2014 understand the 6 categories at a glance</p>
    </a>
    <a href="#finder" class="group bg-white rounded-xl border border-zinc-200 p-5 hover:shadow-md hover:border-leaf-200 transition-all">
      <div class="w-10 h-10 rounded-full bg-leaf-100 text-leaf-700 flex items-center justify-center font-bold mx-auto mb-3 group-hover:bg-leaf-600 group-hover:text-white transition-colors">2</div>
      <h3 class="font-semibold text-center text-zinc-900 mb-1">Match Your Taste</h3>
      <p class="text-sm text-center text-zinc-500">Tell us what flavors you enjoy \u2014 we\u2019ll recommend the right tea for your palate</p>
    </a>
    <a href="#brewing" class="group bg-white rounded-xl border border-zinc-200 p-5 hover:shadow-md hover:border-leaf-200 transition-all">
      <div class="w-10 h-10 rounded-full bg-leaf-100 text-leaf-700 flex items-center justify-center font-bold mx-auto mb-3 group-hover:bg-leaf-600 group-hover:text-white transition-colors">3</div>
      <h3 class="font-semibold text-center text-zinc-900 mb-1">Brew Like a Pro</h3>
      <p class="text-sm text-center text-zinc-500">Master water temperature, steeping time, and the right teaware for a perfect cup</p>
    </a>
  </div>
</section>
"""
# Insert after the hero section closing </section> that comes right before "WHAT IS CHINESE TEA"
hero_end = content.find("<!-- ========== WHAT IS CHINESE TEA ========== -->")
content = content[:hero_end] + three_step + "\n" + content[hero_end:]

# ====================================================================
# 2. SIX TYPES: Add comparison matrix after the six type cards
# ====================================================================
matrix_html = """
<!-- ========== TEA COMPARISON MATRIX ========== -->
<div class="max-w-7xl mx-auto px-4 pb-16">
  <div class="text-center mb-8">
    <p class="text-leaf-600 text-sm font-mono uppercase tracking-[0.18em] mb-3">At a Glance</p>
    <h3 class="text-2xl font-bold tracking-tight text-zinc-900">Quick Comparison</h3>
  </div>
  <div class="overflow-x-auto rounded-2xl border border-zinc-200">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-bone-50 text-left">
          <th class="px-5 py-3 font-semibold text-zinc-700">Type</th>
          <th class="px-5 py-3 font-semibold text-zinc-700">Oxidation</th>
          <th class="px-5 py-3 font-semibold text-zinc-700">Caffeine</th>
          <th class="px-5 py-3 font-semibold text-zinc-700">Brew Temp</th>
          <th class="px-5 py-3 font-semibold text-zinc-700">Beginner</th>
          <th class="px-5 py-3 font-semibold text-zinc-700">Price Range</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white hover:bg-leaf-50/50 transition-colors cursor-pointer" data-filter-type="Green">
          <td class="px-5 py-3 font-medium text-zinc-800">Green</td>
          <td class="px-5 py-3 text-zinc-500">0% (unoxidized)</td>
          <td class="px-5 py-3 text-zinc-500">Medium</td>
          <td class="px-5 py-3 text-zinc-500">160-175&deg;F</td>
          <td class="px-5 py-3"><span class="text-zinc-700">★★★★★</span></td>
          <td class="px-5 py-3 text-zinc-500">$5-40 / 100g</td>
        </tr>
        <tr class="bg-bone-50/50 hover:bg-leaf-50/50 transition-colors cursor-pointer" data-filter-type="White">
          <td class="px-5 py-3 font-medium text-zinc-800">White</td>
          <td class="px-5 py-3 text-zinc-500">0% (unoxidized)</td>
          <td class="px-5 py-3 text-zinc-500">Low</td>
          <td class="px-5 py-3 text-zinc-500">175-185&deg;F</td>
          <td class="px-5 py-3"><span class="text-zinc-700">★★★★★</span></td>
          <td class="px-5 py-3 text-zinc-500">$10-60 / 100g</td>
        </tr>
        <tr class="bg-white hover:bg-leaf-50/50 transition-colors cursor-pointer" data-filter-type="Yellow">
          <td class="px-5 py-3 font-medium text-zinc-800">Yellow</td>
          <td class="px-5 py-3 text-zinc-500">5-10% (lightly oxidized)</td>
          <td class="px-5 py-3 text-zinc-500">Low</td>
          <td class="px-5 py-3 text-zinc-500">175-185&deg;F</td>
          <td class="px-5 py-3"><span class="text-zinc-700">★★★★☆</span></td>
          <td class="px-5 py-3 text-zinc-500">$15-80 / 100g</td>
        </tr>
        <tr class="bg-bone-50/50 hover:bg-leaf-50/50 transition-colors cursor-pointer" data-filter-type="Oolong">
          <td class="px-5 py-3 font-medium text-zinc-800">Oolong</td>
          <td class="px-5 py-3 text-zinc-500">10-70% (partially oxidized)</td>
          <td class="px-5 py-3 text-zinc-500">Low-Medium</td>
          <td class="px-5 py-3 text-zinc-500">185-205&deg;F</td>
          <td class="px-5 py-3"><span class="text-zinc-700">★★★★☆</span></td>
          <td class="px-5 py-3 text-zinc-500">$8-200+ / 100g</td>
        </tr>
        <tr class="bg-white hover:bg-leaf-50/50 transition-colors cursor-pointer" data-filter-type="Black">
          <td class="px-5 py-3 font-medium text-zinc-800">Black</td>
          <td class="px-5 py-3 text-zinc-500">100% (fully oxidized)</td>
          <td class="px-5 py-3 text-zinc-500">Medium</td>
          <td class="px-5 py-3 text-zinc-500">195-212&deg;F</td>
          <td class="px-5 py-3"><span class="text-zinc-700">★★★★★</span></td>
          <td class="px-5 py-3 text-zinc-500">$8-50 / 100g</td>
        </tr>
        <tr class="bg-bone-50/50 hover:bg-leaf-50/50 transition-colors cursor-pointer" data-filter-type="Dark">
          <td class="px-5 py-3 font-medium text-zinc-800">Dark</td>
          <td class="px-5 py-3 text-zinc-500">Post-fermented</td>
          <td class="px-5 py-3 text-zinc-500">Medium-High</td>
          <td class="px-5 py-3 text-zinc-500">200-212&deg;F</td>
          <td class="px-5 py-3"><span class="text-zinc-700">★★★★☆</span></td>
          <td class="px-5 py-3 text-zinc-500">$10-500+ / 357g</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
"""
# Insert after Six Types section, before Find Your Tea
finder_marker = "<!-- ========== FIND YOUR TEA ========== -->"
content = content.replace(finder_marker, matrix_html + "\n" + finder_marker)

# ====================================================================
# 3. BUYING GUIDE: Add buying decision section before Famous Teas
# ====================================================================
buying_section = """
<!-- ========== BUYING GUIDE ENTRY ========== -->
<section class="py-16 bg-gradient-to-b from-bone-50 to-white">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-10">
      <p class="text-amber-600 text-sm font-mono uppercase tracking-[0.18em] mb-3">Ready to Buy?</p>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
        How to Buy Authentic Chinese Tea
      </h2>
      <p class="text-zinc-500 max-w-xl mx-auto">
        The tea market can be confusing. Here\u2019s what to look for before you spend a dollar \u2014 so you get the real thing, not a supermarket imitation.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div class="bg-white rounded-2xl border border-zinc-200 p-6 hover:border-leaf-200 transition-colors">
        <div class="w-10 h-10 rounded-xl bg-leaf-50 flex items-center justify-center text-leaf-600 mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <h3 class="font-semibold text-zinc-900 mb-2">1. Look for Harvest Dates</h3>
        <p class="text-sm text-zinc-500">Freshness matters. Good vendors list the harvest season (spring/autumn) and year. Pre-Qingming green teas are at their peak. Tea is an agricultural product \u2014 treat it like fresh produce, not a pantry staple.</p>
      </div>
      <div class="bg-white rounded-2xl border border-zinc-200 p-6 hover:border-leaf-200 transition-colors">
        <div class="w-10 h-10 rounded-xl bg-leaf-50 flex items-center justify-center text-leaf-600 mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
        </div>
        <h3 class="font-semibold text-zinc-900 mb-2">2. Check the Origin</h3>
        <p class="text-sm text-zinc-500">The best vendors specify the mountain, village, or county \u2014 not just the province. \u201cFujian tea\u201d means little; \u201cTongmu Village, Wuyi Mountains\u201d means everything. Specificity signals quality.</p>
      </div>
      <div class="bg-white rounded-2xl border border-zinc-200 p-6 hover:border-leaf-200 transition-colors">
        <div class="w-10 h-10 rounded-xl bg-leaf-50 flex items-center justify-center text-leaf-600 mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
        <h3 class="font-semibold text-zinc-900 mb-2">3. Scroll Down for Per-Tea Guides</h3>
        <p class="text-sm text-zinc-500">Each tea below has a detailed buying guide: what to look for, common scams, price ranges, and search keywords. Click any tea row to expand its full profile with quality checks specific to that variety.</p>
      </div>
    </div>
  </div>
</section>
"""
# Insert before Famous Teas Explorer
famous_marker = "<!-- ========== FAMOUS TEAS EXPLORER ========== -->"
content = content.replace(famous_marker, buying_section + "\n" + famous_marker)

# ====================================================================
# 4. Add JS to tea-guide.js: type card + matrix click-to-filter
# ====================================================================
with open(r"D:\workspaces\website\chinese-tea\public\tea-guide.js", "r", encoding="utf-8") as f:
    js = f.read()

# Add click handlers for type cards (Six Types section) and matrix rows
filter_js = """

  // Type card click to filter
  document.querySelectorAll(\u0027[data-type]\u0027).forEach(card => {
    card.addEventListener(\u0027click\u0027, () => {
      const type = card.dataset.type;
      if (!type || type === \u0027all\u0027) return;
      // Click the corresponding filter button
      const filterBtn = document.querySelector(\u0060#tea-filter [data-filter=\u0022${type}\u0022]\u0060);
      if (filterBtn) { filterBtn.click(); filterBtn.scrollIntoView({ behavior: \u0027smooth\u0027, block: \u0027center\u0027 }); }
    });
  });

  // Matrix row click to filter
  document.querySelectorAll(\u0027[data-filter-type]\u0027).forEach(row => {
    row.addEventListener(\u0027click\u0027, () => {
      const type = row.dataset.filterType;
      const filterBtn = document.querySelector(\u0060#tea-filter [data-filter=\u0022${type}\u0022]\u0060);
      if (filterBtn) { filterBtn.click(); document.getElementById(\u0027famous\u0027).scrollIntoView({ behavior: \u0027smooth\u0027 }); }
    });
  });
"""

# Insert before the closing of DOMContentLoaded
js = js.replace("  renderBrew(\u0022green\u0022);", "  renderBrew(\u0022green\u0022);" + filter_js)

with open(r"D:\workspaces\website\chinese-tea\public\tea-guide.js", "w", encoding="utf-8") as f:
    f.write(js)

# Write back index.astro
with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

print(f"DONE. index.astro: {len(content)} chars, tea-guide.js: {len(js)} chars")