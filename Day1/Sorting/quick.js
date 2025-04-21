function quickSort(arr, s = 0, e = arr.length - 1) {
    if (s >= e) return; // Base case
    
    const pIndex = partition(arr, s, e);
    quickSort(arr, s, pIndex - 1); // Left subarray
    quickSort(arr, pIndex + 1, e); // Right subarray
  }
  
  function partition(arr, s, e) {
    const pivot = arr[e]; // Last element as pivot
    let i = s - 1; // Tracks the position for elements < pivot
    
    for (let j = s; j < e; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
      }
    }
    
    // Place pivot in correct position
    [arr[i + 1], arr[e]] = [arr[e], arr[i + 1]];
    return i + 1;
  }

  const arr = [6, 3, 9, 5, 2, 8];
  quickSort(arr);
  console.log(arr); 
  