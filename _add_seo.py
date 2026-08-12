with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "r", encoding="utf-8") as f:
    content = f.read()

seo_block = """
<!-- ========== SEO TEA DETAILS (structured data for search engines) ========== -->
<section aria-label="Tea details for search indexing" style="display:none">
  {teaDetails.map((tea) => (
    <article id={"seo-" + tea.id}>
      <h2>{tea.name} ({tea.nameChinese})</h2>
      <p>{tea.type} tea from {tea.origin}. {tea.flavorShort}.</p>
      <h3>Flavor Profile</h3>
      <p>Aroma: {tea.flavor.aroma}. Taste: {tea.flavor.taste}. Color: {tea.flavor.color}. Body: {tea.flavor.body}. Caffeine: {tea.caffeine}. Harvest: {tea.harvest}.</p>
      <h3>Brewing Guide</h3>
      <p>Water: {tea.brewing.temp}. Gongfu: {tea.brewing.timeGongfu}. Western: {tea.brewing.timeWestern}. Vessel: {tea.brewing.vessel}. Ratio: {tea.brewing.ratio}. Infusions: {tea.brewing.infusions}.</p>
      <h3>Buying Guide</h3>
      <p>Entry: {tea.buying.priceEntry}. Premium: {tea.buying.priceAdvance}. Quality: {tea.buying.qualityCheck}. Watch out: {tea.buying.commonScams}. Search: {tea.buying.searchKeywords}.</p>
      <h3>History</h3>
      <p>{tea.history}</p>
      <p><strong>Ideal for:</strong> {tea.idealFor}</p>
    </article>
  ))}
</section>
"""

scripts_marker = "<!-- ========== CLIENT-SIDE SCRIPTS ========== -->"
content = content.replace(scripts_marker, seo_block + "\n" + scripts_marker)

with open(r"D:\workspaces\website\chinese-tea\src\pages\index.astro", "w", encoding="utf-8") as f:
    f.write(content)

print(f"SEO block inserted. Total: {len(content)} chars")