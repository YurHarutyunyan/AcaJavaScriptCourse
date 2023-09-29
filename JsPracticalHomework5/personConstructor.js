class PersonConstructor {
  stomach = [];
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat(someFood) {
    if (this.stomach.length !== 10) {
      this.stomach.push(someFood);
    }
  }
  poop() {
    this.stomach = [];
  }
  toString() {
    return `${this.name},${this.age}`;
  }
}
let p = new PersonConstructor("Mary", 14);

p.eat("sandwich");
p.eat("sandwich");
console.log(p.stomach);
p.poop();
console.log(p.stomach);
console.log(p.toString());
