window.onload = function() {
    // Access an HTML element by its ID
    var myElement = document.getElementById("myElementId");
    
    // Manipulate the element
    myElement.innerHTML = "Hello, JavaScript!";
  };
  
  // Example JavaScript code
  window.onload = function() {
    // Access an HTML element by its ID
    var myElement = document.getElementById("myElementId");
    
    // Manipulate the element
    myElement.innerHTML = "Hello, JavaScript!";
  };




window.addEventListener('load', function() {
  alert('Welcome to our website!');
});



var output = [ ];
var count = 1;

function fizzBuzz() {

    while (count <= 100){
        
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("Fizz");
    
        
    } else if (count % 3 === 0){
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    }
    count++;
    console.log(output);
}