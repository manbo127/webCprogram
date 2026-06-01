// 这里模拟一个C程序计算1到5的和
function runProgram() {
    let sum = 0; // 相当于 C 的 int sum = 0;
    for (let i = 1; i <= 5; i++) { // C语言for循环写法几乎一样
        sum += i; // sum = sum + i;
    }
    return "1到5的和是：" + sum;
}

// 绑定按钮点击事件
document.getElementById("runBtn").addEventListener("click", function() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = runProgram(); // 输出到网页上
});