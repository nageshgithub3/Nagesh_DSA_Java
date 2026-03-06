class Solution {
    public int[] dailyTemperatures(int[] arr) {

        Stack<Integer> stack = new Stack<>();

        int n = arr.length;

        int[] ans = new int[n];

        stack.push(n-1);

        for(int i=n-2;i>=0;i--){
            while(!stack.isEmpty()){
               if(arr[i] >= arr[stack.peek()]){
                stack.pop();
               }else{
                ans[i] = stack.peek() - i;
                break;
               }
            }
            stack.push(i);
        }
        return ans;
        
    }
}