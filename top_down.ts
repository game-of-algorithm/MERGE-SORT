/*
* 自顶向下归并排序（递归）
* 思想：不断的二分数组，直到子数组元素个数为1，此时认为一个元素的数组是有序的，然后将两个有序的序列合并成一个新的有序的序列
*/

function mergeSort(arr: Array<number>) {
    if (arr.length < 2) {
        return arr;
    }
    // 找到中间位置
    let middleIndex = Math.ceil(arr.length/2);
    let leftArr = arr.slice(0, middleIndex);
    let rightArr = arr.slice(middleIndex);
    if (!leftArr && !rightArr) {
        return
    }
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

// 合并有序数组
function merge(left: Array<number>, right: Array<number>) {
    let res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    while (left.length) {
        res.push(left.shift());
    }
    while (right.length) {
        res.push(right.shift());
    }
    return res;
}

// 测试
let testArr: number[] = [12, 51, 2, 33, 5, 1, 28];
console.log('testArr>>>>', testArr);
let afterMergeSortArr = mergeSort(testArr);
console.log('afterMergeSortArr>>>>>', afterMergeSortArr);
