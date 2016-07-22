'use strict';

abstract class AbstractFoo {
    constructor() {
        //do nothing
    }

    abstract imNecessarySoYouCanBeAForClass (param: any): any;

    public f (): any {
        // do nothing
    }
}

class AbstractBar extends AbstractFoo {
    constructor() {
        super();
    }

    public imNecessarySoYouCanBeAForClass(param: any): any {
        // do nothing
    }
}

// let p: AbstractFoo = new AbstractFoo(); // Err!