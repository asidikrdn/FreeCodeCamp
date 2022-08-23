let convertToRoman = (num) => {
  let Roman="";
  while(num>0){
    if(num>=1000){
      Roman += 'M';
      num -= 1000;
      // console.log(num);
      // console.log(Roman);
    }
    else if(num>=900){
      Roman += 'CM';
      num -= 900;
      // console.log(num);
      // console.log(Roman);
    }
    else if(num>=500){
      Roman += 'D';
      num -= 500;
    }
    else if(num>=400){
      Roman += 'CD';
      num -= 400;
    }
    else if(num>=100){
      Roman += 'C';
      num -= 100;
    }
    else if(num>=90){
      Roman += 'XC';
      num -= 90;
    }
    else if(num>=50){
      Roman += 'L';
      num -= 50;
    }
    else if(num>=40){
      Roman += 'XL';
      num -= 40;
    }
    else if(num>=10){
      Roman += 'X';
      num -= 10;
    }
    else if(num>=9){
      Roman += 'IX';
      num -= 9;
    }
    else if(num>=5){
      Roman += 'V';
      num -= 5;
    }
    else if(num>=4){
      Roman += 'IV';
      num -= 4;
    }
    else if(num>=1){
      Roman += 'I';
      num -= 1;
    }
  }
  // console.log(Roman);
  return Roman;
}

convertToRoman(3980);