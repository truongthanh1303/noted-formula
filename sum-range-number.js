/*
* @arr: is an sequence array like [1,2,3,4,5...]
*/
function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return ((max - min + 1) * (max + min)) / 2;
}

sumAll([1, 4]); // = 10
sumAll([5, 10]); // = 45
