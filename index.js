/*
PROMPT ONE
Declare a function and name it add

This function will take two parameters called 
num1 & num2.

add should return the sum of these two parameters
*/
function add (num1,num2){
  return num1 + num2
}
add(5,8)





/*
Use a function(PROMPT TWO)

The printer function should print to the console no return or parameter needed
*/

function printer(){
  console.log 
}








/*
Using Arguments(PROMPT THREE)

Declare a variable called myObject, and assign it the value 
of an object

Declare a function called addKeys

This function should take one parameter called object

This function will add two keys named firstName and lastName 
to the given paramater

The firstName key will be your first name as a string

The lastName key will be your last name as a string

This function will return the paramater

Call the addKeys function outside its function definition and 
pass myObject as an argument.
*/

var myObject={}

function addKeys(object){
object.firstName = 'Bob'
object.['lastName'] = 'Marley'

retun object
};


