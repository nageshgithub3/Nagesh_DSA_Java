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

    // 1. Convert a Linkedlist to an array

    let arr = [];

    let curr = head;

    while(curr){
        arr.push(curr);
        curr = curr.next;
    }

    // To find middle node of the list

    let mid = Math.floor(arr.length/2);

    return arr[mid]; 
    
};