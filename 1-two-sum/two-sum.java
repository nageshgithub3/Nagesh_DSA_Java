class Solution {
    public int[] twoSum(int[] arr, int target) {

        int n = arr.length;

        for(int i=0;i<n-1;i++){
            for(int j=i+1;j<n;j++){
                int sum = arr[i]+arr[j];
                if(sum==target){
                    return new int[]{i,j};
                }
            }
        }
        return new int[]{};
        
    }
}