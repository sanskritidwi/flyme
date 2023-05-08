function findMinPlanes(array) {
  const n = array.length;
  let currentFuel = array[0];
  let planes = 1;
  
  for (let i = 1; i < n; i++) {
    if (currentFuel === 0) {
      return -1;
    }
    
    // on reaching the next airpot the fuel will be used, so we decrement in by one unit
    currentFuel--;
    
    // if no fuel in current plane then we choose a new plane
    if (currentFuel === 0) {
      planes++;
      currentFuel = array[i];
    } else {
      // check max between the two and proceed to next airport
      currentFuel = Math.max(currentFuel, array[i]);
    }
  }
  
  return planes;
}



console.log(findMinPlanes([2,1,2,3,1]));

console.log(findMinPlanes( [1,6,3,4,5,0,0,0,6]));