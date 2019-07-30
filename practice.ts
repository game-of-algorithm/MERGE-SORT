/*
*   2.2.4 题
*   是否当且仅当两个输入的子数组都有序时原地归并的抽象方法才能得到正确的结果？证明你的结论或者给出一个反例。
*
*   答：是的
*/


// 原地归并方法
function mergeSitu(arr: Array<number>, start: number, mid: number, end: number) {
    let i=start,j=mid+1;
    let temp = [];
    //数据复制一份将a[start..end]复制到temp[start..end],start不一定为0
    for(let m=start;m<=end;m++){
        temp[m] = arr[m];
    }

    for(let n=start;n<=end;n++){
        if(i>mid){
            //左边用尽（取右半边的元素）
            arr[n] = temp[j++];
        }else if(j>end){
            //右边用尽（取左半边的元素）
            arr[n] = temp[i++];
        }else if(temp[j]<temp[i]){
            //右半边的元素小于左半边的元素（取右半边的元素）
            arr[n] = temp[j++];
        }else{
            //右半边的元素大于左半边的元素（取左半边的元素）
            arr[n] = temp[i++];
        }
    }
    return arr;
}


let testArray: number[] = [8, 3, 0, 7, 2, 9];
console.log('testArray>>>', testArray);
let afterMergeArray = mergeSitu(testArray, 0, 2, 5);
console.log('afterMergeArray>>>>', afterMergeArray);

/*
*   2.2.7 题
*   证明归并排序的比较次数是单调递增的 即对于N>0, C(N+1)>C(N)
*
*   证明：
*   根据书命题G和命题H可知，归并排序比较次数与 NlogN 成正比
*   而N（N>0） 和 logN 都是单调递增函数，所以可得归并排序比较次数是单调递增的
*/


