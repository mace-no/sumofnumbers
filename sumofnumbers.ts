function sumFor(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1));
}

function sumTheFunctionalWay(arr: number[]): number {
  let sum = 0;
  arr.forEach(value => sum += value);
  return sum;
}

const testArr = [1, 2, 3, 4];

console.log(sumFor(testArr));
console.log(sumWhile(testArr));
console.log(sumRecursion(testArr));
console.log(sumTheFunctionalWay(testArr));
