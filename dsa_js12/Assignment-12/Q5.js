//Complexity: 
//Time Complexity: O(n). 
//Auxiliary Space: O(1).

// Linked List Node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Linked List
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert new node at the end of the list
    insert(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Detect and remove the loop in the linked list
    removeLoop() {
      if (this.head === null || this.head.next === null) {
        return; // Empty list or a list with only one node, no loop
      }
  
      let slow = this.head;
      let fast = this.head;
  
      // Detect the loop using the Floyd's Cycle-Finding Algorithm
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
  
        // Loop detected
        if (slow === fast) {
          break;
        }
      }
  
      // If loop exists, find the start of the loop
      if (slow === fast) {
        slow = this.head;
        while (slow.next !== fast.next) {
          slow = slow.next;
          fast = fast.next;
        }
        // Unlink the last node to remove the loop
        fast.next = null;
      }
    }
  }
  
  // Create a linked list with a loop
  const list = new LinkedList();
  //Example-1 {1,3,4}
//   list.insert(1);
//   list.insert(3);
//   list.insert(4);
 // Create a loop by connecting the last node to the second node
 //list.head.next.next.next = list.head.next;

//Example - 2 {1,8,3,4}
// list.insert(1);
// list.insert(8);
// list.insert(3);
// list.insert(4);
 // Create a loop by connecting the last node to the second node
 //list.head.next.next.next.next = list.head.next;

//Example -3 {1,2,3,4}
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

  // Create a loop by connecting the last node to the second node
  list.head.next.next.next.next = list.head.next;
  
  // Detect and remove the loop
  list.removeLoop();
  
  console.log('Loop removed from the linked list = 1');
  