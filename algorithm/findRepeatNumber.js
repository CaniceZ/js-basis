// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
// 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
// 输入：[2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 
/**
 * @param {number[]} nums
 * @return {number}
 */
// 正常解法
//  var findRepeatNumber = function(nums) {
//     if(!nums) return false
//     let arr = []
//     for(let i = 0; i < nums.length; i++){
//         if(arr.includes(nums[i])){
//             return nums[i]
//         }else{
//             arr.push(nums[i])
//         }
//     }
// };
// map替换循环
// var findRepeatNumber = function(nums) {
//     if(!nums) return false
//     let map = new Map()
//     for(let i = 0; i < nums.length; i++){
//         if(map.has(nums[i])){
//             return nums[i]
//         }else{
//             map.set(nums[i],1)
//         }
//     }
// };
var findRepeatNumber = function(nums) {
    const map = new Map()
    for (const num of nums) {
        const val = map.get(num)
        if (map.has(num)) {
            return num
        }
        map.set(num, 1)
    }
};

findRepeatNumber([2, 3, 1, 0, 2, 5, 3])