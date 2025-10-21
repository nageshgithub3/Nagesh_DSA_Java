class Solution {
    public boolean containsDuplicate(int[] nums) {

        // Create a Hashset to store elements from the array
        HashSet<Integer> set = new HashSet<>();

        //Iterate through each element in an array we are using for each loop

        for(int num : nums){
            // Check if the element is already in the hashset
            if(set.contains(num)){
                return true; //Duplicate found
            }
            // Add the element to the Hashset
            set.add(num);
        }
        return false; //No Duplicates Found
        
    }
}