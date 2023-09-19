class CoffeeShop{
    #menu = [];
    #orderList=[]
    #dueAmount=0

    constructor(name){
        this.name=name;
    }
    get menu(){
        return this.#menu
    } 

    set addAnItemToMenu(item){
        if(item instanceof Item){
            this.#menu.push(item)
        }else{
            console.log(`u should pass Item instance`)
        }
    }
    
    get orderList(){
        if(this.#orderList.length===0)console.log('all orders are fullfiled')
        else{
            for(let orderListItem of this.#orderList){
                console.log(orderListItem.name)
            }
            return this.#orderList;
        }
    }
    
    set addToOrderList(item){
        if(item instanceof Item){
            this.#orderList.push(item);
        }
    }
    
    fulfillOrder(){
        this.#dueAmount+=1;
        this.#orderList.shift()
        console.log('order fullfiled') 
    }
    
    get dueAmount(){
        return this.#dueAmount;
    }
    
    cheapestItem(){
        const cheapest={
            name:'infinity',
            price:Infinity
        }
        for(let item of this.#menu){
            if(cheapest.price > item.price){
                cheapest.name = item.name;
                cheapest.price = item.price;
            }
        }
        return cheapest;
    }
    
    drinksOnly(){
        const drinks = []
        for(let item of this.#menu){
            if(item.type==='drink')drinks.push(item)
        }
        return drinks;
     }
    
    foodOnly(){
        const food = []
        for(let item of this.#menu){
            if(item.type==='food')food.push(item)
        }
        return food;
     }
}

class Item{
    constructor(name,type,price){
        if(name)this.name=name
        else throw new Error('u shouldd specify name field')
        if(price)this.price=price;
        else throw new Error('u should specify price field')
        if(type==='food'||type==='drink'){
        this.type=type;
        }else{
            throw new Error('you should choose one of these types: food, drink')
        }
    }
}

 const shop = new CoffeeShop('shop');
 const coffee = new Item('coffe','drink',100)   
 const sandwich = new Item('sandwich','food',400)   
 const milkshake = new Item('milkshake','drink',1000)   
 shop.addAnItemToMenu=coffee;
 shop.addAnItemToMenu=sandwich;
 shop.addAnItemToMenu=milkshake;
 console.log(shop.foodOnly())
 console.log(shop.drinksOnly())

