/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, arr) {


    let nextGreMap = {};
    let stack = [];

    let n = arr.length;

    stack.push(arr[n-1]);
    nextGreMap[arr[n-1]] = -1;

    for(let i=n-2;i>=0;i--){
        while(stack.length){
            // let top = stack[stack.length-1];

            if(stack[stack.length-1] < arr[i]){
                stack.pop();
            }else{
                nextGreMap[arr[i]] = stack[stack.length-1];
                break;
            }
        }

        if(stack.length===0){
            nextGreMap[arr[i]] = -1;
        }
        stack.push(arr[i]);
    }
    return nums1.map(x => nextGreMap[x]);
    
};