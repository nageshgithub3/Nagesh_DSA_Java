/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
// create a set
    let set = new Set();

    
// all the headB added into the set
    while(headB){
        set.add(headB);
        headB=headB.next;
    }   
// check headA present in the set return the element 
    while(headA){
        if(set.has(headA)){
            return headA;
        }
        headA=headA.next;
    }
    return null;  
};