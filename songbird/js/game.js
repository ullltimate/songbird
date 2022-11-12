import birdsData from '../js/birds.js';
console.log(birdsData);
var warmUpArray = birdsData[0];
console.log(warmUpArray);
var birdsDataFlat = birdsData.flat();
console.log(birdsDataFlat);

var optionsList = document.querySelector('.options-list');
var levelList = document.querySelectorAll('.level-link');
console.log(levelList);
var questionAudio = document.querySelector('.question-bock>audio');
var questionName;
var questionImg;
var questionTitle = document.querySelector('.question-title');
var questionImage = document.querySelector('.question-img');
var btnNextLevel = document.querySelector('.btn-level');

for (var i=0; i<levelList.length; i++){
    if(levelList[i].classList.contains('active') === true){
        randomQuestion(warmUpArray);
    }
}

function randomQuestion(array){
    var randomId = random(1,6);
    console.log(randomId);
    questionTitle.innerHTML = '******';
    questionImage.src = "../../assets/img/bird2.png";
    for (var i=0; i<array.length; i++){
        if(array[i].id === randomId){
            questionAudio.src = array[i].audio;
            questionAudio.load();
            questionName = array[i].name;
            questionImg = array[i].image;
        }
    }
}

console.log(questionAudio);
console.log(questionName);



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
    changeDidcriptions(target.innerHTML, birdsDataFlat);
    check(target.innerHTML, questionName, target);
})

var instruction = document.querySelector('.instruction');
var descripCard = document.querySelector('.descrip-card');
var cardImgBird = document.querySelector('.card-img');
var cardNameBird = document.querySelector('.item-name');
var cardSpecBird = document.querySelector('.item-spec');
var cardAudioBird = document.querySelector('.item-audio>audio');
var cardDescrirtion =document.querySelector('.card-description');

function changeDidcriptions(name, array){
    instruction.style.display = 'none';
    descripCard.style.display = 'flex';
    for (var i=0; i<array.length; i++){
        if(array[i].name === name){
            cardImgBird.src = array[i].image;
            cardNameBird.innerText = array[i].name;
            cardSpecBird.innerText = array[i].species;
            cardAudioBird.src = array[i].audio;
            cardAudioBird.load();
            cardDescrirtion.innerText = array[i].description;
        }
    }
}
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var o=1;
var j=1;
btnNextLevel.addEventListener('click', () => {
    if (o>5){
        rezulsPage();
    } else {
        activeLevel(levelList);
        levelOptions(optionsItemArray, birdsData[j]);
        randomQuestion(birdsData[j]);
        j++
    }
})
function activeLevel(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i].classList.contains('active')){
            arr[i].classList.remove('active');
            arr[o].classList.add('active');
            console.log(o);
        }
    }
    if(btnNextLevel.classList.contains('win')){
        btnNextLevel.classList.remove('win');
        btnNextLevel.disabled = true;
    }
    o++;
}
console.log(document.querySelector('.active'))

var optionsItemArray = document.querySelectorAll('.option-item');
console.log(optionsItemArray)

function levelOptions(optArray, array){
    for (var i=0; i<optArray.length; i++){
        optArray[i].innerHTML = array[i].name;
        if (optArray[i].classList.contains('win') || optArray[i].classList.contains('lose')){
            optArray[i].classList.remove('win');
            optArray[i].classList.remove('lose');
        }
    }
    if(instruction.style.display === 'none'){
        instruction.style.display = 'block';
        descripCard.style.display = 'none';
    }
}

var cleanElement = document.querySelector('.main .wrapper');
console.log(cleanElement)

function rezulsPage(){
    cleanElement.innerHTML = '';
    var rezultTitle = document.createElement('h1');
    cleanElement.append(rezultTitle);
    rezultTitle.innerText = 'ПОЗДРАВЛЯЕМ!';
    rezultTitle.className = 'result-title';
    var rezultText = document.createElement('p');
    cleanElement.append(rezultText);
    rezultText.className = 'result-text';
    rezultText.innerHTML = 'Вы прошли викторину и набрали <a class="point">0</a> из 30 возможных баллов';
    var btnNewGame = document.createElement('button');
    cleanElement.append(btnNewGame);
    btnNewGame.className = 'btn-game';
    btnNewGame.innerText = 'Попробовать еще раз!';
    btnNewGame.addEventListener('click', () => {
        document.location.reload();
    })
}