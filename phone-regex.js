// US phone regex
/*
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
*/
function telephoneCheck(str) {
  return str.match(/^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/) !== null;
}

telephoneCheck("555-555-5555");
