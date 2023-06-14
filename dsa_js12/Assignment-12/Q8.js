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
  
    // Check if the linked list is circular
    isCircular() {
      if (this.head === null) {
        return false; // Empty list is not circular
      }
  
      let slow = this.head;
      let fast = this.head;
  
      // Check for circular condition
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          return true; // Circular condition detected
        }
      }
  
      return false; // Circular condition not detected
    }
  }
  
  // Create a linked list
  const list = new LinkedList();
  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.insert(4);
  list.insert(5);
  
  // Make the linked list circular by connecting the last node to the second node
  list.head.next.next.next.next.next = list.head.next;
  
  // Check if the linked list is circular
  const isCircular = list.isCircular();
  
  if (isCircular) {
    console.log("The linked list is circular.");
  } else {
    console.log("The linked list is not circular.");
  }
  