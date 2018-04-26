var trialNumber = 0;
var trialData = [];
var itemA = 0;
var itemB = 0;
var ComparingTrial = 0;
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
	comparingStart();

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

function comparingStart(){
  //randomly select two of the products
	//put into one question with silde bar
	itemA = Math.floor(Math.random() * 54);
		// reset the slider
	itemB = Math.floor(Math.random() * 54);

	if (itemA != itemB) {

				document.getElementById('Text1').innerHTML = products[itemA].name;
				document.getElementById("Picture1").src = products[itemA].img;

				document.getElementById('Text2').innerHTML = products[itemB].name;
				document.getElementById("Picture2").src = products[itemB].img;

				document.getElementById('CompSlider').value = 500;

				document.getElementById('Comparing').style.display = 'block';
				document.getElementById('nextitem').disabled=true;;
				document.getElementById('nextitem').style.backgroundColor="grey";
    }
 else {
	comparingStart()
}


}

//record the data in a right way
//end the loop
function comparingDone() {
	document.getElementById('Comparing').style.display = 'none';

	//need to figure out how to record the data precisely
	trialData.push({
		ComparingTrial: ComparingTrial,
		itemA: products[itemA],
		itemB: products[itemB],
		ComparingResponse: document.getElementById('trialSlider').value});
	ComparingTrial = ComparingTrial + 1;
	if (ComparingTrial >= 20) {
		trialStart()
		}
		else {
		comparingStart()
	}

}


function experimentDone(){
	window.location = 'http://www.evullab.org';
}
