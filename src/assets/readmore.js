let hideTextBtn1 = document.getElementById("hide-text-btn-1");

let hideText1 = document.getElementById("hide-text-1");

let hideTextBtn2 = document.getElementById("hide-text-btn-2");

let hideText2 = document.getElementById("hide-text-2");

let hideTextBtn3 = document.getElementById("hide-text-btn-3");

let hideText3 = document.getElementById("hide-text-3");

let hideTextBtnJuridic = document.getElementById("hide-text-btn-juridic");

let hideTextJuridic = document.getElementById("hide-text-juridic");

hideTextBtn1.addEventListener('click',toggleText);
hideTextBtn2.addEventListener('click',toggleText2);
hideTextBtn3.addEventListener('click',toggleText3);
hideTextBtnJuridic.addEventListener('click',toggleTextJuridic);

function toggleText(){
    hideText1.classList.toggle('show');
}

function toggleText2(){
    hideText2.classList.toggle('show');
}

function toggleText3(){
    hideText3.classList.toggle('show');
}

function toggleTextJuridic(){
    hideTextJuridic.classList.toggle('show');
}

