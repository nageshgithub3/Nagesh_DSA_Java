/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let x = 0;
    let n = nums.length;
    for(let i=0;i<n;i++){
        if(nums[i]>nums[x]){
            x=x+1;
            nums[x]=nums[i];
        }
    }
    return x+1;
    
};