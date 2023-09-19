class University{
    teachers=[];
    students = [];
    addMember(member){
        if(member instanceof UniversityMember){
            if(member.role==='teacher')this.teachers.push(member)
            else this.students.push(member);
        }else{
            console.log('parametre u have passed is not a member');
        }
    }
    startLesson(){
        this.teachers.forEach((member=>member.energy-=5))
        this.students.forEach((member=>member.energy-=2))
    }
}
class UniversityMember{
    energy=24
    constructor(name,age){
        this.age=age;
        this.name=name;
    }
    info(){
        console.log(this)
    }
}
class Teacher extends UniversityMember{
    role='teacher';
    constructor(name,age){
        super(name,age);
    }
}

class Student extends UniversityMember{
    role='student';
    constructor(name,age){
        super(name,age);
    }
}
const RAU = new University;
const st1 = new Student('xulio',18)
const st2 = new Student('iglesias',40)
const st3 = new Student('vardan',26)
const teach1 = new Teacher('Petrosyan',56)
const teach2 = new Teacher('Vardanyan',60)
const teach3 = new Teacher('Xulioyan',68)
const teach4 = new Teacher('Iglesyan',70)
RAU.addMember(st1)
RAU.addMember(st2)
RAU.addMember(st3)
RAU.addMember(teach1)
RAU.addMember(teach2)
RAU.addMember(teach3)
RAU.addMember(teach4)
RAU.startLesson()
teach1.info()
st1.info()