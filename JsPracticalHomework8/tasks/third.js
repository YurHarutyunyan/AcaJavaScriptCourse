function getDayOfWeek(date){
     let arr = date.split('/');
     let dateOfTheDay = new Date(`${arr[0]}/${arr[1]}/${arr[2]}`)
     let day = dateOfTheDay.getDay()
     console.log(day)
 }
 getDayOfWeek('9/23/2023')

