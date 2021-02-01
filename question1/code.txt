const test = function functionForQuestionOne(arr, n) {
    arr.sort();
    for (i = 0; arr[i] <= (n / 2) && i < arr.length; i++) {
        let check = Math.ceil((arr.length - i) / 2);
        let ceiling = arr.length;
        loop: while (true) {
            if (arr[i] + arr[i + check] === n) {
                return true;
            } else if (!check || i + check === arr.length) {
                break loop;
            }
            const tmp = check;
            if (arr[i] + arr[check] < n) {
                check += Math.ceil((arr.length - (i + check)) / 2)
            } else {
                const result = Math.ceil((check - ceiling) / 2)
                check -= result > 0 ? result : result * -1;

            }
            ceiling = tmp;
        }
    }
    return false;
}
const n = 0;
const size = 1000000;
const max = 100;
let arr = [];
for (i = 0; i < size; i++)
    arr.push((Math.floor(Math.random() * Math.floor(max))));
    console.log(arr.length)
console.time('Function');
console.log(test(arr, 150))
console.timeEnd('Function')
