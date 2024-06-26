// function Parent(type) {
//     this.type = type
// }

// function Child(name) {
//     Parent.call(this);
//     this.name = name;
// }

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;


function Parent(type) {
    this.type = type
}

function Child(name) {
    Parent.call(this);
    this.name = name;
}

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;
function inheriteObject(child, parent) {
    const prototype = Object.create(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}