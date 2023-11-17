
// 1
var array = ["name", "John", "lastname", "Black", "age", "23"];

var obj = {};

for (var i = 0; i < array.length; i += 2) {
    var key = array[i];
    var value = array[i + 1];
    obj[key] = value;
}

console.log(obj)
//2
 function makeAverage(...numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    var averageMean = sum/numbers.length
     return averageMean
 }

console.log(makeAverage(7, 8, 22, 10))
//3
var valye1 = 6
const getDataType = (valye) => typeof valye
console.log(getDataType(valye1))
//4
var plus = document.querySelector(".addition")
var minus = document.querySelector(".decreasing")
var counter = document.querySelector("input")
var count = 0;

plus.addEventListener("click", function () {
    count++;
    counter.value = count;
})

minus.addEventListener("click", function () {
    count--;
    counter.value = count;
})

counter.addEventListener("change", function () {
    count = counter.value
})




