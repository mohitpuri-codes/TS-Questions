let arr1:number[] = [5, 19, 22, 8, 0, 11, 44, 33];
let max:number = arr1[0];
let secondLargest:number = -Infinity;

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max) {
    secondLargest = max;
    max = arr1[i];
  } else if (secondLargest < arr1[i] && arr1[i] < max) {
    secondLargest = arr1[i];
  }
}
console.log(secondLargest);