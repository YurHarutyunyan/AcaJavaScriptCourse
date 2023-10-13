var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"]
let first = new Date(2016,4,5)
let second = new Date(2017,8,1)
let date = new Date()

function getInterval(firstDate,secondDate){
    console.log(first.getMonth())
    console.log(date.getMonth(secondDate))
    let monthArray = []
        console.log()
    if(first.getMonth()>second.getMonth()){
        for(let i =secondDate.getMonth();i<firstDate.getMonth();i++){
            monthArray.push(month[i])
        }
    }else{
        for(let i =firstDate.getMonth();i<secondDate.getMonth();i++){
            monthArray.push(month[i])
        }
    }
    return monthArray;
}
