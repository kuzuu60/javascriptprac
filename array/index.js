let x = 123;
// x.toString();
// (123).toString();
// (100 + 23).toString();

console.log(x.toString() + "<br>" + (123).toString() + "<br>" + (100+23).toString());

// toPrecision,toExponential,toFixed gives o/p as per the data we give

//use value of to convert num objs to priimitive values
//Not Needed

//use Number()to convert vars to numbers

//true or false to 1/0 and other vars to NaN

console.log(
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John"));

  console.log(Number(new Date("1970-01-04")))
