/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode rotateRight(ListNode head, int k) {

        if(head==null || head.next==null || k==0) return head;

        // calculate the length
        ListNode newHead = new ListNode();
        int length = 0 ;
        ListNode curr = head;

        while(curr!=null){
            curr=curr.next;
            length++;
        }

        //to avoid unnecessary rotation

        k = k % length;

        ListNode slow = head;
        ListNode fast = head;

        for(int i=0;i<k;i++){
            fast=fast.next;
        }

        while(fast.next!=null){
            slow=slow.next;
            fast=fast.next;
        }
        fast.next=head;
        newHead=slow.next;

        slow.next=null;

        return newHead;
        
    }
}