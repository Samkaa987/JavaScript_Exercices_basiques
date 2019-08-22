

function initialization(){

	var askFactorial = prompt("De quel nombre veut tu calculer la factorielle ?");
	console.log(`Tu  as choisi de calculer la factorielle de : ${askFactorial}`);
	return askFactorial;

}




function askFactorialConversion(askFactorial) {

	console.log(`La réponse enregistrée par le prompt est un ${typeof askFactorial}.`);
	console.log(`Conversion du ${typeof askFactorial} en number.`);
	var convertedFactorial = + askFactorial;
	console.log(`La réponse enregistrée par le prompt est désormais un ${typeof convertedFactorial}.`);
	return convertedFactorial;

}




function calculationFactorial(convertedFactorial) {

    if (convertedFactorial === 0) { 
    	var result = 1;
    }

    else { 
    	var result = convertedFactorial * calculationFactorial(convertedFactorial - 1); 
    }

    return result;

}




function calculationEnd(result) {
	
	console.log(`Le résultat de l'opération est : ${result}. `);

}




function perform() {

	askFactorial = initialization()
	convertedFactorial = askFactorialConversion(askFactorial)
	result = calculationFactorial(convertedFactorial)
	calculationEnd(result)

}




perform()

