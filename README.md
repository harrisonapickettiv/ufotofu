# UFO tofu

UFO tofu is a palindrome. A Palindrome is a word, phrase, or sequence that reads the same backward as forward. Write a program that checks if the phrase entered is a palindrome.

---

## Description

The code is structured as several functions with a primary controller exported to the application.

### Reset Display

A function that resets critical components of the display to ensure correct viewing by hiding the error and results elements.

### Get Values

A function that gets the value of 'userString' from the user interface. Returns the value and whether it is valid input.

### Display Error

A function that reveals an error message hidden from view. The message indicates that user must enter a word or phrase.

### Is Palindrome?

A function that takes a string as input and checks if the string is a palindrome. Removes all whitespace and switches all characters to lower case before the check. Returns the modified string and whether it is a palindrome.

### Display Result

A function that takes a string and a boolean value and displays a message to the user. If the boolean is true the message indicates that the string is a palindrome, if false the message indicates otherwise. The reverse of the string is shown to illustrate the (non-)palindrome.

### UFO Tofu

The main application function. Calls getValues to get and validate user input. Then displays an error if getValues finds an error in input. Otherwise, calls isPalindrome followed by displayResult to generate and display a message to the user.
