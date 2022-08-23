let rot13 = (str) => {
  str = str.toUpperCase();
  let strNew='';
  for(let i=0; i<str.length; i++) {
    if(/\w/.test(str[i])) {
      // console.log(str[i]);
      let code = str.charCodeAt(i);
      // console.log(code);
      let codeNew = code+13;
      if(codeNew>90){
        codeNew -= 26;
      }
      strNew += String.fromCharCode(codeNew);
    }
    else {
      strNew += str[i];
    }
  }
  console.log(strNew);
  return strNew;
}

rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');