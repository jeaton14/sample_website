var trialNumber = 0;
var trialData = [];
products.sort(function(){
return 0.5 -Math.random()
})


//shuffle(products);
//function choosePic() {
//var randomNum = Math.floor(Math.random() * myPictures.length);
//     document.getElementById("myPicture").src = myPictures[randomNum];}

function pageLoad(){

	document.getElementById('consent').style.display = 'block';

}
function clickConsent(){
	document.getElementById('consent').style.display = 'none';
	document.getElementById('instructions').style.display = 'block';

}

function clickInstructions(){
	document.getElementById('instructions').style.display = 'none';
	trialStart();

}


function trialStart(){
	// take next product, and put in the product description.
//	choosePic();
document.getElementById('trialText').innerHTML = products[trialNumber].name;
document.getElementById("myPicture").src = products[trialNumber].img;
	// reset the slider
	document.getElementById('trialSlider').value = 500;

	document.getElementById('trial').style.display = 'block';
document.getElementById('next').disabled=true;;
document.getElementById('next').style.backgroundColor="grey";
}

function trialDone(){
	document.getElementById('trial').style.display = 'none';
	// record what the subject said
	trialData.push({
		trialNumber: trialNumber,
		product: products[trialNumber],
		response: document.getElementById('trialSlider').value});
	// increment the trialNumber
	trialNumber = trialNumber+1;

	// if we are done with all trials, then go to completed page
	if(trialNumber >= products.length){
		document.getElementById('completed').style.display = 'block';
	} else {
	// if we are not done with all trials, then show the next trial.
		trialStart();
	}

}

function experimentDone(){
	window.location = 'http://www.evullab.org';
}

 
