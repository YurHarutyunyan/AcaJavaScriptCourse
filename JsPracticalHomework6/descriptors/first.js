const obj = {
    _name:undefined,
    get name(){
        return this._name
    },
    set name(name){
        this._name=name
    },
}
obj.name='goo'
console.log(obj.name)
