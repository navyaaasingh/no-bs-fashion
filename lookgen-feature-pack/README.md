# LOOKGEN feature pack

This folder mirrors the features added to the upgraded HTML file, but in a cleaner structure you can move into a multi-file project.

## Suggested structure

```text
lookgen-feature-pack/
  src/
    data/
      trendData.js
    features/
      roast.js
      trendIntel.js
      tryOn.js
    utils/
      imageUpload.js
    index.js
```

## How to use

1. Move the feature markup from the updated HTML into separate components or partials.
2. Import the modules from `src/index.js`.
3. Pass your shared app state and DOM refs into the setup functions.

## Shared state shape

```js
{
  occasion: "Business",
  vibe: "Minimal",
  color: "Monochrome",
  type: "Masc",
  season: "Summer",
  lastOutfit: null
}
```

## Notes

- `tryOn.js` handles image upload validation, before/after preview setup, and overlay metadata.
- `roast.js` builds a frontend-only outfit roast from the selected look plus upload metadata.
- `trendIntel.js` generates a trend score, trending styles, and AI insight cards.
- `imageUpload.js` keeps all file validation and FileReader logic in one place.
