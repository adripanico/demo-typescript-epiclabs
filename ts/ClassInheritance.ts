'use strict';

class Foo {
    private a: any = 10; //
    public b: any;
    protected c: any;
    public static s = 10;

    constructor(b: any, c: any) {
        this.b = this.c = c;
        this.b = b;
    }

    public f(): any[] {
        return [this.a, this.b, this.c];
    }

    public getA(): any {
        return this.a;
    }
}

let foo: Foo = new Foo('hello', {x: 1, y: 0});
console.log(foo.f());

class Bar extends Foo {
    constructor(a: any, b: any) {
        super(b, Bar.s);
    }

    public g(): any[] {
        // return [this.a, this.b, this.c]; // Err!
        return [this.getA(), this.b, this.c];
    }
}

class Barr extends Foo {
    constructor() {
        super(1, 2);
    }
}

let bar: Bar = new Bar(['one', 'two', 'three'], 1);
console.log(bar.f());

//  var ClassName = (function () {
//      ...
//  }());