// Code your solutions in this file
function writeCards(arr, element){
  for(let i = 0; i<arr.length;i++){
    arr[i] = "Thank you, " + arr[i] + ", for the wonderful " + element + " gift!";
  }
  return arr;
}

function countDown(num){
  let i = -1
  while(num > 0){
    console.log(num)
    num--;
  }
}