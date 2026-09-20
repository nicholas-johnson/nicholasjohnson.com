export const formatDate = (value: string | undefined) => {
  if (!value) return null;
  const trimmed = value.trim();
  if (/^\d{4}$/.test(trimmed)) return trimmed;

  const date = new Date(trimmed);
  if (Number.isNaN(date.getTime())) return null;

  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });
};

export const writingTimestamp = (value: string | undefined) => {
  const time = Date.parse(value ?? "");
  return Number.isNaN(time) ? 0 : time;
};
