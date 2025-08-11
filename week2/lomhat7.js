function sumArray(arr) {
      let sum = 0 ;
    for (let i=0 ; i < arr.length; i++) {
      
        sum += arr[i];
    }
    return sum ;
}
console.log(sumArray([1, 2, 3]));      
console.log(sumArray([2, 2, 2, 2]));   
console.log(sumArray([50, 50, 1]));    