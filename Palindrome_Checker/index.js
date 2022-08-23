function palindrome(str) {
  str = str.replace(/\W|\s|_/g,'');
  str = str.toLowerCase();
  let newStr = str.split('');
  // console.log(newStr);
  let result;
  for (let i=0; i<(newStr.length/2);i++) {
    result = (newStr[i] === newStr[newStr.length-(i+1)]);
    if(result == false) {break;}
    // console.log(newStr[i]);
    // console.log(newStr[newStr.length-(i+1)]);
    // console.log(result);
  }
  return result;
}

palindrome("eye");