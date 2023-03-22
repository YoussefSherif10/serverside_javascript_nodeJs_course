const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}


// sync Callback predicate
// in pred. params are also index and entire array

companies.forEach((company) => {
    console.log(company);
});


// filter pushes any entry that fulfills the condition
// the return of the predicate is true or false.
//the true means push that item into the new array

const overAge = ages.filter(a => a >= 21);
console.log(overAge);

const retailComp = companies.filter((company) => company.category === "Retail");
console.log(retailComp);

const lasted = companies.filter(c => (c.end - c.start) >= 10);
console.log(lasted);



// in map, we can return just what we want.
// params can also be indexed , whole array

const coompanyNames = companies.map(c => c.name);
console.log(coompanyNames);

const testMap = companies.map(c => `${c.name} [${c.start} -> ${c.end}]`);
console.log(testMap);

const squareAges = ages.map(c => Math.sqrt(c));
console.log(squareAges);


const ageMap = ages
    .map(a => Math.sqrt(a))
    .map(a => a * 2);
console.log(ageMap);

const reverseSortedStart = companies.sort((a, b) =>
    // 1 is b first
    // -1 is a first
    (a.start < b.start) ? 1 : -1
);
console.log(reverseSortedStart);




