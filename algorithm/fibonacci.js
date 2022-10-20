function Fibonacci(n) {
    if (n <= 1) return n
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}
var fib = function(n) {
    var arr = [0,1]
    if(n>=2){
        for(var i = 2;i <= n;i++){
            arr[i] = (arr[i - 2] + arr[i - 1])% 1000000007
        }
    }
    return arr[n]
};