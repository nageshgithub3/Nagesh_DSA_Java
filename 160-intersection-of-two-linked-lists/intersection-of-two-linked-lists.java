/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        
        HashSet<ListNode> set = new HashSet<>();

        ListNode currB = headB;

        while(currB!=null){
            set.add(currB);
            currB=currB.next;
        }

        ListNode currA = headA;

        while(currA!=null){
            if(set.contains(currA)){
                return currA;
            }
            currA = currA.next;
        }
        return null;
        
    }
}