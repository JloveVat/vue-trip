import dayjs from "dayjs"

export function formatMonthDay(date) {
  return dayjs(date).format('MM月DD日')
}

export function getDiffDays(startDate, endDate) {
  console.log(dayjs(endDate).diff(startDate, 'days'));
  return dayjs(endDate).diff(startDate, 'days')
}