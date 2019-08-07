/*
* 快速排序（非原地）
* 思想： 1. 从数组中找到一个基准数；
* 2. 以这个数为基准进行分区，将不小于它的放到右边，将不大于它的全放到左边
* 3. 再分别对左右两个子数组重复第二步，直到各个子数组只有一个数
*/

function quickSort(arr: Array<number>) {
    if (arr.length <= 1) return arr;
    let q = arr.splice(0, 1);
    console.log('q>>>>>', q);
    let leftArr: number[] = [];
    let rightArr: number[] = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < q) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat(q, quickSort(rightArr))
}

// 测试
const testArr: number [] = [23, 10, 1, 92, 77, 45, 62, 5, 92, 100];
console.log('testArr>>>', testArr);
const afterSortArr = quickSort(testArr);
console.log('afterSortArr>>>>>>', afterSortArr);

