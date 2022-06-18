const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
export function dayDifference(date1, date2) {
  const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
  const dayDiff = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return dayDiff;
}
