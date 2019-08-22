// str = "UUACGCAGUAGA"

str = prompt ("Donne moi un ARN et je te le transforme en une suite d'acides aminés !");

function convertElement(element) {
  if ((element === "UCU") || (element === "UCC") || (element === "UCA") || (element === "UCG") || (element === "AGU") || (element === "AGC")) {
    return "Sérine";
  } else if ((element === "CCU") || (element === "CCC") || (element === "CCA")||(element === "CCG")) {
    return "Proline";
  } else if ((element === "UUA") || (element === "UUG")) {
    return "Leucine";
  } else if ((element === "UUU") || (element === "UUC")) {
    return "Phénylalanine";
  } else if ((element === "CGU") || (element === "CGC") || (element === "CGA") || (element === "CGG") || (element === "AGA") || (element === "AGG")) {
    return "Arginine";
  } else if ((element === "UAU") || (element === "UAC")) {
    return "Tyrosine";
  } else {
    console.log('Error');
  }
};

let separated = str.match(/.{1,3}/g);
let almost_finished = separated.map(element => convertElement(element));
let tadaaaaa = almost_finished.join("-")

console.log(tadaaaaa)



