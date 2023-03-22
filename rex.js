let str = "I Love javascript and nodejs";

const rex = /\w+\s/g;

let words = str.match(rex);
console.log(words);

let isThere = rex.test(str);
console.log(isThere);

let str1 = str.replaceAll(/(?:I|N)\w*\s/g, "am");
console.log(str1);

let splitted = str.split(/o/g);
console.log(splitted);

