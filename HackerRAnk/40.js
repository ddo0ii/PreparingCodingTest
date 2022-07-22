// Linked List
/**
Objective
Today we will work with a Linked List. Check out the Tutorial tab for learning materials and an instructional video.

A Node class is provided for you in the editor. A Node object has an integer data field, , and a Node instance pointer, , pointing to another node (i.e.: the next node in the list).

A Node insert function is also declared in your editor. It has two parameters: a pointer, , pointing to the first node of a linked list, and an integer, , that must be added to the end of the list as a new Node object.

Task
Complete the insert function in your editor so that it creates a new Node (pass  as the Node constructor argument) and inserts it at the tail of the linked list referenced by the  parameter. Once the new node is added, return the reference to the  node.

Note: The  argument is null for an empty list.

Input Format

The first line contains T, the number of elements to insert.
Each of the next  lines contains an integer to insert at the end of the list.

Output Format

Return a reference to the  node of the linked list.

Sample Input

STDIN   Function
-----   --------
4       T = 4
2       first data = 2
3
4
1       fourth data = 1
Sample Output

2 3 4 1
Explanation

, so your method will insert  nodes into an initially empty list.
First the code returns a new node that contains the data value  as the  of the list. Then create and insert nodes , , and  at the tail of the list.

LinkedListExplanation.png
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
  this.insert = function (head, data) {
    //complete this method
    let node = new Node(data);

    if (!head) {
      head = node;
    } else {
      let current = head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
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
  mylist.display(head);
}		