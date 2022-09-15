// Exercise 1
const gretter = myArray => {
    const greetText = "Hello ";

    for (const string of myArray) {
        console.log(greetText + string)
    }
}
console.log(`${gretter.name} Test:`);
gretter(["Hoon", "Lisa", "Yoonie", "Danny"]);

// Exercise 2
const capitalize = string => {
    const object = {
        upper: string[0].toUpperCase(),
        lower: [...string].map(char => char.toLowerCase()).slice(1).join("")
    };

    const { upper, lower } = object;
    return `${upper + lower}`;
}
console.log(`\n${capitalize.name} Test:`);
console.log(capitalize("sometHing"));
console.log(capitalize("COMP3123"));

// Exercise 3
const capitalizedColors = colors => {
    return colors.map(color => capitalize(color));
}
console.log(`\n${capitalizedColors.name} Test:`);
console.log(capitalizedColors(['red', 'green', 'blue']));

// Exercise 4
const filterLessThan20 = numbers => {
    return numbers.filter(num => num < 20);
}
console.log(`\n${filterLessThan20.name} Test:`);
console.log(filterLessThan20([1, 60, 34, 30, 20, 5]));

// Exercise 5
const calculateSum = numbers => {
    return numbers.reduce((prev, num) => prev + num, 0);
}
const calculateProduct = numbers => {
    return numbers.reduce((prev, num) => prev * num, 1);
}
console.log(`\n${calculateSum.name} Test:`);
console.log(calculateSum([1, 2, 3, 4]));
console.log(`\n${calculateProduct.name} Test:`);
console.log(calculateProduct([1, 2, 3, 4]));

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