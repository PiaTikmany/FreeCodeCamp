function palindrome(str) {
    console.log(str)
    const regex = /[^a-zA-Z0-9]/g
    str = str.toLowerCase().replace(regex, '');
    console.log(str)
    let reverseStr = str.split("").reverse().join("");
    console.log(reverseStr)
      if (str === reverseStr) {
              return true;
      } else {
            return false
          }
      } 
  
  
  console.log(palindrome("1 eye for of 1 eye."));