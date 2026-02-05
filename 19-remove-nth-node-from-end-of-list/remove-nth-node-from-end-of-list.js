/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    /* two pass solution
// create a dummy node for deleting a starting index
    let sentinel = new ListNode();
    sentinel.next = head;

    // calculate linkedlist length;

    let length=0;
    while(head){
        head=head.next;
        length++;
    }

    let prevPos = length - n;

    let prev = sentinel;
    for(let i=0; i<prevPos;i++){
        prev=prev.next;
    }
    prev.next=prev.next.next;
    return sentinel.next;*/

    let sentinel = new ListNode();
    sentinel.next= head;

    let fast = sentinel;
    let slow = sentinel;

    for(let i=0;i<=n;i++){
        fast=fast.next;
    }

    while(fast!=null){
        fast=fast.next;
        slow=slow.next;
    }
    slow.next = slow.next.next;

    return sentinel.next;

   
    
};