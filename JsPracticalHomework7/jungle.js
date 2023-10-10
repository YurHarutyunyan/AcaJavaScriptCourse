class Jungle{
    static animals=[]
    soundOff(){
        for(const anasun of Jungle.animals){
            anasun.sound();
            console.log(anasun.name,anasun.energy)
        }
    } 
}
class Animal{
    
    isAlive=true;
    energy=0;
    constructor(name){
        Jungle.animals.push(this)
        this.name=name;
    }
    sound(){
        if(this.energy>=3)this.energy-=3
        else{
            console.log(`${this.name} is too tired`);
        }
    }
    eat(food){
            this.energy+=5
            this.energy+=5;
    }
    sleep(){
            this.energy+=10
    }
}
class Monkey extends Animal{
    constructor(name){
        super(name)
    }
    play(){
        if(this.energy<8){
            console.log("I'm too tired");
        }else{
            this.energy-=8
            console.log('Ooooo Ooooo')
        }
    }
    sound(){
        this.energy-=4;
    }
    eat(){
        this.energy+=2;
    }
}

class Snake extends Animal{
    constructor(name){
        super(name)
    }
}
class Tiger extends Animal{
    constructor(name){
        super(name)
    }
    eat(food){
        if(food instanceof(Grain)){
            console.log('I cant eeat this');
        }else{
            super.eat()
        }
    }
    sleep(){
        this.energy+=5; 
    }
}
class Food{
}
class Fish{
}
class Meat{
}
class Grain{
}
const jungle = new Jungle()
const mon = new Monkey('julvern');
const snk = new Snake('takanq');
const tig = new Tiger('piso');
const grain = new Grain('grain');
const meat = new Meat('meat');
console.log(tig,mon)
tig.sleep()
mon.sleep()
tig.eat(grain)
mon.eat(meat)
console.log(tig,mon)
