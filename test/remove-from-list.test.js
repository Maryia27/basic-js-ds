// src/remove-from-list.js

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  let dummyHead = new ListNode(0);
  dummyHead.next = l;
  let current = dummyHead;

  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummyHead.next;
}

module.exports = { removeKFromList, ListNode };
