'use strict'

const text = document.querySelector(".second-text");

const textLoad =()=> {

    setTimeout(() => {
        text.textContent ="A Front-end Developer";
    },1000);
    setTimeout(() => {
        text.textContent =" A Technical Writer";
    },4000);
    setTimeout(() => {
        text.textContent =" A Dancer";
    },7000);
} 
textLoad();
setInterval(textLoad, 9000);