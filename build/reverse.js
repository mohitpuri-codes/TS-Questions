Array.prototype.myReverse = function () {
  let j = this.length - 1;
  let i = 0;
  while (i <= j) {
    let temp = this[i];
    this[i] = this[j];
    this[j] = temp;
    i++;
    j--;
  }
  return this;
};
console.log([1, 2, 3].myReverse());
