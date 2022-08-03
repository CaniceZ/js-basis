function binary_search(arr, key) {
  var low = 0,
  high = arr.length - 1;
  while(low <= high){
    var mid = parseInt((high + low) / 2);
    if(key == arr[mid]){
      return mid;
    }else if(key > arr[mid]){
      low = mid + 1;
    }else if(key < arr[mid]){
      high = mid -1;
    }else{
      return -1;
    }
  }
};
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binary_search(arr,10);
alert(result); // 9 返回目标元素的索引值