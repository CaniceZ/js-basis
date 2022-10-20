function bubbleSort(arr){
    if(arr.length<=1){
        return arr
    }
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                var tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}

const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
console.log(bubbleSort(arr))