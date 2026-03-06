class Solution {
    public int[] nextGreaterElements(int[] arr) {

        

        int n = arr.length;

        int[] ans = new int[n];
        Arrays.fill(ans,-1);

        Stack<Integer> stack = new Stack<>();

        stack.push(arr[n-1]);

        for(int i = (2*n)-2; i >= 0; i--){
            while(!stack.isEmpty()){
                if(arr[i%n] < stack.peek()){
                    ans[i%n] = stack.peek();
                    break;
                }else{
                    stack.pop();
                }
            }
            stack.push(arr[i%n]);
        }
       return Arrays.copyOfRange(ans, 0, n);
        
    }
}