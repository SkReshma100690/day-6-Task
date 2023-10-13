// day6 task 2




//  sub task 1
//  Find the culprit

 <!DOCTYPE html>
 <html>
 <body>
  <script>
  alert("I'm JavaScript!")
  </script>
  Whats the error in this ?
  <p>Answer: using single quotes is creating problem when there is a apostrophy</p>
 </body>
 </html> 



//  sub task 2

alert("I'm invoked!");




//  sub-task-3
// Explain the below how it works


// Explanation: The alert function in the .js file 
//                 ----alerts the strings that are inside it, in the same order as they are written.
//                 ----alerts the value of the variables or values directly, after mathematical operations.



//  sub task 4
// Fix the below to alert Guvi geek

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+ " " +lname;
alert( admin ); // "Guvi geek"




//  sub task 5
// Fix the below to alert hello Guvi geek

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( `hello ${name}` );



//  sub task 6 and 7
// Fix the below to alert sum of two numbers

let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));
or
alert(Number(a) + Number(b));






//  sub task 8
// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.


var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}


// Answer: As the 2 and 12 are given as strings > the comparison for stings will be done by taking the first digit
//         ----as 2 is greater than 1 it assigns true to 'a' (then it executes "code is blasted")
//         ----If 2 and 12 are written without quotes then it will display "code is diffused"
//         ----This is corrected in the above code




//  sub task 9
// How to get the success in console. 

// Answer: instead of clicking on "Ok" click on  "Cancel" in the prompt pop up in the web page
//           ----then it gives "success" in the console.





//  sub task 10
// How to get the correct score in console.

let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}


// Answer: In the given code in if condition '===' is used 
//         >by using just '==' in the if condition we will get correct score in the console.





//  sub task 11
// Fix the code to welcome the Employee

let login = 'Employee';
let message = (login == 'Employee') ? 'welcome':
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);




//  sub task 15
// Change the code to print
// 3
// 2
// 1


//You can change only 2 characters
let i = 3;
while (i) {
  console.log(i--);
}




//  sub task 16
// Change the code to print 1 to 10 in 4 lines

let num=1;
while(num<=10){
    console.log(num);
    num+=1;}





//  sub task 17
// Change the code to print even numbers

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }






//  sub task 18
// Change the code to print all the gifts

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}






//  sub task 20 and 21
// Whats the msg printed and why?

// Answer: The message 'hi' will be printed
//         ----Because lemein is a string and will execute the first if block (containing 'hi')






