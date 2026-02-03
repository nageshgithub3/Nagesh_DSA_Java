/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    // first find out the middle

    let slow=fast=head;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }

    // reverse the second part
    let prev = null;
    let curr = slow;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // checking for palindrome

    let firstList = head; // start node head
    let secondList = prev; // end node prev

    while(secondList){
        if(firstList.val != secondList.val){
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next
    }
    return true;

    
};