
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 */
function removeKFromList(l, k) {
  // Remove matching elements from the beginning.
  while (l !== null && l.value === k) {
    l = l.next;
  }

  // Remove matching elements from the rest of the list.
  let current = l;

  while (current !== null && current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};

