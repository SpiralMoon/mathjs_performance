import {add, divide, fraction, multiply, subtract, number} from "mathjs";

function compareAdd () {

    console.log('========== Add ==========');

    const start = new Date();

    let result = 0;

    for (let i = 1; i <= 10000000; i++) {
        result += i;
    }

    const end = new Date();

    const start2 = new Date();

    let result2 = 0;

    for (let i = 1; i <= 10000000; i++) {
        result2 = add(result2, i);
    }

    const end2 = new Date();

    const start3 = new Date();

    let result3 = fraction(1);

    for (let i = 1; i <= 10000000; i++) {
        result3 = add(result3, fraction(i));
    }

    const end3 = new Date();

    console.log("Loop : ", 10000000)
    console.log("Native operator + : ", end.getTime() - start.getTime(), 'ms');
    console.log("mathjs add() : ", end2.getTime() - start2.getTime(), 'ms');
    console.log("mathjs fraction add() : ", end3.getTime() - start3.getTime(), 'ms');
}

function compareSubtract() {

    console.log('========== Subtract ==========');

    const start = new Date();

    let result = 0;

    for (let i = 1; i <= 10000000; i++) {
        result -= i;
    }

    const end = new Date();

    const start2 = new Date();

    let result2 = 0;

    for (let i = 1; i <= 10000000; i++) {
        result2 = subtract(result2, i);
    }

    const end2 = new Date();

    const start3 = new Date();

    let result3 = fraction(1);

    for (let i = 1; i <= 10000000; i++) {
        result3 = subtract(result3, fraction(i));
    }

    const end3 = new Date();

    console.log("Loop : ", 10000000)
    console.log("Native operator - : ", end.getTime() - start.getTime(), 'ms');
    console.log("mathjs subtract() : ", end2.getTime() - start2.getTime(), 'ms');
    console.log("mathjs fraction subtract() : ", end3.getTime() - start3.getTime(), 'ms');
}

function compareMultiply() {

    console.log('========== Multiply ==========');

    const start = new Date();

    let result = 1;

    for (let i = 1; i <= 10000000; i++) {
        result *= i;
    }

    const end = new Date();

    const start2 = new Date();

    let result2 = 1;

    for (let i = 0; i < 10000000; i++) {
        result2 = multiply(result2, i);
    }

    const end2 = new Date();

    const start3 = new Date();

    let result3 = fraction(1);

    for (let i = 1; i <= 10000000; i++) {
        result3 = multiply(result3, fraction(i));
    }

    const end3 = new Date();

    console.log("Loop : ", 10000000)
    console.log("Native operator * : ", end.getTime() - start.getTime(), 'ms');
    console.log("mathjs multiply() : ", end2.getTime() - start2.getTime(), 'ms');
    console.log("mathjs fraction multiply() : ", end3.getTime() - start3.getTime(), 'ms');
}

function compareDivide() {

    console.log('========== Divide ==========');

    const start = new Date();

    let result = 1;

    for (let i = 1; i <= 10000000; i++) {
        result /= i;
    }

    const end = new Date();

    const start2 = new Date();

    let result2 = 1;

    for (let i = 1; i <= 10000000; i++) {
        result2 = divide(result2, i);
    }

    const end2 = new Date();

    const start3 = new Date();

    let result3 = fraction(1);

    for (let i = 1; i <= 10000000; i++) {
        result3 = divide(result3, fraction(i));
    }

    const end3 = new Date();

    console.log("Loop : ", 10000000)
    console.log("Native operator / : ", end.getTime() - start.getTime(), 'ms');
    console.log("mathjs divide() : ", end2.getTime() - start2.getTime(), 'ms');
    console.log("mathjs fraction divide() : ", end3.getTime() - start3.getTime(), 'ms');
}

function wrappingFraction() {

    console.log('========== Wrapping fraction ==========')

    const start = new Date();

    for (let i = 1; i <= 10000000; i++) {
        fraction(i);
    }

    const end = new Date();

    console.log("Loop : ", 10000000)
    console.log("Fraction wrapping speed : ", end.getTime() - start.getTime(), 'ms');
}

compareAdd();
compareSubtract();
compareMultiply();
compareDivide();
wrappingFraction();

