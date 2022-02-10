let valueElement = document.querySelector(".js-from__imput");
let secondChoose = document.querySelector(".js-second__choose");
let choose = document.querySelector(".js-choose");
let selected = document.querySelector(".js-from__selected");
let buttonElement = document.querySelector(".js-from__button");
let result = document.querySelector(".js-result");
let secondResult = document.querySelector(".js-second__result")
let from = document.querySelector(".js-from")
selected.value = "deg";
choose.value = "gra";
secondChoose.value = "rad";
let degResult = selected.value;
let graResult = choose.value;
let radResult = secondChoose.value;
let degElement = "1";
let graElement = "1.111111111111111111111111";
let radElement = "0.01745329";
selected.addEventListener("change", () => {
    if (selected.value === graResult) {
        choose.value = degResult;
        secondChoose.value = radResult;
        valueElement.max = "400";
        degElement = "0.9";
        graElement = "1";
        radElement = "0.01570796";
    }
    else if (selected.value === radResult) {
        choose.value = graResult;
        secondChoose.value = degResult;
        valueElement.max = "6.28318531";
        degElement = "57.29577951";
        graElement = "63.66197724";
        radElement = "1"
    }
    else {
        choose.value = graResult;
        secondChoose.value = radResult;
        valueElement.max = "360";
        degElement = "1";
        graElement = "1.111111111111111111111111";
        radElement = "0.01745329"
    }
})
from.addEventListener("submit", (event) => {
    event.preventDefault();
    if (selected.value === graResult) {
        result.value = (valueElement.value * degElement).toFixed(4);
        secondResult.value = (valueElement.value * radElement).toFixed(4);
    }
    else if (selected.value === radResult) {
        
        result.value = (valueElement.value * graElement).toFixed(4);
        secondResult.value = (valueElement.value * degElement).toFixed(4);
    }
    else {
        result.value = (valueElement.value * graElement).toFixed(4);
        secondResult.value = (valueElement.value * radElement).toFixed(4);
    };
})
buttonElement.addEventListener("click", () => {
    valueElement.value = "";
    result.value = "";
    secondResult.value = "";
})