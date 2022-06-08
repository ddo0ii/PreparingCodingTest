// Day 8: Buttons Container
/**
Objective

In this challenge, we lay out buttons inside a div and modify their labels after each click event on one of the buttons. Check out the attached tutorial for learning materials.

Task
We want to create nine buttons enclosed in a div, laid out so they form a  grid. Each button has a distinct label from  to , and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.

Complete the code in the editor so that it satisfies the following criteria:

Initial State. The initial layout looks like this:
layout
Element IDs. Each element in the document must have an id, specified below:

The button container div's id must be btns.
The initial innerHTML labels must have the following button ids:
innerHTML	id
1	btn1
2	btn2
3	btn3
4	btn4
5	btn5
6	btn6
7	btn7
8	btn8
9	btn9
Styling. The document's elements must have the following styles:
The width of btns is , relative to the document body's width.
Each button (i.e., btn1 through btn9) satisfies the following:
The width is , relative to its container width.
The height is 48px.
The font-size is 24px.
Behavior. Each time btn5 is clicked, the innerHTML text on the grid's outer buttons (i.e., bt1, btn2, btn3, btn4, btn6, btn7, btn8, btn9) must rotate in the clockwise direction. Do not update the button id's.
The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>
Explanation

Initially, the buttons look like this:

initial

After clicking btn5  time, they look like this:click1

After clicking btn5  more time (for a total of  clicks), they look like this:click2
 */

.buttonContainer {
    width: 75%;
}
.buttonContainer > .buttonClass {
    width: 30%;
    height:48px;
    font-size: 24px;
}


document.addEventListener("DOMContentLoaded", () => {
  let btn_ids = [1, 2, 3, 6, 9, 8, 7, 4];
  let btn_values = [1, 2, 3, 6, 9, 8, 7, 4];
  const btn5 = document.getElementById("btn5");
  btn5.addEventListener("click", () => {
    btn_values.unshift(btn_values.pop());
    for (let i = 0; i < btn_ids.length; i++)
      document.getElementById("btn" + btn_ids[i]).innerHTML = btn_values[i];
  });
});

<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
        <div id="btns" class="buttonContainer">
            <button id="btn1" class="buttonClass">1</button>
            <button id="btn2" class="buttonClass">2</button>
            <button id="btn3" class="buttonClass">3</button>
            <button id="btn4" class="buttonClass">4</button>
            <button id="btn5" class="buttonClass">5</button>
            <button id="btn6" class="buttonClass">6</button>
            <button id="btn7" class="buttonClass">7</button>
            <button id="btn8" class="buttonClass">8</button>
            <button id="btn9" class="buttonClass">9</button>
        </div> 
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>