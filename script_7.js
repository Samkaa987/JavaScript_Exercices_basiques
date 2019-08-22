str = prompt ("Salut toi ! Je suis ton nouveau meilleur ami ! Quoi de beau ?");
array = str.split(" ");

if (array[array.length - 1] === "?") {
  console.log("Ouais Ouais...");
} else if ((str == str.toUpperCase()) && (str.length > 0)) {
  console.log("Pwa, calme-toi...");
} else if(str.toUpperCase().includes("FORTNITE")) {
  console.log("on s' fait une partie soum-soum ?");
} else if (str.length == 0) {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
};