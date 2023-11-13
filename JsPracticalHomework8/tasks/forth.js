
 const formatDate = (date) => {
     var months = ["January","February","March","April","May","June","July",
             "August","September","October","November","December"]

           const [year,month,day] = date.split('-')

             console.log(year,'-','-',month,'-',day)

             console.log(`${day} ${months[month]} ${year}`)
 }
 formatDate('2020-5-14')

