// Exercise 1
function capitalize_first_letters(string) {
    if (string.length == 0) return null

    arr = string.split(" ");

    let output_string = ""
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        output_string += (i != arr.length - 1) ? arr[i] + ' ' : arr[i];
    }

    return output_string;
    // Todo: need to delete the last space
}

// Exercise 2
function max(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Exercise 3
function right(string) {
    if (string.length <= 3) return string;

    const slice = string.length - 3
    return string.slice(slice) + string.slice(0, slice)
}

// Exercise 4
function angle_type(angle) {
    if (angle < 90) return "Acute Angle"
    if (angle == 90) return "Right Angle"
    if (angle < 180) return "Obtuse Angle"
    if (angle == 180) return "Straight Angle"
}

// this function is only for helping tests
function test_helper(func, testcases) {
    console.log(`\nTesting ${func.name}`);
    for (let i in testcases) {
        let result = null;
        if (func.name === "max") result = func(testcases[i][0], testcases[i][1], testcases[i][2]);
        else result = func(testcases[i]);
        console.log(`testcase: ${testcases[i]} results: ${result}`);
    }
}

test_helper(capitalize_first_letters, new Array("hello world", "my name is hoon", "GBC is the best!"));
test_helper(max, new Array(new Array(1, 2, 3), new Array(-1, 50, 100), new Array(500, 250, 1000)));
test_helper(right, new Array("string", "Pythong", "Javascript"));
test_helper(angle_type, new Array(47, 90, 153, 180));