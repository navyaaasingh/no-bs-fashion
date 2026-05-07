import { clamp, getTrendSnapshot } from "./trendIntel.js";

export function buildRoastAnalysis(state, outfit, upload) {
  const trend = getTrendSnapshot(state, outfit);
  const seed = upload ? (upload.file.size % 11) - 5 : 0;
  const color = clamp(Math.round(trend.relevance + seed), 42, 97);
  const fit = clamp(Math.round(outfit.score * 10 + (state.vibe === "Streetwear" ? -3 : 2) + seed), 40, 96);
  const trendMetric = clamp(Math.round(trend.freshness + seed), 40, 97);
  const occasion = clamp(Math.round(trend.wearability + (state.occasion === "Gym" ? -4 : 3)), 45, 97);
  const score = clamp((((color * 0.24) + (fit * 0.3) + (trendMetric * 0.26) + (occasion * 0.2)) / 10), 4.8, 9.8);

  let vibe = "SAFE BUT SOLID";
  let verdict = `This look survived, but it feels like you stopped one styling decision early. ${outfit.name} has potential.`;

  if (score >= 8.8) {
    vibe = "ACTUALLY FIRE";
    verdict = `This is annoyingly good. The palette feels intentional, the silhouette behaves, and the whole outfit reads deliberate.`;
  } else if (score >= 7.5) {
    vibe = "CLEAN WITH EDGE";
    verdict = `There is real taste here. One stronger accessory or a riskier shoe would push it from polished to memorable.`;
  } else if (score >= 6.3) {
    vibe = "MID ENERGY";
    verdict = `The structure works harder than the personality. You are close, but the last 15 percent still matters.`;
  } else {
    vibe = "WE NEED TO TALK";
    verdict = `The pieces need a stronger throughline before this starts reading intentional. Good ingredients, messy assembly.`;
  }

  return {
    score: score.toFixed(1),
    vibe,
    verdict,
    tags: [
      { label: score >= 8 ? "Strong Silhouette" : "Needs Sharper Shape", type: score >= 8 ? "good" : "bad" },
      { label: trendMetric >= 82 ? "Trend Aware" : "Trend Lag", type: trendMetric >= 82 ? "good" : "neutral" },
      { label: color >= 75 ? "Color Harmony" : "Palette Drift", type: color >= 75 ? "good" : "bad" },
      { label: occasion >= 78 ? "Occasion Match" : "Context Risk", type: occasion >= 78 ? "good" : "neutral" },
    ],
    metrics: { color, fit, trend: trendMetric, occasion },
  };
}
