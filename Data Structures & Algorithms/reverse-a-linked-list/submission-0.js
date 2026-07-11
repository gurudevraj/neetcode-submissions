/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
reverseList = function(head) {
    let temp = head
    let pre = null

    while (temp) {
        let next =  temp.next
        temp.next = pre
        pre = temp
        temp = next
    }

    return pre
    
};

// var reverseList = function(head) {
//     let prev = null;   // Tracks the node behind
//     let curr = head;   // Tracks the current node we are fixing
    
//     while (curr !== null) {
//         let nextTemp = curr.next; // 1. Save the rest of the list
//         curr.next = prev;         // 2. Turn the current pointer backwards
        
//         prev = curr;              // 3. Move prev one step forward
//         curr = nextTemp;          // 4. Move curr one step forward
//     }
    
//     return prev; // prev will be pointing to the new head (the old tail)
// };

}
