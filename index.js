
const addZero = (number) => String(number).length === 1 ? `0${number}` : String(number)

const getDateFormat = (date, separator ='.') => {
  if (!(date instanceof Date)) {
    return 'Первый параметр должен быть экземпляром класса Date!'}

    const todayMs = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()
    return [todayMs, monthIndex +1, year].map(addZero).join(separator)
    
}
console.log(getDateFormat(new Date('5, 5, 2024')))
