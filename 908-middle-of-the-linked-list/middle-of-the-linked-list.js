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

    let arr = [];
    let curr = head;

    while(curr!=null){
        arr.push(curr);
        curr=curr.next;
    }

    let mid = Math.floor(arr.length/2);

    return arr[mid];
    
};