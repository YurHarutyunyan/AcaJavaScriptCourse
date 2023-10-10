class ImmutableClass {
    _name;
    _age;
    constructor(name, age) {
      this.name = name;
      this._age = age;
    }
    get name() {
      return this.name;
    }
    set name(smth){
      throw new Error('this instance is immuttable')
    }
    get age() {
      return this._age;
    }
    set age(smth){
      throw new Error('this instance is immuttable')  
    }
}
  
  
  
  
  
  