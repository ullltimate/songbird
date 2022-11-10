import birdsData from '../js/birds.js';
console.log(birdsData);
var warmUpArray = birdsData[0];
console.log(warmUpArray);

var optionsList = document.querySelector('.options-list');

optionsList.addEventListener('click', (event) => {
    var target = event.target;
    console.log(target.innerHTML);
    changeDidcriptions(target.innerHTML);
})

var instruction = document.querySelector('.instruction');
var descripCard = document.querySelector('.descrip-card');
var cardImgBird = document.querySelector('.card-img');
var cardNameBird = document.querySelector('.item-name');
var cardSpecBird = document.querySelector('.item-spec');
var cardAudioBird = document.querySelector('.item-audio>audio');
var cardDescrirtion =document.querySelector('.card-description');

function changeDidcriptions(name){
    instruction.style.display = 'none';
    descripCard.style.display = 'flex';
    for (var i=0; i<warmUpArray.length; i++){
        if(warmUpArray[i].name === name){
            cardImgBird.src = warmUpArray[i].image;
            cardNameBird.innerText = warmUpArray[i].name;
            cardSpecBird.innerText = warmUpArray[i].species;
            cardAudioBird.src = warmUpArray[i].audio;
            cardAudioBird.load();
            cardDescrirtion.innerText = warmUpArray[i].description;
        }
    }
}
