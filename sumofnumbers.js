function sumFor(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function sumWhile(arr) {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
function sumRecursion(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumRecursion(arr.slice(1));
}
function sumTheFunctionalWay(arr) {
    var sum = 0;
    arr.forEach(function (value) { return sum += value; });
    return sum;
}
var testArr = [1, 2, 3, 4];
console.log(sumFor(testArr));
console.log(sumWhile(testArr));
console.log(sumRecursion(testArr));
console.log(sumTheFunctionalWay(testArr));
