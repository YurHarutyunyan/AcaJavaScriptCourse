class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge(anotherPerson) {
    if (this.age < anotherPerson.age) {
      console.log(`${anotherPerson.name} is older than me`);
    } else if (this.age > anotherPerson.age) {
      console.log(`${anotherPerson.name} is younger than me`);
    } else {
      console.log(`${anotherPerson.name} is the same age as me`);
    }
  }
}
class Baby extends Person {
  constructor(name, age, favoriteToy) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }
  play() {
    return `Playing with ${this.favoriteToy}`;
  }
}
const b = new Baby("sam", 3, "boogi");
console.log(b.play());
