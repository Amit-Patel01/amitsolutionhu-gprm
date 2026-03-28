import { data } from "../data/tech";

export function getLogoNameFromUrl(badgeUrl) {
  const match = badgeUrl.match(/logo=([^&]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export function getLogoColorFromUrl(badgeUrl) {
  const match = badgeUrl.match(/logoColor=([^&)]+)/);
  return match ? decodeURIComponent(match[1]) : "white";
}

export function getBadgeStyleFromUrl(badgeUrl) {
  const match = badgeUrl.match(/style=([^&]+)/);
  return match ? match[1] : "for-the-badge";
}

export function changeBadgeStyle(badgeUrl, newStyle) {
  return badgeUrl.replace(/style=[^&]+/, `style=${newStyle}`);
}

export function changeAllBadgesStyle(badgeArray, newStyle) {
  return badgeArray.map((url) => changeBadgeStyle(url, newStyle));
}

export function findTechByLabel(label) {
  const searchLabel = label.toUpperCase();
  for (const category of Object.keys(data)) {
    const found = data[category].find(
      (item) => item.label.toUpperCase() === searchLabel
    );
    if (found) return found;
  }
  return null;
}

export function findTechCategory(label) {
  const searchLabel = label.toUpperCase();
  for (const category of Object.keys(data)) {
    const found = data[category].find(
      (item) => item.label.toUpperCase() === searchLabel
    );
    if (found) return category;
  }
  return null;
}

export function generateBadgeUrl(label, color, logo, logoColor, style) {
  const encodedLabel = encodeURIComponent(label);
  const encodedColor = encodeURIComponent(color);
  const encodedLogo = encodeURIComponent(logo);
  const encodedLogoColor = encodeURIComponent(logoColor);
  return `![${label}](https://img.shields.io/badge/${encodedLabel}-${encodedColor}?style=${style}&logo=${encodedLogo}&logoColor=${encodedLogoColor})`;
}

export function getAllTechLabels() {
  const labels = [];
  for (const category of Object.keys(data)) {
    data[category].forEach((item) => labels.push(item.label));
  }
  return labels;
}

export function getTotalTechCount() {
  let count = 0;
  for (const category of Object.keys(data)) {
    count += data[category].length;
  }
  return count;
}
