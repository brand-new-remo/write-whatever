function Person(name) {
    this.name = name;
}
const person = new Person()
console.log(Object.prototype.toString.call(person));