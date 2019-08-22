
function initialization() {

	const floorNum = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
	console.log(`Tu as demandé ${floorNum} étages.`)
	return floorNum

}




function floorNumConversion(floorNum) {

	console.log(`La réponse enregistrée par le prompt est un ${typeof floorNum}.`);
	console.log(`Conversion du ${typeof floorNum} en number.`);
	const convertedFloorNum = + floorNum;
	console.log(`La réponse enregistrée par le prompt est désormais un ${typeof convertedFloorNum}.`);
	return convertedFloorNum;

}




function pyramidCreate(convertedFloorNum) {
	
	console.log("Voici le résultat :")
	var space = " "
	var block = "#"
	for (i = 1; i <= convertedFloorNum; i++) {

		console.log(space.repeat((convertedFloorNum - i)) + block.repeat(i))

	}

}




function perform() {

	floorNum = initialization()
	convertedFloorNum = floorNumConversion(floorNum)
	pyramidCreate(convertedFloorNum)
	
}




perform()