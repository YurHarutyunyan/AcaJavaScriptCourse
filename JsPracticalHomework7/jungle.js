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
        if(this instanceof Monkey&&this.energy>=4)this.energy-=4;
        else if(this.energy>=2)this.energy-=2
        else{
            console.log(`${this.name} is too tired`);
        }
    }
    eat(food){
        if(this instanceof Tiger && food instanceof Grain){
            console.log('I cant eat that')
        }
        else if(this instanceof Monkey){
            this.energy+=2
        }else{
            this.energy+=5;
        }
    }
    sleep(){
        if(this instanceof Tiger){
            this.energy+=15
            console.log('Zzzzzz')
        }else{
            this.energy+=10
            console.log('Zzzzzz')    
        }
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
const grain = new Grain();
const meat = new Meat;
mon.sleep();
tig.sleep();
snk.sleep();
tig.sound();
tig.sound();
tig.sound();
jungle.soundOff();
jungle.soundOff();
