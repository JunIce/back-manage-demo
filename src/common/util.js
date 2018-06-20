const isLeapYear = (year) => {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
}
const getMonthDays = (year, month) => {
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28)
}

const getWeekNumber = (now) => {
  let year = now.getFullYear()
  let month = now.getMonth()
  let days = now.getDate()

  for (var i = 0; i < month; i++) {
    days += getMonthDays(year, i)
  }

  let yearFirstDay = new Date(year, 0, 1).getDay() || 7

  let week = null
  if (yearFirstDay === 1) {
    week = Math.ceil(days / 7)
  } else {
    days -= (7 - yearFirstDay + 1)
    week = Math.ceil(days / 7) + 1
  }

  return week
}

export default {
  getWeekNumber
}
