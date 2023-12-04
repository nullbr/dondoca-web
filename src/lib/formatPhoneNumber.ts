export function formatPhoneNumber(number: string): string {
  const areaCode = number.slice(0, 2);
  const prefix = number.slice(2, 7);
  const suffix = number.slice(7);

  return `(${areaCode})${prefix}-${suffix}`;
}
