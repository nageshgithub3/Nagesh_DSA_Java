/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {

    let count=0;

    for(let i=0;i<nums.length;i++){
        let x = nums[i];

        let countOfDigits = 0;
        while(x > 0){
            x=Math.floor(x/10);
            countOfDigits++;
        }

        if(countOfDigits%2==0){
            count++;
        }
    }
    return count;
    
};