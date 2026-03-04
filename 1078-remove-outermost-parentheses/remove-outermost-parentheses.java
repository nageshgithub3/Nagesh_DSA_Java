class Solution {
    public String removeOuterParentheses(String s) {
        int level = 0;
        String ans ="";

        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='('){
                ++level;
                ans += ((level > 1)?s.charAt(i):"");
            }else{
                ans += ((level > 1)?s.charAt(i):"");
                --level;
            }
        }
        return ans;
        
    }
}