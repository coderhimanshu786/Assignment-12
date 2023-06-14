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
  
    // Check if the linked list is a palindrome
    isPalindrome() {
      if (this.head === null || this.head.next === null) {
        return true; // An empty list or a list with only one node is a palindrome
      }
  
      let reversed = null;
      let slow = this.head;
      let fast = this.head;
  
      // Reverse the first half of the linked list while finding the middle
      while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
  
        // Reverse the slow pointer
        const next = slow.next;
        slow.next = reversed;
        reversed = slow;
        slow = next;
      }
  
      // If the list has an odd number of nodes, skip the middle node
      if (fast !== null) {
        slow = slow.next;
      }
  
      // Compare the reversed first half with the second half
      while (reversed !== null) {
        if (reversed.data !== slow.data) {
          return false; // Characters do not match, not a palindrome
        }
        reversed = reversed.next;
        slow = slow.next;
      }
  
      return true; // All characters matched, it is a palindrome
    }
  }
  
  // Create a linked list
  const list = new LinkedList();
  //Example-1 R->A->D->A->R->NULL
//   list.insert('r');
//   list.insert('a');
//   list.insert('d');
//   list.insert('a');
//   list.insert('r');

//Example-2 C->O->D->E->NULL
  list.insert('C');
  list.insert('O');
  list.insert('D');
  list.insert('E');
  
  const isPalindrome = list.isPalindrome();
  
  if (isPalindrome) {
    console.log('The linked list is a palindrome. YES');
  } else {
    console.log('The linked list is not a palindrome. NO');
  }
  