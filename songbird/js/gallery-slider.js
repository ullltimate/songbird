import birdsData from '../js/birds.js';
import birdsDataEn from '../js/birdsEn.js';
import i18ObjGal from '../js/translate-gallery-page.js';
console.log(localStorage.getItem('lang'));

var btnRight = document.querySelector('.main-arr-right');
var btnLeft = document.querySelector('.main-arr-left');

var en = i18ObjGal.en;
function getTranslate(lang){
    var arrData = document.querySelectorAll('[data-i18n]');
    for (var i=0; i<arrData.length; i++){
        arrData[i].innerText = Object.values(lang)[i];
    }
}
if(localStorage.getItem('lang') === 'en'){
    getTranslate(en);
}

var i=1;

function sliderNext(){
    if(i>35){
        i=0;
    }
    if(localStorage.getItem('lang') === 'en'){
        var birdDataNew = birdsDataEn.flat();
    } else {
        var birdDataNew = birdsData.flat();
    }
    var nameBird = document.querySelector('.main-card-name');
    var imgBird = document.querySelector('.main-card-img');
    var speciesBird = document.querySelector('.main-cadr-species');
    var descrBird = document.querySelector('.main-card-description');
    var audio = document.querySelector('audio');
    var audioBird = document.querySelector('audio>source');
    var audioBirdDownloads = document.querySelector('audio>a');

    
    var arrayNameBird = birdDataNew.map(x => x.name);
    var arrayImgBird = birdDataNew.map(x => x.image);
    var arraySpecBird = birdDataNew.map(x => x.species);
    var arrayDescrBird = birdDataNew.map(x => x.description);
    var arrayAudioBird = birdDataNew.map(x => x.audio);


    nameBird.innerHTML = arrayNameBird[i];
    imgBird.src = arrayImgBird[i];
    speciesBird.innerHTML = arraySpecBird[i];
    descrBird.innerHTML = arrayDescrBird[i];
    audioBird.src = arrayAudioBird[i];
    audioBirdDownloads.href = arrayAudioBird[i];
    audio.load();

    i++
}
function sliderPrev(){
    if(i<0){
        i=35;
    }
    if(localStorage.getItem('lang') === 'en'){
        var birdDataNew = birdsDataEn.flat();
    } else {
        var birdDataNew = birdsData.flat();
    }
    var nameBird = document.querySelector('.main-card-name');
    var imgBird = document.querySelector('.main-card-img');
    var speciesBird = document.querySelector('.main-cadr-species');
    var descrBird = document.querySelector('.main-card-description');
    var audio = document.querySelector('audio');
    var audioBird = document.querySelector('audio>source');
    var audioBirdDownloads = document.querySelector('audio>a');

    
    var arrayNameBird = birdDataNew.map(x => x.name);
    var arrayImgBird = birdDataNew.map(x => x.image);
    var arraySpecBird = birdDataNew.map(x => x.species);
    var arrayDescrBird = birdDataNew.map(x => x.description);
    var arrayAudioBird = birdDataNew.map(x => x.audio);


    nameBird.innerHTML = arrayNameBird[i];
    imgBird.src = arrayImgBird[i];
    speciesBird.innerHTML = arraySpecBird[i];
    descrBird.innerHTML = arrayDescrBird[i];
    audioBird.src = arrayAudioBird[i];
    audioBirdDownloads.href = arrayAudioBird[i];
    audio.load();

    i--
}

btnRight.addEventListener('click', () => {
    sliderNext();
})
btnLeft.addEventListener('click', () => {
    sliderPrev();
})
