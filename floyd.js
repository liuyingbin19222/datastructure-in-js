/*

js 实现堆排序;
input: 数组  ,数组顺序是按照层次遍历的。
explain:
    step1:  初始化大顶堆，
    step2:  除去堆顶，剩下的元素继续组成大顶堆。
    step3:  反复执行步骤二，最后直到堆中剩下一个元素。排序完毕。
非递归实现;
*/

function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp; 
  }

  function shiftDown(A, i, length) {
    let temp = A[i]; 
 
    for(let j = 2*i+1; j<length; j = 2*j+1) {
      temp = A[i]; 
      if(j+1 < length && A[j] < A[j+1]) { 
        j++;   
      }
      if(temp < A[j]) {
        swap(A, i, j) 
        i = j;  
      } else {
        break;
      }
    }
  }

module.exports = function heapSort(A) {
    for(let i = Math.floor(A.length/2-1); i>=0; i--) {
      shiftDown(A, i, A.length);
    }
    for(let i = Math.floor(A.length-1); i>0; i--) {
      swap(A, 0, i); 
      shiftDown(A, 0, i); 
    }
  }

