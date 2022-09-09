// 判断一个数是否在二维数组中

 // 双指针写法 复杂度为O(m+n)
var findNumberIn2DArray = function(matrix, target) {
    let yLen = matrix.length // y坐标最大值
    // 坐标（x,y）从右上角开始
    let x = matrix[0].length - 1
    let y = 0
    while(y < yLen && x>=0){
        console.log(x,y)
        if(target === matrix[y][x]){
            return true
        }else if(target > matrix[y][x]){
            y++
        }else{
            x--
        }
    }
    return false
};
var a = [
    [1,3,5],
    [2,7,8],
    [4,9,10]
]
findNumberIn2DArray(a,8)