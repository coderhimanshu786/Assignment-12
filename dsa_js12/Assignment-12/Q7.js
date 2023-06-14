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
  
    // Insert nodes of the second list into the first list at alternate positions
    mergeAlternate(secondList) {
      if (this.head === null || secondList.head === null) {
        return; // Empty lists
      }
  
      let firstCurrent = this.head;
      let secondCurrent = secondList.head;
  
      while (firstCurrent !== null && secondCurrent !== null) {
        const firstNext = firstCurrent.next;
        const secondNext = secondCurrent.next;
  
        // Link the node from the second list to the first list
        firstCurrent.next = secondCurrent;
        secondCurrent.next = firstNext;
  
        // Move to the next pair of nodes
        firstCurrent = firstNext;
        secondCurrent = secondNext;
      }
  
      // Empty the second list
      secondList.head = null;
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
  
  // Create the first linked list
  const firstList = new LinkedList();
  firstList.insert(5);
  firstList.insert(7);
  firstList.insert(17);
  firstList.insert(13);
  firstList.insert(11);
  
  // Create the second linked list
  const secondList = new LinkedList();
  secondList.insert(12);
  secondList.insert(10);
  secondList.insert(2);
  secondList.insert(4);
  secondList.insert(6);
  
  // Merge the second list into the first list at alternate positions
  firstList.mergeAlternate(secondList);
  
  // Print the modified first list
  firstList.printList();
  
  // Print the modified second list (which should be empty)
  secondList.printList();
  