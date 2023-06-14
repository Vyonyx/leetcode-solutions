/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head: ListNode | null = null;
    let tail: ListNode | null = null;

    while (list1 || list2) {
        const val = Math.min(
            list1?.val || (list1?.val === 0 ? list1.val : Infinity),
            list2?.val || (list2?.val === 0 ? list2.val : Infinity),
        );
        const node = new ListNode(val, null);

        if (tail === null) {
            tail = node;
            head = tail;
        } else {
            tail.next = node;
            tail = node;
        }

        if (list1?.val === val) list1 = list1.next;
        else list2 = list2.next;
    }

    return head;
};
