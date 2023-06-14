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
    
    // Find the Nth node from the end of the list
    findNthFromEnd(n) {
      if (n <= 0) {
        return null;
      }
      
      let slow = this.head;
      let fast = this.head;
  
      // Move the fast pointer n positions ahead
      for (let i = 1; i <= n; i++) {
        if (fast === null) {
          return null; // n is greater than the number of nodes
        }
        fast = fast.next;
      }
  
      // Move the slow and fast pointers together until the fast pointer reaches the end
      while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
      }
  
      // The slow pointer will be at the Nth node from the end
      return slow.data;
    }
  }
  
  // Create a linked list
  const list = new LinkedList();
//   list.insert(1);
//   list.insert(2);
//   list.insert(3);
//   list.insert(4);
//   list.insert(5);
//   list.insert(6);
//   list.insert(7);
//   list.insert(8);
//   list.insert(9);

  //Exmaple 2 
  list.insert(10);
  list.insert(5);
  list.insert(100);
  list.insert(5);
  
  //const N = 2;
  //Example-2
  const N = 5;
  const result = list.findNthFromEnd(N);
  
  if (result !== null) {
    console.log(`The ${N}th node from the end is: ${result}`);
  } else {
    console.log(`Invalid input or the list has less than ${N} nodes. i.e -1`);
  }
  