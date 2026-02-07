/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
/*
    if(!l1) return l2;
    if(!l2) return l1;

    // find the first current node

    if(l1.val < l2.val){
        curr = l1;
        l1=l1.next;
    }else{
        curr = l2;
        l2=l2.next;
    }*/


    let start = new ListNode();


    // let us assume start = curr node.

     let curr = start;

    // loop runs l1!=null && l2=!=null

    while(l1&&l2){

        if(l1.val < l2.val){
            curr.next=l1;
            l1=l1.next;
        }else{
            curr.next=l2;
            l2=l2.next;
        }
        curr=curr.next;

    }

    // if l1 not exit return curr.next=l2
    if(!l1){
        curr.next=l2;
    }
    // if l2 not exit return curr.next=l1
    if(!l2){
        curr.next=l1;
    }

    return start.next;
    
};