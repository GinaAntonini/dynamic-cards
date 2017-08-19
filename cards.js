
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

var cards = [];

var cardContainerDiv= document.getElementById('cardContainer');
var inputField= document.getElementById('textarea');
var createButton= document.getElementById('createButton');

function createNewCard (arr){
	arr.push(inputField.value)
}

function buildDomString (arr){
	var cardString = '';
	for(var i = 0; i < arr.length; i++){
		var domString = "";
	domString+=`<div class="card" id="card">`;
	domString+=`<p>${cards[i]}</p>`;
    domString+=`<button id="deleteButton" class="delete-button">Delete</button>`;
    domString+=`</div>`;
    cardString += domString;
	}
	cardContainerDiv.innerHTML = cardString;
	console.log(cardString);
};

createButton.addEventListener('click',function(){
	createNewCard(cards);
	buildDomString(cards);
	console.log(cards);
});

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

cardContainerDiv.addEventListener("click", function(e){
    if(event.target.className === "delete-button"){
        var parent = event.target.parentNode.parentNode;
        var child = event.target.parentNode;
        parent.removeChild(child);
    }
});