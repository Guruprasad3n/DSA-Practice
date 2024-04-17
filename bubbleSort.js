function bubbleSort(arr) {
    let swapped;
    for (let j = arr.length - 1; j > 0; j--) {
      swapped = false;
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      if (!swapped) break;
    }
  }
  
  let arr = [-6, -10, 4, 3, 1, 20];
  bubbleSort(arr);
  console.log(arr);
  















// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (var i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//     // console.log(arr);
//   } while (swapped);
// }
// let arr = [-6, -10, 4, 3, 1, 20];
// bubbleSort(arr);
// console.log(arr)


