
function getDay(string){
    let arr = string.split('/')
    let currentDay = new Date(`${arr[0]}/${arr[1]}/${arr[2]}`)
    let firstDayOfYear = new Date(`1/1/${arr[2]}`)
    let ms = currentDay.getTime()-firstDayOfYear.getTime()
    let days = ms/1000/60/60/24;
    console.log(days)
}
getDay('1/1/2022')
