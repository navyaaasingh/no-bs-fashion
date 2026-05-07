import { SEASON_BOOST, TREND_STYLE_MAP, VIBE_BOOST } from "../data/trendData.js";

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function getTrendSnapshot(state, outfit) {
  const base = Math.round(outfit.score * 10);
  const freshness = clamp(base + (VIBE_BOOST[state.vibe] || 5) - 6, 62, 96);
  const relevance = clamp(base + (SEASON_BOOST[state.season] || 4) - 2, 64, 97);
  const wearability = clamp(base + (state.vibe === "Bold" ? -3 : 5), 60, 95);
  const trendScore = clamp(Math.round((freshness + relevance + wearability) / 3), 60, 97);

  return {
    trendScore,
    relevance,
    wearability,
    freshness,
    styles: TREND_STYLE_MAP[state.occasion] || ["Smart layering", "Modern basics", "Elevated staples"],
    insights: [
      {
        title: "What is landing",
        copy: `${outfit.name} works best when the ${state.vibe.toLowerCase()} direction stays crisp and the palette remains intentional.`,
      },
      {
        title: "Next smart move",
        copy: `Add one sharper accessory or texture shift to make this ${state.occasion.toLowerCase()} outfit feel more current.`,
      },
      {
        title: "AI read",
        copy: `${state.season} looks strongest right now when structure, wearability, and personality stay balanced.`,
      },
    ],
  };
}

export function renderTrendIntel(dom, trend) {
  dom.scoreValue.textContent = trend.trendScore;
  dom.scoreCaption.textContent =
    trend.trendScore >= 90
      ? "This look is hitting current style signals with almost no wasted motion."
      : trend.trendScore >= 80
        ? "Strong trend alignment with room for a bolder accent."
        : "Solid base. One sharper update would make it feel more current.";

  [
    [dom.relevanceFill, dom.relevanceLabel, trend.relevance],
    [dom.wearabilityFill, dom.wearabilityLabel, trend.wearability],
    [dom.freshnessFill, dom.freshnessLabel, trend.freshness],
  ].forEach(([fill, label, value]) => {
    fill.style.width = `${value}%`;
    label.textContent = `${value}%`;
  });

  dom.chipGrid.innerHTML = trend.styles.map((style) => `<div class="trend-chip">${style}</div>`).join("");
  dom.insightList.innerHTML = trend.insights
    .map((item) => {
      return `
        <div class="trend-insight-item">
          <div class="trend-insight-title">${item.title}</div>
          <div class="trend-insight-copy">${item.copy}</div>
        </div>
      `;
    })
    .join("");
}
