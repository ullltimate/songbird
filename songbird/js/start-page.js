import i18Obj from '../js/translate-start-page.js';
console.log(i18Obj);

var btnTranslate = document.querySelector('.lang');
var ru = i18Obj.ru;
var en = i18Obj.en;

btnTranslate.addEventListener('click', () => {
    if(btnTranslate.innerText === ru.lang){
        getTranslate(en);
    } else {
        getTranslate(ru);
    }
})

function getTranslate(lang){
    var arrData = document.querySelectorAll('[data-i18]');
    for (var i=0; i<arrData.length; i++){
        arrData[i].innerText = Object.values(lang)[i];
    }
}

function setLocalStorage() {
    localStorage.setItem('lang', btnTranslate.innerText);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('lang') === 'ru') {
        const lang = ru;
        getTranslate(lang);
    } else {
        const lang = en;
        getTranslate(lang);
    }
}
window.addEventListener('load', getLocalStorage);
