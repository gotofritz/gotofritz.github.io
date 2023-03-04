export function stripHtml(dirtyString = ""): string {
  const re = RegExp(/<[^>]+?>/, "gm");
  return dirtyString.replaceAll(re, "");
}
