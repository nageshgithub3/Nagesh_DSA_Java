/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if(!head || !head.next) return head;

    // calculate the length
    let length = 0;
    let curr = head;
    while(curr){
        curr=curr.next;
        length++;
    }
    // to avoid the unnecessary rotation
    k = k % length;

    let slow=head;
    let fast=head;
    // move fast pointer k steps ahead
    for(let i = 0;i < k; i++){
        fast=fast.next;
    }


    // reaching the end of the list
    while(fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    fast.next=head;
    let newHead = slow.next;

    slow.next=null;

    return newHead;


    
};