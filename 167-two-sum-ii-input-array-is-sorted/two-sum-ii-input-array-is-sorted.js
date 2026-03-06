/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let n = nums.length;

    let left = 0;

    let right = n-1;

    while(left < right){
        if(nums[left]+nums[right]===target){
            return [left+1,right+1];
        }else if(nums[left]+nums[right] > target){
            right--;
        }else{
            left++;
        }
    }
    
};