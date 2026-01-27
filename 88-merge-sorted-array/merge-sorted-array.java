class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        
        int[] nums1Copy = Arrays.copyOfRange(nums1,0,m);
        int p1=0;
        int p2=0;

        for(int i=0;i<m+n;i++){

            if(p2>=n || (p1<m && nums1Copy[p1] < nums2[p2])){
                nums1[i] = nums1Copy[p1];
                p1++;
            }else{
                nums1[i] = nums2[p2];
                p2++;
            }
        }
        
    }
}