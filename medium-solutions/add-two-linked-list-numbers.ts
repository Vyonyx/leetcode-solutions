class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null {
  if (l1 == null && l2 == null && carry == 0) return null;

  const total = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carry;
  carry = Math.floor(total / 10);
  return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
}
