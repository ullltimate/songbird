import birdsData from '../js/birds.js';
console.log(birdsData);
var warmUpArray = birdsData[0];
console.log(warmUpArray);

var optionsList = document.querySelector('.options-list');
var levelList = document.querySelectorAll('.level-link');
console.log(levelList);
var questionAudio = document.querySelector('.question-bock>audio');
var questionName;
var questionImg;

for (var i=0; i<levelList.length; i++){
    if(levelList[i].classList.contains('active') === true){
        randomQuestion();
    }
}

function randomQuestion(){
    var randomId = random(1,6);
    console.log(randomId);
    for (var i=0; i<warmUpArray.length; i++){
        if(warmUpArray[i].id === randomId){
            questionAudio.src = warmUpArray[i].audio;
            questionAudio.load();
            questionName = warmUpArray[i].name;
            questionImg = warmUpArray[i].image;
        }
    }
}

console.log(questionAudio);
console.log(questionName);

var questionTitle = document.querySelector('.question-title');
var questionImage = document.querySelector('.question-img');
var btnNextLevel = document.querySelector('.btn-level');

function check(clickName, questName, clickElem){
    if(clickName === questName){
        clickElem.classList.add('win');
        questionTitle.innerText = questionName;
        questionImage.src = questionImg;
        btnNextLevel.disabled = false;
        btnNextLevel.classList.add('win');
    } else {
        clickElem.classList.add('lose');
    }
}

optionsList.addEventListener('click', (event) => {
    var target = event.target;
    console.log(target.innerHTML);
    changeDidcriptions(target.innerHTML);
    check(target.innerHTML, questionName, target);
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
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}