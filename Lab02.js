// Print Helper
const print_helper = (func, param) => {
    console.log(`\n${func.name} Test:`);
    console.log("Parameter: ", param);
    if (param !== undefined) console.log("Result: ", func(param));
    else console.log("Result: ", func());
}

// Exercise 1
const greeter = myArray => {
    const greetText = "Hello ";

    for (const string of myArray) {
        console.log(greetText + string)
    }
}
console.log(`\n${greeter.name} Test:`);
greeter(["Hoon", "Lisa", "Yoonie", "Danny"]);

// Exercise 2
const capitalize = string => {
    const object = {
        upper: string[0].toUpperCase(),
        lower: [...string].map(char => char.toLowerCase()).slice(1).join("")
    };

    const { upper, lower } = object;
    return `${upper + lower}`;
}
print_helper(capitalize, "sometHing");


// Exercise 3
const capitalizedColors = colors => {
    return colors.map(color => capitalize(color));
}
print_helper(capitalizedColors, ['red', 'green', 'blue']);

// Exercise 4
const filterLessThan20 = numbers => {
    return numbers.filter(num => num < 20);
}
print_helper(filterLessThan20, [1, 60, 34, 30, 20, 5]);

// Exercise 5
const calculateSum = numbers => {
    return numbers.reduce((prev, num) => prev + num, 0);
}
const calculateProduct = numbers => {
    return numbers.reduce((prev, num) => prev * num, 1);
}
print_helper(calculateSum, [1, 2, 3, 4]);
print_helper(calculateProduct, [1, 2, 3, 4]);

// Exercise 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year)
        this.balance = balance
    }

    info() {
        return `${this.model} has a balance of $${this.balance}`;
    }
}
const car = new Car("Pontiac Firebird", 1976);
console.log(`\ncar.${car.details.name} Test:`);
console.log(car.details());
const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(`\nsedan.${sedan.info.name} Test:`);
console.log(sedan.info());