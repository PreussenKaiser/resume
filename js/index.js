/* 
    Author: Karl Lukan
    Date Created: 02/27/2021
*/



/* Typing Animation */
var i = 0; // Counter variable for myName.
var x = 0; // Counter variable for myProgram.
var myName = "Karl Lukan../";
var myProgram = "IT Software Developer../";
var speed = 100; // Controls speed.

function typeWriter() {
    if (i < myName.length) { // Types out myName.
        document.getElementById("name").innerHTML += myName.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

    if (i == myName.length && x < myProgram.length) { // Types out myProgram.
        document.getElementById("program").innerHTML += myProgram.charAt(x);
        x++;
        setTimeout(typeWriter, speed);
    }
}