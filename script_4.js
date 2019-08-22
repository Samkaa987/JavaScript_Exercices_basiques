const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre années 70

console.log("1 : Voici la liste des entrepreneurs qui sont nés dans les années 70 :")

entrepreneurs.forEach(entrepreneur => {
  if( (entrepreneur.year < 1980) && (entrepreneur.year >= 1970)) {
    console.log(entrepreneur)
  }
});
// Autre solution :
// result = entrepreneurs.filter(entrepreneur => (entrepreneur.year < 1980) && (entrepreneur.year >= 1970));
// console.log(result);

// Liste prénom + nom
console.log("2 : Voici les prénoms et noms des entrepreneurs:")
fullNamesArray = [];
entrepreneurs.forEach(entrepreneur => {
  fullNamesArray.push(entrepreneur.first + " " + entrepreneur.last);
});

console.log(fullNamesArray);

// Age des entrepreneurs
console.log("3 : Voici l'âge des entrepreneurs aujourd'hui :") 
var currentTime = new Date()
var current_year = currentTime.getFullYear()
entrepreneurs.forEach(entrepreneur => {
  console.log(entrepreneur.first + " " + entrepreneur.last + ": " + (current_year - entrepreneur.year))
});

// Ordre alphabétique
console.log("4 : Voici la liste des entrepreneurs par ordre alphabétique du nom de famille :")
entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : -1)
console.log(entrepreneurs);



