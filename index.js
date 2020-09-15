// Code your solutions in this file
function writeCards(arr, element){
  for(let i = 0; i<arr.length;i++){
    arr[i] = "Thank you, " + arr[i] + ", for the wonderful " + element + " gift!";
  }
  return arr;
}
