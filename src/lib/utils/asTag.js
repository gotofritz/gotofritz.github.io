export const asTag = (originalTag = "") =>
  originalTag.toLowerCase().replace(/[^a-z0-9- ]/g, "");
