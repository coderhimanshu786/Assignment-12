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
  
    // Traverse the linked list and retain M nodes while deleting the next N nodes
    retainMDeleteN(M, N) {
      if (this.head === null || M <= 0 || N <= 0) {
        return; // Invalid input or an empty list
      }
  
      let current = this.head;
  
      while (current !== null) {
        // Skip M nodes
        for (let i = 1; i < M && current !== null; i++) {
          current = current.next;
        }
  
        if (current === null) {
          return; // Reached the end of the list
        }
  
        // Delete N nodes
        let temp = current.next;
        for (let i = 1; i <= N && temp !== null; i++) {
          temp = temp.next;
        }
        current.next = temp;
  
        current = temp;
      }
    }
  
    // Print the linked list
    printList() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  // Create a linked list
  const list = new LinkedList();
  //Example -1 (1->2->3->4->5->6->7->8)
//   list.insert(1);
//   list.insert(2);
//   list.insert(3);
//   list.insert(4);
//   list.insert(5);
//   list.insert(6);
//   list.insert(7);
//   list.insert(8);

//   const M = 2;
//   const N = 2;

//Example -2 (1->2->3->4->5->6->7->8->9->10)
//   list.insert(1);
//   list.insert(2);
//   list.insert(3);
//   list.insert(4);
//   list.insert(5);
//   list.insert(6);
//   list.insert(7);
//   list.insert(8);
//   list.insert(9);
//   list.insert(10);
  
//   const M = 2;
//   const N = 3;

//Example -2 (1->2->3->4->5->6->7->8->9->10)
   list.insert(1);
   list.insert(2);
   list.insert(3);
   list.insert(4);
   list.insert(5);
   list.insert(6);
   list.insert(7);
   list.insert(8);
   list.insert(9);
   list.insert(10);
  
   const M = 1;
   const N = 1;

  
  // Traverse the linked list and retain M nodes while deleting the next N nodes
  list.retainMDeleteN(M, N);
  
  // Print the modified linked list
  list.printList();
  