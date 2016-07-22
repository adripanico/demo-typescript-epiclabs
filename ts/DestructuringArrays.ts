class DestructuringArrays {
    public static main(): number {
        let init = [10, 20];
        let a: number;
        let b: number | number[];
        const c: number = 20;

        // destructuring
        [a, b] = init;
        console.log(a, b);

        //swaping!
        // [a, b] = [b, a]; // not cool for TypeScript. b could be an array, and a cannot be souch thing!
        [a, b] = [b as number, a]; // that's better
        console.log(a, b);
        [a, b] = [<number>b, a]; // that's also Ok
        console.log(a, b);
        if (typeof b === 'number')
            [a, b] = [b as number, a]; // that's much better...
        console.log(a, b);
        // [a, c] = [c, a] // error … a = ???

        // destructuring the first element
        [a] = [1, 2, 3, 4];
        console.log(a);

        // destructuring with rest
        [a, ...b] = [1, 2, 3, 4];
        console.log(a, b);

        // destructuring to suit your tastes!
        [ , a, , b] = [1, 2, 3, 4];
        console.log(a, b);

        // this is madness!
        [a, , ...b] = [1, 2, 3, 4];
        console.log(a, b);

        return 0;
    }
}

DestructuringArrays.main();