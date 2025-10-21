class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {

        // Create a Hashset to store the elements

        HashSet<Integer> set = new HashSet<>();

        // initialise the i value
        int i=0;

        // iterate through the every element in an array

        for(int num : nums){
            // the element is exist in the array or not
            if(set.contains(num)){
                return true; //duplicate found
            }
            // if not exist, add that element to the set
            set.add(num);

            //maintain the sliding window size

            if(set.size() > k){
                set.remove(nums[i-k]);
            }

            i++; // move to the next index
        }
        return false; // duplicates not found
        
    }
}