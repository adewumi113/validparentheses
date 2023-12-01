https://www.codewars.com/kata/6411b91a5e71b915d237332d/javascript

/* DESCRIPTION:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true */


function validParentheses(a) {
    let count = 0
    for (bracket of a){
        bracket === '(' ? count++ : count--
        if (count < 0)
        return false
    }
    return count === 0
  }