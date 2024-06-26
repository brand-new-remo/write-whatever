const a = 1;

const A = function () {
    const a = 2;

    return function() {
        console.log(a);
    }
}

const B = function () {
    const a = 3;

    const D = A();

    return D;
}

const E = B();

E();
