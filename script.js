var trialNumber = 0;
var trialData = [];
var ComparingTrial = 0;
var comparing = [];
var Trial = 0;
var order = 0;
//shuffle(products);
products.sort(function(){
return 0.5 -Math.random()
})

for (var i = 0; i < products.length; i++)  {
	for (var j = i+1; j < products.length ; j++) {
	 comparing.push({
		 itemA: products[i],
		 itemB: products[j],
	 })
	}
}

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
  order = order+1;
	// if we are done with all trials, then go to completed page
	if(trialNumber >= products.length){
		document.getElementById('completed').style.display = 'block';
	}
else if (order == 4) {
	attention_single();
}
	else {
	// if we are not done with all trials, then show the next trial.
		trialStart();
	}
}

function attention_single(){
	// take next product, and put in the product description.
//	choosePic();
document.getElementById('trial').style.display = 'none';
	attention = Math.floor(Math.random() * products.length);
document.getElementById('attentionText').innerHTML = products[attention].name;
document.getElementById("AttPicture").src = products[attention].img;
	// reset the slider
	document.getElementById('AttSlider').value = 500;

	document.getElementById('trialAttention').style.display = 'block';
document.getElementById('done').disabled=true;
	order = order+1;
}

function Acheck_single(){

 trialData.push({
	 attention:document.getElementById('AttSlider').value});
	document.getElementById('trialAttention').style.display = 'none';

	trialStart();
}


function comparingStart(){
  //randomly select two of the products
	//put into one question with silde bar
  Trial = Math.floor(Math.random() * comparing.length);

				document.getElementById('Text1').innerHTML = comparing[Trial].itemA.name;
				document.getElementById("Picture1").src = comparing[Trial].itemA.img;
				document.getElementById('Text2').innerHTML = comparing[Trial].itemB.name;
				document.getElementById("Picture2").src = comparing[Trial].itemB.img;
				document.getElementById('CompSlider').value = 500;
				document.getElementById('Comparing').style.display = 'block';
				document.getElementById('nextitem').disabled=true;;

}

function attention(){

	document.getElementById("Comparing").style.display = 'none';

	Trial = Math.floor(Math.random() * comparing.length);
	      document.getElementById("attention").style.display = 'block';
				document.getElementById("AText1").innerHTML = comparing[Trial].itemA.name;
				document.getElementById("AText2").innerHTML = comparing[Trial].itemB.name;
				document.getElementById("AttPicture1").src = comparing[Trial].itemA.img;
				document.getElementById("AttPicture2").src = comparing[Trial].itemB.img;
				document.getElementById('attFinish').disabled=true;;
}

function Acheck(){

 trialData.push({
	 attention:document.getElementById('attentionslider').value});
	document.getElementById('attention').style.display = 'none';
	ComparingTrial = ComparingTrial + 1;
	comparingStart()
}

function comparingDone() {
	document.getElementById('Comparing').style.display = 'none';

	trialData.push({
		ComparingTrial: ComparingTrial,
		itemA: comparing[Trial].itemA,
		itemB: comparing[Trial].itemB,
		ComparingResponse: document.getElementById('CompSlider').value});
	ComparingTrial = ComparingTrial + 1;
	//delete the chosed trial
	comparing.splice(Trial,1);
	if (ComparingTrial > 5) {
		trialStart();
		}
		else if (ComparingTrial == 3) {
			attention();
		}
		else {
		comparingStart();
	  }

}


function experimentDone(){
	window.location = 'http://www.evullab.org';
}
