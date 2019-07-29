/*
* 自底向上归并排序（非递归）
* 思想： 数组中先一个一个归并成两两有序的序列，两两有序的再归并成四四有序。。。直到整个数组有序
*
*/
function mergeSortDownToTop(arr: Array<number>) {
    for (let step = 2; step / 2 <= arr.length; step *= 2) {
        console.log('step>>>', step);
        for (let start = 0; start < arr.length; start += step) {
            console.log('start>>>', start);
            console.log('end>>>', start + step - 1);
            console.log('arr>>>', arr);
            mergeArr(start, start + step - 1, arr);
        }
    }
    return arr;
}
function mergeArr(start: number, end: number, arr: Array<number>) {
    let temp = []; // 辅助数组
    let mid = Math.floor((start + end) / 2);
    let leftStart = start;
    let leftEnd = mid;
    let rightStart = mid + 1;
    let rightEnd = end;
    let k = 0;
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
    for (let kk = 0; kk < k; kk++) {
        arr[start + kk] = temp[kk];
    }
}

// 测试
let testArr2: number[] = [12, 51, 2, 33, 5, 1, 28, 10, 7, 33, 20];
console.log('testArr2>>>>', testArr2);
let afterMerge = mergeSortDownToTop(testArr2);
console.log('afterMerge>>>>>', afterMerge);
