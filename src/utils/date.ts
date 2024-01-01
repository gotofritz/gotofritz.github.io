export function getFormattedDate(
  date: string | number | Date,
  options: Intl.DateTimeFormatOptions = {},
  locale: Intl.LocalesArgument = "en-GB",
) {
  const formatOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...options,
  };
  const dateTimeFormat = new Intl.DateTimeFormat(
    locale as string,
    formatOptions,
  );
  const parts = dateTimeFormat.formatToParts(new Date(date));
  const partValues = parts.map((p) => p.value);

  return `${partValues[0]} ${partValues[2]?.substring(0, 3)} ${partValues[4]} `;
}
