function shortWords(array) {
  return array.filter(function (words) {
    return words.length < 5;
  )};
};

/*for some reason when I wrote this bit the curriculum wasn't 
taking it. i was both pleased and confused when the solution 
was basically the same as mine. does it have to do with the
spaces?*/ 




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testFunctionWorks(fn, input, expected) {
  
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  } 
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  } 
}

function runTests() {
  
  var input1 = ['cat', 'oblivion', 'dog', 'patriarchy', 'blue'];
  var result1 = ['cat', 'dog', 'blue'];
  var input2 = ['rainbow', 'the', 'big'];
  var result2 = ['the', 'big'];
  
  var testResults = [
    testFunctionWorks(shortWords, input1, result1),
    testFunctionWorks(shortWords, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();