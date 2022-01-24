function flattenArray(arr) {
  const flat = [].concat(...arr); // magic here
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
};

flattenArray([1, [2], [3, [[4]]]]);

function flattenArray2(arr) {
  const flattenedArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i])); 
      // or
      // flattenedArray = flattenedArray.concat(steamrollArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

flattenArray2([1, [2], [3, [[4]]]]);
