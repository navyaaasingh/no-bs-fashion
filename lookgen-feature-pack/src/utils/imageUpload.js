export function validateImageFile(file) {
  if (!file) return "No file selected.";
  if (!file.type.startsWith("image/")) return "Please upload an image file.";
  if (file.size > 10 * 1024 * 1024) return "Image must be under 10MB.";
  return "";
}

export function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
