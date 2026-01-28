class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {

        int currCount = 0;
        int maxCount = 0;

        for(int i = 0; i < nums.length; i++){
            if(nums[i]==1){
                currCount++;
            }else{
                maxCount = Math.max(currCount,maxCount);
                currCount=0;
            }
        }
        return Math.max(currCount,maxCount);
        
    }
}