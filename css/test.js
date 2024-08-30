// Build a function or set of functions that when given a string X it logs the string, the string reversed, the first character of the string, and the character which is the last in the alphabet.  
// Given X = ‘ABCA’ 
// ABCA ACBA A C
soluction = (x) =>
{
    var a = x.split("");
    console.log(x);
    console.log(x.reverse().join(""));
    console.log(x[0]);
    var result = 0;
    for(var i = 1; i < x.length; i++){
        result = result > x.charAt(i) ? result : x.charAt(i);
    }
    console.log(x[result]);
} 