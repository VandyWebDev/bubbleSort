function bubbleSort(array) {
  for(let i = 0; i < array.length; i++){
    
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[j-1]){
        let temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
        
      }
      console.log(array)
    }
  }
  return array;
}

bubbleSort([5,4,3,2,1]);
