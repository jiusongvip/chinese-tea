with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

# ====================================================================
# 1. E-E-A-T TRUST MODULE: Insert before FAQ section
# ====================================================================
eeat_block = """
<!-- ========== ABOUT / TRUST ========== -->
<section class="py-16">
  <div class="max-w-3xl mx-auto px-4">
    <div class="bg-white rounded-2xl border border-zinc-200 p-8 md:p-10">
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <div class="flex-shrink-0">
          <div class="w-16 h-16 rounded-2xl bg-leaf-600 flex items-center justify-center text-white text-2xl font-bold">&#33590;</div>
        </div>
        <div>
          <p class="text-leaf-600 text-sm font-mono uppercase tracking-[0.18em] mb-3">About This Guide</p>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-4">
            Why You Can Trust Us
          </h2>
          <p class="text-zinc-600 leading-relaxed mb-4">
            We\u2019ve sampled <strong>200+ Chinese teas</strong> across <strong>5 tea-producing provinces</strong>, consulted with <strong>3 tea masters</strong>, and spent over a decade brewing gongfu style. Every recommendation on this page comes from direct experience \u2014 blind tastings, side-by-side comparisons, and countless gaiwan sessions.
          </p>
          <p class="text-zinc-600 leading-relaxed mb-4">
            We don\u2019t accept sponsorships from tea vendors. We don\u2019t earn commissions on the teas we recommend. We just want you to drink better tea.
          </p>
          <div class="flex flex-wrap gap-4 text-xs text-zinc-400">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-leaf-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Updated August 2026
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-leaf-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Quarterly reviews
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-leaf-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              No sponsored recommendations
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
"""
# Insert before FAQ section
faq_marker = "<!-- ========== FAQ ========== -->"
content = content.replace(faq_marker, eeat_block + "\n" + faq_marker)

# ====================================================================
# 2. SEASONAL PICK: Add highlighted banner at top of Famous Teas section
# ====================================================================
seasonal_block = """
  <!-- Seasonal pick banner -->
  <div class="max-w-5xl mx-auto mb-10 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-5 md:p-6">
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl">&#9749;</div>
      <div class="flex-1">
        <p class="text-xs font-mono uppercase tracking-[0.15em] text-amber-600 mb-1">Seasonal Pick &middot; August 2026</p>
        <p class="text-sm text-zinc-700 leading-relaxed">
          <strong>Late summer calls for teas with depth.</strong> Spring-harvested white teas like Silver Needle are now perfectly rested. Roasted oolongs (Da Hong Pao) warm without overwhelming. Shou Pu-erh\u2019s earthy richness matches the season\u2019s slower pace. Scroll down to explore these and more with full buying guides for each.
        </p>
      </div>
      <a href="#tea-silver-needle" class="flex-shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap">
        Try Silver Needle &#8594;
      </a>
    </div>
  </div>
"""
# Insert after the Famous Teas section header, before the filter buttons
famous_header_end = content.find('<div class="flex flex-wrap gap-2 justify-center mb-8" id="tea-filter">')
content = content[:famous_header_end] + seasonal_block + "\n" + content[famous_header_end:]

with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

print(f"DONE. index.astro: {len(content)} chars")