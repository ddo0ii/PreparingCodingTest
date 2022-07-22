// More Linked Lists
/**
Objective
Check out the Tutorial tab for learning materials and an instructional video!

Task
A Node class is provided for you in the editor. A Node object has an integer data field, , and a Node instance pointer, , pointing to another node (i.e.: the next node in a list).

A removeDuplicates function is declared in your editor, which takes a pointer to the  node of a linked list as a parameter. Complete removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list.

Note: The  pointer may be null, indicating that the list is empty. Be sure to reset your  pointer when performing deletions to avoid breaking the list.

Input Format

You do not need to read any input from stdin. The following input is handled by the locked stub code and passed to the removeDuplicates function:
The first line contains an integer, , the number of nodes to be inserted.
The  subsequent lines each contain an integer describing the  value of a node being inserted at the list's tail.

Constraints

The data elements of the linked list argument will always be in non-decreasing order.
Output Format

Your removeDuplicates function should return the head of the updated linked list. The locked stub code in your editor will print the returned list to stdout.

Sample Input

6
1
2
2
3
3
4
Sample Output

1 2 3 4 
Explanation

, and our non-decreasing list is . The values  and  both occur twice in the list, so we remove the two duplicate nodes. We then return our updated (ascending) list, which is .
 */
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}
function Node(data) {
  this.data = data;
  this.next = null;
}
function Solution() {
  this.removeDuplicates = function (head) {
    //Write your code here
    let prev = null;
    let current = head;
    let arr = [];
    while (current != null) {
      if (arr[arr.length - 1] != current.data) {
        arr.push(current.data);
      } else {
        prev.next = current.next;
      }
      prev = current;
      current = current.next;
    }
    console.log(arr.join(" "));
  };

  this.insert = function (head, data) {
    var p = new Node(data);
    if (head == null) {
      head = p;
    } else if (head.next == null) {
      head.next = p;
    } else {
      var start = head;
      while (start.next != null) {
        start = start.next;
      }
      start.next = p;
    }
    return head;
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}
function main() {
  var T = parseInt(readLine());
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < T; i++) {
    var data = parseInt(readLine());
    head = mylist.insert(head, data);
  }
  head = mylist.removeDuplicates(head);
  mylist.display(head);
}		