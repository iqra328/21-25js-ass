// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


// var firstName = prompt("Enter your first name:");


// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;


// alert("Hello, " + fullName + "! Welcome!");








// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// var userInput = prompt("What is your favorite mobile phone model?");


// var inputLength = userInput.length;


// document.write("Your favorite mobile phone is: " + userInput + "<br>");
// document.write("Length of input: " + inputLength);







// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


// var word = "Pakistani";

// var index = word.indexOf("n");

// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index);





// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


// var word = "hellow world";

// var index = word.lastIndexOf("l");


// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + index);






// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var word = "Pakistani";


// var character = word.charAt(3);

// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + character);





// // 6. Repeat Q1 using string concat() method.




// var firstName = prompt("Enter your first name:");

// var lastName = prompt("Enter your last name:");


// var fullName = firstName.concat(" ", lastName);


// alert("Hello, " + fullName + "! Welcome!");






// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);













// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;




// var message =  "Ali and Sami are best friends. They play cricket and football together."
//  var updateMessage = message.replace(/and/g , "&");

//  document.write(updateMessage);










// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var string = "472";
// var num = Number (string);

// document.write ("value:" + string + "<br>");
// document.write("type:" + typeof string + "<br> <br>");

// document.write( "value:" + num + "<br>");
// document.write("type:" + typeof num + "<br>");









// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


// var userInput = prompt("Enter any text:");
//   var capitalText = userInput.toUpperCase();

//   document.write("User Input: " + userInput + "<br>");
//   document.write("In Capital Letters: " + capitalText);











// 11. Write a program that takes user input. Convert and
// show the input in title case.




//  var userInput = prompt("Enter your text:");

//   var words = userInput.toLowerCase().split(" ");
//   for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   var titleCase = words.join(" ");

//   document.write("Title Case: " + titleCase);







// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;
// var str = num.toString();

// var display = str.replace( "." , "");
// console.log ("Result: " + display);










// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// var username = prompt("Enter your username:");

//   var invalidChars = ['@', '.', ',', '!'];
//   var hasInvalidChar = false;

//   for (var i = 0; i < username.length; i++) {
//     if (invalidChars.includes(username[i])) {
//       hasInvalidChar = true;
//       break;
//     }
//   }

//   if (hasInvalidChar) {
//     alert("Please enter a valid username without @ . , !");
//   } else {
//     alert("Username accepted: " + username);
//   }










// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


//   var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//   var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

//   var searchItem = userInput.toLowerCase();
//   var found = false;

//   for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchItem) {
//       found = true;
//       break;
//     }
//   }

//   if (found) {
//     alert(userInput + " is available at index " + i + " in our bakery.");
//   } else {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
//   }












// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.














// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
 
// var university = "University of Karachi";

 
//   var arr = university.split("");


//   for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
//   }







// 17. Write a program to display the last character of a user
// input.



//   var userInput = prompt("Enter any text:");

//   var lastChar = userInput.charAt(userInput.length - 1);

//   document.write("User input: " + userInput + "<br>");
//   document.write("Last character: " + lastChar);













// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
    
       var text = "The quick brown fox jumps over the lazy dog";
        
       var lowerText = text.toLowerCase();

       var words = lowerText.split(" ");

       var count = 0;
        for (var i = 0; i < words.length; i++){
            if (words [i] === "the") {
                count++
            }
        }
        document.write("TEXT:" + text +"<br>");
        document.write("occurences of word  'the':" + count);