//Complexity:
//Time Complexity: O(n).
//Auxiliary Space: O(1).

/* Link list Node */
class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}
// Deletes middle node and return head of the modified list
function deleteMid(head) {
  // Base cases
  if (head == null) return null;
  if (head.next == null) {
    return null;
  }

  // Initialize slow and fast pointers to reach middle of linked list
  var slow_ptr = head;
  var fast_ptr = head;

  // Find the middle and previous of middle.
  var prev = null;

  // To store previous of slow_ptr
  while (fast_ptr != null && fast_ptr.next != null) {
    fast_ptr = fast_ptr.next.next;
    prev = slow_ptr;
    slow_ptr = slow_ptr.next;
  }

  // Delete the middle node
  prev.next = slow_ptr.next;

  return head;
}

// A utility function to print a given linked list
function printList(ptr) {
  while (ptr != null) {
    console.log(ptr.data + "->");
    ptr = ptr.next;
  }
  console.log("NULL<br/>");
}

// Utility function to create a new node.
function newNode(data) {
  temp = new Node();
  temp.data = data;
  temp.next = null;
  return temp;
}
//Qestions--
/* {Example - 1} Start with the empty list-- [1->2->3->4->5] Running code  */

// head = newNode(1);
// head.next = newNode(2);
// head.next.next = newNode(3);
// head.next.next.next = newNode(4);
// head.next.next.next.next = newNode(5);

// {Example -2} Start with the Empty list [2->4->6->7->5->1]

head = newNode(2);
head.next = newNode(4);
head.next.next = newNode(6);
head.next.next.next = newNode(7);
head.next.next.next.next = newNode(5);
head.next.next.next.next.next = newNode(1);

console.log("Given Linked List<br/>");
printList(head);

head = deleteMid(head);
printList(head);
