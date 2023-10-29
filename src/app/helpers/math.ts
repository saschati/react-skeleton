export const calcPercent = (total: number, curr: number) => {
  return 1 - (total - curr) / total
}
