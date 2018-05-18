var trialData = [];
var productRanking = [];
var sequence = 0;
products.sort(function(){
return 0.5 -Math.random()
} )

for (var i = 0; i < products.length; i++) {
     productRanking.push({
      itemRanking: products[i],
     })
}

function pageLoad(){
	document.getElementById('consent').style.display = 'block';
}

function clickConsent(){
	document.getElementById('consent').style.display = 'none';
	document.getElementById('instructions').style.display = 'block';
}

function clickInstructions(){
	document.getElementById('instructions').style.display = 'none';
	ranking();
}

function ranking() {
  $('#sortable').html('');
  for(i = 0; i<10; i++){
    current_product = Math.floor(Math.random() * productRanking.length);
    $("#sortable").append("<li id='"+productRanking[current_product].itemRanking.img+"'>"+productRanking[current_product].itemRanking.name+"</li>")
    productRanking.splice(current_product,1);
  }
  document.getElementById('rankingTrial').style.display = 'block';
}

function rankingDone() {
 document.getElementById('rankingTrial').style.display = 'none';
 //record data
 trialData.push({
 ranking: $( "#sortable" ).sortable( "toArray" ),
	})
  sequence = sequence+1;
  if (sequence < 3){
    ranking()
  }
  else {
    document.getElementById('completed').style.display = 'block';
  }
}

function experimentDone(){
	window.location = 'http://www.evullab.org';
}
