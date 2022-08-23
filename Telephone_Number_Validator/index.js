let telephoneCheck = (str) => {
  // console.log(str);
  let validator = /^1? ?\d{3}-\d{3}-\d{4}$|^1? ?\(\d{3}\)\d{3}-\d{4}$|^1? ?\(\d{3}\) \d{3}-\d{4}$|^1? ?\d{3} \d{3} \d{4}$|^1? ?\d{10}$|^1? \d{3} \d{3} \d{4}$/;
  // console.log(validator.test(str));
  return validator.test(str);
}