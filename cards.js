
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

var cards = ["asfgdnsgs", "ahsfnsiaofn", "asfafsgasg"];

var cardContainerDiv= document.getElementById('cardContainer');
var inputField= document.getElementById('textarea');
var createNewCard= document.getElementById('createButton');

function createNewCard (){
	var newCard = 
}


function buildDomString (arr){
	var cardString = '';
	for(var i = 0; i < arr.length; i++){
		var domString = "";
	domString+=`<div class="cardContainer" id="cardContainer">`;
    domString+=`<button id="deleteButton">Delete</button>`;
    domString+=`</div>`;
    cardString += domString;
	}
	console.log(cardString);
};

function writeToDom(strang){
	cardContainer.innerHTML = strang;
}

createNewCard.addEventListener('click',function(){
	buildDomString();
});

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

buildDomString(cards);