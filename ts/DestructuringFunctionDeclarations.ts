type C = { a: string, b?: number }

// destructuring an object in a function declaration
function f({a, b}: C): string {
    return b ? new Array(b + 1).join(a + ' ') : a; // ES6 already has a method for this -> str.repeat(count)
}

// using the destructuration to asign default values on the fly
// this will not work if we try pass an object of type C
function g({a, b} = {a: 'ahoj!', b: 1}): string {
    return b ? new Array(b + 1).join(a + ' ') : a;
}
// this will work with an object of type C as argument
function h({a, b}: C = {a: 'ahoj there!', b: 2}): string {
    return b ? new Array(b + 1).join(a + ' ') : a;
}
// and this will do too! (and it is the correct definition)
function i({a, b = 3}: C = {a: 'ahoj there fancy!'}): string {
    return b ? new Array(b + 1).join(a + ' ') : a;
}

class DestructuringFunctionDeclarations {
    public static main(): number {
        let c: C = {a: 'ahoj there!', b: 5}
        console.log(f(c));
        console.log(g());
        // console.log(g(c)); // Err!
        console.log(g({a: 'hola!', b: 3}));
        console.log(h());
        console.log(i());
        return 0;
    }
}

DestructuringFunctionDeclarations.main();