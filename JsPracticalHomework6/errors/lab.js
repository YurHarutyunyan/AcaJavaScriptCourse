let studentLabs2 = [
    {
    student: "Blake",
    myCode: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Jessica",
    runLab: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Mya",
    runLab: function (num) {
    return num * num;
    },
    },
    ];

    
function grade(students){
    for(let student of students){
    try{
        console.log(student.runLab())
            student.runLab();    
    }catch(Error){
        console.log('Error thrown')
    }
    }
}
grade(studentLabs2)