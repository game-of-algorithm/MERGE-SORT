/*
* 自底向上归并排序（非递归）
* 思想： 数组中先一个一个归并成两两有序的序列，两两有序的再归并成四四有序。。。直到整个数组有序
*
*/
function mergeSortDownToTop(arr) {
    for (var step = 2; step / 2 <= arr.length; step *= 2) {
        console.log('step>>>', step);
        for (var start = 0; start < arr.length; start += step) {
            console.log('start>>>', start);
            console.log('end>>>', start + step - 1);
            console.log('arr>>>', arr);
            mergeArr(start, start + step - 1, arr);
        }
    }
    return arr;
}
function mergeArr(start, end, arr) {
    var temp = []; // 辅助数组
    var mid = Math.floor((start + end) / 2);
    var leftStart = start;
    var leftEnd = mid;
    var rightStart = mid + 1;
    var rightEnd = end;
    var k = 0;
    console.log(leftStart, leftEnd, rightStart, rightEnd, k);
    while (leftStart <= leftEnd && leftStart <= arr.length - 1 && rightStart <= rightEnd && rightStart <= arr.length - 1) {
        console.log('arr[leftStart]》》》', arr[leftStart]);
        console.log('arr[rightStart]》》》', arr[rightStart]);
        arr[leftStart] > arr[rightStart] ? temp[k++] = arr[rightStart++] : temp[k++] = arr[leftStart++];
    }
    while (leftStart <= leftEnd && leftStart <= arr.length - 1) {
        temp[k++] = arr[leftStart++];
    }
    while (rightStart <= rightEnd && rightStart <= arr.length - 1) {
        temp[k++] = arr[rightStart++];
    }
    console.log('temp: ', temp);
    for (var kk = 0; kk < k; kk++) {
        arr[start + kk] = temp[kk];
    }
}
// 测试
var testArr2 = [12, 51, 2, 33, 5, 1, 28, 10, 7, 33, 20];
console.log('testArr2>>>>', testArr2);
var afterMerge = mergeSortDownToTop(testArr2);
console.log('afterMerge>>>>>', afterMerge);
