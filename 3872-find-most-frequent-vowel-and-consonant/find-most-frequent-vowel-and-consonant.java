class Solution {
    public int maxFreqSum(String s) {

        HashMap<Character,Integer> map = new HashMap<>();

        for(int i=0;i<s.length();i++){
            char c = s.charAt(i);
            if(!map.containsKey(c)){
                map.put(c, 1);
            }else{
               map.put(c,map.get(c)+1);
            }
        }

         Set<Character> vowels = new HashSet<>(Arrays.asList('a','e','i','o','u'));


        int maxVowel = 0;
        int maxConsonant = 0;

        for(int i=0;i<s.length();i++){
            char c = s.charAt(i);
            if(vowels.contains(c)){
                maxVowel = Math.max(maxVowel, map.get(c));
            }else{
                maxConsonant = Math.max(maxConsonant ,  map.get(c));
            }
        }
        return maxVowel + maxConsonant;
        
    }
}