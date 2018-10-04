// Develop a function that will receive as input a text string formed by digits and letters that will return the unique numbers formed by the consecutive digits, ordered and without duplicates considering letters as numbers separators.

// Ex: "A56B455VB23GTY23J" -> {23, 56, 455}

// Note:
// 1. The input string can be huge.

// Return a list with the numbers in ascending order.

// You may use the standard or base library included with the language of your choice. Your solution will be evaluated on correctness, runtime complexity (big-O), and adherence to coding best practices.
// A complete answer will include the following: 

// 1. List the language you’re using.
// 2. Document your assumptions.
// 3. Explain your approach and how you intend to solve the problem.
// 4. Provide code comments where applicable.

// You should start by using the example function prototype listed below or recreate in the language of your choice.

// You can assume this method will be called with input data.

var test = "A56B455VB23GTY23J";

function orderArray (text){
    var expresionRegular = /[a-zA-Z]/,
        textArray = text.split(expresionRegular).sort(function (a, b){
                return a - b;
            }).filter(n => n),
        finalArray = textArray.filter(function(elem, pos) { return textArray.indexOf(elem) == pos; });
        
        return finalArray;
}
