'use strict';

class MyIterable {
    private elements: any[];

    constructor(elements: any[]) {
        this.elements = elements;
    }

    *[Symbol.iterator]() {
        let i: number = 0;
        while(this.elements[i] !== undefined) {
            yield this.elements[i];
            i++;
        }
    }
}

let myIterable = new MyIterable([5, '10', 'hola', {x: 0}]);
for (let element of myIterable)
    console.log(element);

function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

function* fibonacci(){
  var fn1 = 0;
  var fn2 = 1;
  while (true){  
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset){
        fn1 = 0;
        fn2 = 1;
    }
  }
}
var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2