/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let n = nums.length;

        let l=m=0,h=n-1;

        while(m<=h){
            if(nums[m]==0){
                nums[m]=nums[l];
                nums[l]=0;
                l++;
                m++;

            }else if(nums[m]==1){
                m++;

            }else{
                nums[m]=nums[h];
                nums[h]=2;
                h--;
            }
        }
    
};