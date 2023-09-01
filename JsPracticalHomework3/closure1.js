function createObject(value){
    let variable = 'the initial value';
    return {
         set : function (value){
            variable=value;
            return variable
        },
        get : function(){
            return variable;
        }
    } 
}
let a = createObject()
console.log(a.set(20))
console.log(a.get())
