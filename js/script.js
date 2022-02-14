{
    const welcome = () => {
        console.log("Hello World!")
    };
    welcome();
    const valueElement = document.querySelector(".js-from__imput");
    const secondChoose = document.querySelector(".js-second__choose");
    const choose = document.querySelector(".js-choose");
    const selected = document.querySelector(".js-from__selected");
    const buttonElement = document.querySelector(".js-from__button");
    const result = document.querySelector(".js-result");
    const secondResult = document.querySelector(".js-second__result")
    const from = document.querySelector(".js-from")
    selected.value = "deg";
    choose.value = "gra";
    secondChoose.value = "rad";
    const degResult = selected.value;
    const graResult = choose.value;
    const radResult = secondChoose.value;
    const degElement = "1";
    const graElement = "1.1111111111";
    const radElement = "0.01745329";
    const onSelectedChange = () => {
        if (selected.value === graResult) {
            choose.value = degResult;
            secondChoose.value = radResult;
            valueElement.max = "400";
        }
        else if (selected.value === radResult) {
            choose.value = graResult;
            secondChoose.value = degResult;
            valueElement.max = "6.28318531";
        }
        else {
            choose.value = graResult;
            secondChoose.value = radResult;
            valueElement.max = "360";
        }
    }
    const onResultSubmit = (event) => {
        event.preventDefault();
        if (selected.value === graResult) {
            result.value = (valueElement.value * (degElement / graElement)).toFixed(4);
            secondResult.value = (valueElement.value * (radElement * (degElement / graElement))).toFixed(4);
        }
        else if (selected.value === radResult) {

            result.value = (valueElement.value * ((graElement / degElement) / radElement)).toFixed(4);
            secondResult.value = (valueElement.value * (degElement / radElement)).toFixed(4);
        }
        else {
            result.value = (valueElement.value * graElement).toFixed(4);
            secondResult.value = (valueElement.value * radElement).toFixed(4);
        };
    }
    const onClearClick = () => {
        valueElement.value = "";
        result.value = "";
        secondResult.value = "";
    }
    selected.addEventListener("change", onSelectedChange)
    from.addEventListener("submit", onResultSubmit)
    buttonElement.addEventListener("click", onClearClick)
}