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
    public ListNode removeNthFromEnd(ListNode head, int n) {
/*
        ListNode slow = head;
        ListNode fast = head;


        for(int i=0;i<n;i++){
            fast=fast.next; // slow=head, fast=3
        }

        if(fast==null){
            return head.next;
        }

        while(fast.next!=null){
            slow=slow.next;
            fast=fast.next;
        }
        slow.next=slow.next.next;
        return head;*/

        ListNode sentinel = new ListNode();
        sentinel.next = head;

        ListNode first = sentinel;
        for(int i=0;i<=n;i++){
            first=first.next;
        }
        ListNode second = sentinel;
        while(first!=null){
            first=first.next;
            second=second.next;
        }
        second.next=second.next.next;
        return sentinel.next;


        
        
        
    }
}