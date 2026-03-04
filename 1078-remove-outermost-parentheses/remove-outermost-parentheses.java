class Solution {
    public String removeOuterParentheses(String s) {
        Stack<Character> stack = new Stack<>();
        String ans ="";

        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='('){
                stack.push(s.charAt(i));
                ans += ((stack.size() > 1)?s.charAt(i):"");
            }else{
                ans += ((stack.size() > 1)?s.charAt(i):"");
                stack.pop();
            }
        }
        return ans;
        
    }
}