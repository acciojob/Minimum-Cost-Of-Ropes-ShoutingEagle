function calculateMinCost() {
  //your code here
	let value = document.getElementById('rope-lengths').value;
	let resultFinal = document.getElementById('result');
  value = value.split(',');
  let arr = [];
  for(let i=0;i<value.length;i++){
    arr[i] = parseInt(value[i]);
  }
  arr = arr.sort(function (a,b){ return a-b;});
	if(arr.length==2){
		resultFinal.innerText = arr[0]+arr[1];
		return;
	}
  let temp = 0;
  let result = 0;
  for(let i=0;i<arr.length;i++){
    temp = arr[0]+arr[1];
    result += temp;
    arr.splice(0,2,temp);
    arr=arr.sort(function (a,b){ return a-b;});
  }
  result += arr[0]+arr[1];
  
  let resultFinal = document.getElementById('result');
  resultFinal.innerText = result;
}  
