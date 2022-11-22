import birdsData from '../js/birds.js';
import i18Object from '../js/translate-game-page.js';
console.log(i18Object);
import birdsDataEn from '../js/birdsEn.js';
console.log(birdsDataEn);
console.log(localStorage.getItem('lang'));

var warmUpArray = birdsData[0];
var warmUpArrayEn = birdsDataEn[0];
var birdsDataFlat = birdsData.flat();
var birdsDataFlatEn = birdsDataEn.flat();


var audioWin = document.querySelector('.audio-win');
var audioError = document.querySelector('.audio-error');
var optionsList = document.querySelector('.options-list');
var levelList = document.querySelectorAll('.level-link');
var questionAudio = document.querySelector('.question-bock>audio');
var questionName;
var questionImg;
var questionTitle = document.querySelector('.question-title');
var questionImage = document.querySelector('.question-img');
var btnNextLevel = document.querySelector('.btn-level');
var optionsItemArray = document.querySelectorAll('.option-item');
var points = document.querySelector('.points');
var count = 0;

var en = i18Object.en;
function getTranslate(lang){
    var arrData = document.querySelectorAll('[data-i18n]');
    for (var i=0; i<arrData.length; i++){
        console.log(arrData[i].className === 'option-item')
        if(arrData[i].className === 'option-item'){
            arrData[i].innerHTML = `<div class="item-circ"></div>${Object.values(lang)[i]}`
        } else {
            arrData[i].textContent = Object.values(lang)[i];
        }
    }
}
if(localStorage.getItem('lang') === 'en'){
    getTranslate(en);
}

for (var i=0; i<levelList.length; i++){
    if(levelList[i].classList.contains('active') === true){
        if(localStorage.getItem('lang') === 'en'){
            randomQuestion(warmUpArrayEn);
        } else {
            randomQuestion(warmUpArray);
        }
    }
}

function randomQuestion(array){
    var randomId = random(1,6);
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

function check(clickName, questName, clickElem, circ){
    for (var i=0; i<optionsItemArray.length; i++){
        if (optionsItemArray[i].classList.contains('win')){
            return;
        }
    }
    if(clickName === questName){
        clickElem.classList.add('win');
        questionTitle.innerText = questionName;
        questionImage.src = questionImg;
        btnNextLevel.disabled = false;
        btnNextLevel.classList.add('win');
        count += 5;
        points.innerHTML = count;
        audioWin.play();
        questionAudio.pause();
        circ.style.background = 'green';
    } else {
        clickElem.classList.add('lose');
        count -=1;
        audioError.play();
        circ.style.background = 'red';
    }
}

optionsList.addEventListener('click', (event) => {
    var target = event.target;
    if(localStorage.getItem('lang') === 'en'){
        changeDidcriptions(target.innerText, birdsDataFlatEn);
        check(target.innerText, questionName, target, target.firstChild);
    } else {
        changeDidcriptions(target.innerText, birdsDataFlat);
        check(target.innerText, questionName, target, target.firstChild);
    }
})

var instruction = document.querySelector('.instruction');
var descripCard = document.querySelector('.descrip-card');
var cardImgBird = document.querySelector('.card-img');
var cardNameBird = document.querySelector('.item-name');
var cardSpecBird = document.querySelector('.item-spec');
var cardAudioBird = document.querySelector('.item-audio>audio');
var cardDescrirtion = document.querySelector('.card-description');

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
        if(localStorage.getItem('lang') === 'en'){
            activeLevel(levelList);
            levelOptions(optionsItemArray, birdsDataEn[j]);
            randomQuestion(birdsDataEn[j]);
            j++
        } else{
            activeLevel(levelList);
            levelOptions(optionsItemArray, birdsData[j]);
            randomQuestion(birdsData[j]);
            j++
        }
    }
})

function activeLevel(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i].classList.contains('active')){
            arr[i].classList.remove('active');
            arr[o].classList.add('active');
        }
    }
    if(btnNextLevel.classList.contains('win')){
        btnNextLevel.classList.remove('win');
        btnNextLevel.disabled = true;
    }
    o++;
}

function levelOptions(optArray, array){
    for (var i=0; i<optArray.length; i++){
        optArray[i].innerHTML = `<div class="item-circ"></div>${array[i].name}`;

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

function rezulsPage(){
    if(localStorage.getItem('lang') === 'en'){
        var countPoint = points.innerHTML;
        cleanElement.innerHTML = '';
        var rezultTitle = document.createElement('h1');
        cleanElement.append(rezultTitle);
        rezultTitle.innerText = 'CONGRATULATIONS!';
        rezultTitle.className = 'result-title';
        var rezultText = document.createElement('p');
        cleanElement.append(rezultText);
        rezultText.className = 'result-text';
        rezultText.innerHTML = 'You passed the quiz and scored <a class="point">0</a> out of 30 possible points';
        var pointElem = document.querySelector('.point');
        pointElem.innerHTML = countPoint;
        var btnNewGame = document.createElement('button');
        cleanElement.append(btnNewGame);
        btnNewGame.className = 'btn-game';
        btnNewGame.innerText = 'Try again!';
        btnNewGame.addEventListener('click', () => {
            document.location.reload();
        })
    } else {
        var countPoint = points.innerHTML;
        cleanElement.innerHTML = '';
        var rezultTitle = document.createElement('h1');
        cleanElement.append(rezultTitle);
        rezultTitle.innerText = 'ПОЗДРАВЛЯЕМ!';
        rezultTitle.className = 'result-title';
        var rezultText = document.createElement('p');
        cleanElement.append(rezultText);
        rezultText.className = 'result-text';
        rezultText.innerHTML = 'Вы прошли викторину и набрали <a class="point">0</a> из 30 возможных баллов';
        var pointElem = document.querySelector('.point');
        pointElem.innerHTML = countPoint;
        var btnNewGame = document.createElement('button');
        cleanElement.append(btnNewGame);
        btnNewGame.className = 'btn-game';
        btnNewGame.innerText = 'Попробовать еще раз!';
        btnNewGame.addEventListener('click', () => {
            document.location.reload();
        })
    }
}