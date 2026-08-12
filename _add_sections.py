path = r"D:\workspaces\website\chinese-tea\src\pages\index.astro"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

coldbrew = """
<!-- ========== COLD BREW GUIDE ========== -->
<section id="coldbrew" class="py-20">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-14">
      <p class="text-sky-600 text-sm font-mono uppercase tracking-[0.18em] mb-3">Summer Method</p>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Cold Brew Chinese Tea (Leng Pao)</h2>
      <p class="text-zinc-500 max-w-2xl mx-auto">Cold brewing is not iced tea. It is a different extraction method that produces a sweeter, zero-bitter cup.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div>
        <h3 class="font-semibold text-zinc-900 mb-4">Why Cold Brew Works</h3>
        <p class="text-sm text-zinc-500 leading-relaxed mb-4">Hot water rapidly extracts catechins and tannins — the compounds behind bitterness. Cold water extracts them much more slowly while still pulling out amino acids and aromatics. The result: naturally sweet, mellow tea that is almost impossible to over-brew.</p>
        <h3 class="font-semibold text-zinc-900 mb-3 mt-6">Best Teas for Cold Brew</h3>
        <div class="space-y-2 text-sm text-zinc-600">
          <div class="flex gap-2"><span class="text-emerald-600 font-medium w-24 flex-shrink-0">Green</span> Longjing, Biluochun — crisp, refreshing</div>
          <div class="flex gap-2"><span class="text-amber-600 font-medium w-24 flex-shrink-0">White</span> Silver Needle — sweet, melon-forward</div>
          <div class="flex gap-2"><span class="text-orange-600 font-medium w-24 flex-shrink-0">Light Oolong</span> Tie Guan Yin — floral, cooling</div>
          <div class="flex gap-2"><span class="text-red-600 font-medium w-24 flex-shrink-0">Avoid</span> Roasted, black, pu-erh — need heat</div>
        </div>
      </div>
      <div>
        <div class="bg-white rounded-2xl border border-zinc-200 p-6">
          <h3 class="font-semibold text-zinc-900 mb-3">Method</h3>
          <ol class="space-y-3 text-sm text-zinc-600">
            <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span> <span>Add <strong>5g of tea leaves</strong> to a 500ml bottle.</span></li>
            <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span> <span>Fill with <strong>cold filtered water</strong>.</span></li>
            <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span> <span>Refrigerate for <strong>4 to 8 hours</strong>.</span></li>
            <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span> <span>Strain, serve over ice. Leaves re-brew 1-2 more times.</span></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

"""

storage = """
<!-- ========== TEA STORAGE GUIDE ========== -->
<section id="storage" class="py-20 bg-bone-50">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-14">
      <p class="text-leaf-600 text-sm font-mono uppercase tracking-[0.18em] mb-3">Preservation</p>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">How to Store Chinese Tea</h2>
      <p class="text-zinc-500 max-w-2xl mx-auto">Proper storage keeps fresh tea vibrant for months or helps aged teas develop complexity over decades.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div class="bg-white rounded-2xl border border-zinc-200 p-6">
        <h3 class="font-semibold text-zinc-900 mb-3 flex items-center gap-2"><span class="text-emerald-600">Fresh</span> Green, White, Yellow</h3>
        <ul class="space-y-2 text-sm text-zinc-600">
          <li><strong>Airtight opaque container</strong> — ceramic, tin, or dark glass. Light and air are enemies.</li>
          <li><strong>Cool, dark place</strong> at room temperature. Never refrigerate; condensation ruins leaves.</li>
          <li><strong>Consume within 6 to 12 months</strong> of harvest. These teas do not improve with age.</li>
          <li><strong>Avoid:</strong> fridge, sunlight, plastic bags (absorb odors), proximity to spices or coffee.</li>
        </ul>
      </div>
      <div class="bg-white rounded-2xl border border-zinc-200 p-6">
        <h3 class="font-semibold text-zinc-900 mb-3 flex items-center gap-2"><span class="text-orange-600">Aged</span> Oolong and Black Tea</h3>
        <ul class="space-y-2 text-sm text-zinc-600">
          <li><strong>Light oolongs</strong> store like green tea — airtight, cool, under a year.</li>
          <li><strong>Roasted oolongs</strong> keep 1 to 2 years. Some are intentionally aged.</li>
          <li><strong>Black tea</strong> 1 to 2 years airtight. More forgiving but still fades.</li>
          <li>All benefit from a <strong>dedicated tea cabinet</strong>, not the kitchen spice rack.</li>
        </ul>
      </div>
      <div class="bg-white rounded-2xl border border-zinc-200 p-6">
        <h3 class="font-semibold text-zinc-900 mb-3 flex items-center gap-2"><span class="text-stone-600">Aging</span> Dark Tea and Pu-erh</h3>
        <ul class="space-y-2 text-sm text-zinc-600">
          <li><strong>Breathable storage</strong> — not airtight. Pu-erh needs airflow to age.</li>
          <li><strong>Stable environment</strong> — moderate humidity (60-70%), away from sun and vents.</li>
          <li><strong>Away from strong odors</strong> — pu-erh absorbs everything like a sponge.</li>
          <li><strong>Common mistake:</strong> sealing pu-erh in plastic stops aging. Let cakes breathe.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

"""

# Insert Cold Brew before TEA BY REGION
regions_marker = "TEA BY REGION"
idx = content.find(regions_marker)
content = content[:idx] + coldbrew + content[idx:]
print(f"Cold Brew added")

# Insert Storage before ABOUT / TRUST
about_marker = "ABOUT / TRUST"
idx = content.find(about_marker)
content = content[:idx] + storage + content[idx:]
print(f"Storage added")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print(f"Done. Size: {len(content)}")
