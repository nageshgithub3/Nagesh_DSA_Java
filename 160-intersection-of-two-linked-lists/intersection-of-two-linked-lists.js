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

    let set = new Set();

    let currB=headB;

    while(currB){
        set.add(currB);
        currB=currB.next;
    }

    let currA=headA;
    while(currA){
        if(set.has(currA)){
            return currA;
        }
        currA=currA.next;

    }
    return null;


    
};