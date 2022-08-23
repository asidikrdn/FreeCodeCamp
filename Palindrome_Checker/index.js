function palindrome(str) {
  str = str.replace(/\W|\s|_/g,'');
  str = str.toLowerCase();
  // console.log(str);
  let result;
  for (let i=0; i<(str.length/2);i++) {
    result = (str[i] === str[str.length-(i+1)]);
    if(result == false) {break;}
    // console.log(str[i]);
    // console.log(str[str.length-(i+1)]);
    // console.log(result);
  }
  return result;
}

palindrome("eye");