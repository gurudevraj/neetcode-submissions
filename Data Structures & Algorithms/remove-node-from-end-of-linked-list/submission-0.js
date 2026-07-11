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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
            let fast = head
    let slow = head
    let prev = head

    if (!head || !head.next || n <= 0) return null

    for (let i = 0; i < n-1; i++) {
        fast = fast.next
        if (!fast) return null
    }
    fast = fast.next
        if (!fast) {
        head = slow.next
        slow.next = null
        return head
    }
    while (fast) {
        fast = fast.next
        prev = slow
        slow = slow.next
    }

    prev.next = slow.next
    slow.next = null

    return head
    }
}
