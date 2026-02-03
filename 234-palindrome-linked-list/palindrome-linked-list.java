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
    public boolean isPalindrome(ListNode head) {

        // find out the middle using slow & fast pointer approach
        ListNode slow = head;
        ListNode fast = head;

        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }

        // reverse the second list
        // assume prev=null and curr = middle(slow)

        ListNode prev = null;
        ListNode curr = slow;

        while(curr!=null){
            ListNode temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        
        // check for palindrome
        ListNode firstList = head;
        ListNode secondList = prev;

        while(secondList!=null){
            if(firstList.val!=secondList.val){
                return false;
            }
            firstList = firstList.next;
            secondList = secondList.next;
        }
        return true;
    }
}