'use strict'

function solve(args) {
    let a = +args[0],
        b = +args[1],
        c = +args[2],
        d = (Math.pow(b, 2)) - (4 * a * c),
        x1 = null,
        x2 = null;
    if (d > 0) {
        x1 = ((-b + Math.sqrt(d)) / (2 * a));
        x2 = ((-b - Math.sqrt(d)) / (2 * a));
        if (x1 < x2) {
            console.log(`x1=${x1.toFixed(2)}; x2=${x2.toFixed(2)}`);
        } else {
            console.log(`x1=${x2.toFixed(2)}; x2=${x1.toFixed(2)}`);
        }
    } else if (d === 0) {
        x1 = (-b) / (2 * a);
        console.log(`x1=x2=${x1.toFixed(2)}`);
    } else {
        console.log('no real roots');
    }
}

solve(['-0.5', '4', '-8']);
solve(['5', '2', '8']);
solve(['2', '5', '-3']);

solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);
solve(['0.2', '9.572', '0.2']);