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
  l2: ListNode | null
): ListNode | null {
  let val1 = getListValue(l1);
  let val2 = getListValue(l2);

  const total = val1 + val2;
  const totalStrArray = Array.from(total.toString());
  let node: ListNode | null = null;

  totalStrArray.forEach((char) => {
    const newNode = new ListNode(Number.parseInt(char));
    if (!node) node = newNode;
    else {
      newNode.next = node;
      node = newNode;
    }
  });

  return node || null;
}

function getListValue(node: ListNode | null) {
  if (!node) return 0;

  let tmp = "";

  do {
    tmp = node.val.toString() + tmp;
    node = node.next;
  } while (node);

  return Number.parseInt(tmp);
}
