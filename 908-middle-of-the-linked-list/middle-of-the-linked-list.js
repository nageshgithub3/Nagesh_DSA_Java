/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    // Using slow and fast pointer approach

    let slow=fast=head;

    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
    
};