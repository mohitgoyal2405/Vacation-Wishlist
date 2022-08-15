var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    //capture form values
    var destName = event.target.elements['name'].value;
    var destLoc = event.target.elements['location'].value;
    var destPic = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;
    //console.log(destName);
    //console.log(destLoc);
    //console.log(destPic);
    //console.log(destDesc);

    //clear form values
    document.getElementById('name').value = '';
    document.getElementById('location').value = '';
    document.getElementById('photo').value = '';
    document.getElementById('description').value = '';
    
    //for( let i=0; i<detailsForm.length; i++) {
        //detailsForm.elements[i].value = '';
    //}

    //create card

    var destCard = createDestinationCard(destName,destLoc,destPic,destDesc);

    var wishListContainer = document.getElementById('destinations_container');

    if( wishListContainer.children.length === 0 ) {
        document.getElementById('title').innerText = "My Wish List";
    }

    //add the card
    document.querySelector('#destinations_container').appendChild(destCard);

    cardCount();
}

//creating dynamic cards
function createDestinationCard(name,location,photoUrl,desc) {
    var card = document.createElement('div');
    card.className = 'card';

    var img = document.createElement('img');
    img.setAttribute('alt',name);

    var constantPhotoUrl = "images/signpost.jpg";

    if( photoUrl.length === 0 ) {
        img.setAttribute('src', constantPhotoUrl);
    }
    else {
        img.setAttribute('src', photoUrl);
    }
    card.appendChild(img);

    var cardBody = document.createElement('div');
    cardBody.className = "card-body";

    var cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubTitle = document.createElement('h4');
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);

    if( desc.length !== 0 ) {
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = desc;
        cardBody.appendChild(cardText);
    }

    var cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText = 'Remove';

    cardDeleteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;
}

/*Remove Card Funtion*/
function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();
}

function cardCount() {
    var cardCountSum = document.querySelector("#destinations_container").childElementCount;
    document.getElementById('title').innerText = "My Wish List (" + cardCountSum + ")";
}