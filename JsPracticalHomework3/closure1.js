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

