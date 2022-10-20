function selectSort(arr){
    var len = arr.length
    var index;
    for(var i = 0; i < len - 1; i++){
        var index = i
        for(var j = i + 1; j < len; j++){
            if(arr[index] > arr[j]){
                index = j
            }
        }
        if(i!=index){
            var tmp = arr[i]
            arr[i] = arr[index]
            arr[index] = tmp
        }
    }
    return arr
}
const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
console.log(selectSort(arr))