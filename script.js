var products = ['jewelry', 'technology', 'accessories', 'clothing', 'bags'];
var trialNumber = 0;
var trialData = [];

function shuffle(){
	products.sort(function(a, b){return 0.5 - Math.random()});
}

function pageLoad(){
	shuffle();
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
	document.getElementById('trialText').innerHTML = products[trialNumber];
	// reset the slider
	var x = document.getElementById("tiffany").src;
    document.getElementById('trialPicture').innerHTML = x;
	document.getElementById('trialSlider').value = 500;

	document.getElementById('trial').style.display = 'block';
document.getElementById('next').disabled=true;
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


 
