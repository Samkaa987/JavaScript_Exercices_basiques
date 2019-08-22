const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Emprunter une fois ?
console.log("1 : Tous les livres ont-ils été empruntés au moins une fois ?")
result = books.filter(book => book.rented >= 1);

if (result.length == books.length) {
  console.log("Oui, tous les livres ont été emprunté au moins une fois !");
} else {
  console.log("Non, au moins un livre n'a jamais été emprunté !");
}

// Livre le plus emprunté
console.log("2 : Voici le livre le plus emprunté :")
rented = books.sort((a,b) => (a.rented < b.rented) ? 1 : -1)
console.log(rented[0]);

// Livre le moins emprunté
console.log("3 : Voici le livre le moins emprunté :")
rented = books.sort((a,b) => (a.rented > b.rented) ? 1 : -1)
console.log(rented[0]);

// Livre avec l'ID: 873495
console.log("4 : Voici le livre avec l'ID: 873495 :")
result = books.filter(book => (book.id == 873495));
console.log(result[0]);

// Suppression du livre avec l'ID: 133712
console.log("5 : Suppression du livre avec l'ID: 133712")

books.splice(books.indexOf(books.find(book => book.id == "133712")), 1);
console.log("(Affichage de la liste des livres pour vérifier)")
console.log(books);


// Triage par ordre alphabétique
console.log("6 : Voici la liste des livres par ordre alphabétique :")
books.sort((a,b) => (a.title.toLowerCase > b.title.toLowerCase) ? 1 : -1)

books.forEach(book => {
	console.log(book);
});
