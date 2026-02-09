class Solution {
    public int lengthOfLastWord(String s) {

        int n = s.length()-1;

        while(n>=0){
            if(s.charAt(n)==' '){
                --n;
            }else{
                break;
            }
            /*
            if(s.charAt(n)!=' ')break;
            --n;*/
        }
        int count=0;
        while(n>=0){
            if(s.charAt(n)!=' '){
                --n;
                count++;
            }else{
                break;
            }
            /*
            if(s.charAt(n)==' ')break;
            --n;
            count++;*/
        }
        return count;
        
    }
}