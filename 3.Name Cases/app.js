// lower case
var personName = "Aliya Pervez";
console.log("lower case:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
