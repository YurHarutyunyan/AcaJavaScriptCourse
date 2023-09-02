function createObject(){

    let age ='not given a value';
    let name ='not given a value';

    return{

        setname:function(givenName){
            name=givenName;
        },

        getName:function(){
            return name;
        },

        getAge:function(){
            return age;
        },

        setAge:function(givenAge){
            age=givenAge;
        },

    }

}
