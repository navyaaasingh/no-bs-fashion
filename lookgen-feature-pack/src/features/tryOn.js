import { LOOK_WASH } from "../data/trendData.js";
import { readImageFile, validateImageFile, formatFileSize } from "../utils/imageUpload.js";

export async function loadTryOnPhoto(file, dom) {
  const error = validateImageFile(file);
  if (error) throw new Error(error);

  const src = await readImageFile(file);
  dom.status.textContent = `${file.name.toUpperCase()} · ${formatFileSize(file.size)}`;
  dom.beforeImage.src = src;
  dom.afterImage.src = src;
  dom.beforeImage.classList.add("visible");
  dom.afterImage.classList.add("visible");
  dom.beforeStage.classList.add("has-image");
  dom.afterStage.classList.add("has-image");

  return { file, src };
}

export function updateTryOnOverlay(state, outfit, dom) {
  dom.title.textContent = outfit.name.toUpperCase();
  dom.meta.innerHTML = [state.occasion, state.vibe, outfit.pieces[0].name]
    .map((item) => `<span>${item}</span>`)
    .join("");
  dom.wash.style.background = LOOK_WASH[outfit.color] || LOOK_WASH.Monochrome;
}

export function attachSlider(preview, afterPanel, sliderLine) {
  let dragging = false;

  const setPosition = (clientX) => {
    const rect = preview.getBoundingClientRect();
    const percent = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    afterPanel.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    sliderLine.style.left = `${percent}%`;
  };

  preview.addEventListener("mousedown", (event) => {
    dragging = true;
    setPosition(event.clientX);
  });
  window.addEventListener("mousemove", (event) => {
    if (dragging) setPosition(event.clientX);
  });
  window.addEventListener("mouseup", () => {
    dragging = false;
  });

  return () => {
    const rect = preview.getBoundingClientRect();
    setPosition(rect.left + rect.width / 2);
  };
}
