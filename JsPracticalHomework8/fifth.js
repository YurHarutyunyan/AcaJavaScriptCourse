
function getWeekOfMonth(date){
    let current = 1
    const[year,month,day] = date.split(',')
    let firstDayOfMonth = new Date(year,month-1,1);
    let dayofTheResult = day;
    let daysWithoutTail = dayofTheResult - 7 + firstDayOfMonth.getDay()
        while(daysWithoutTail>0){
            daysWithoutTail-=7;
            current+=1
        }
            return current    
    
}
console.log((getWeekOfMonth('2023,7,30')))
