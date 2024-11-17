const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        }else if(buttonValue === "="){
            calculateResult();
        }else{
            appendvalue(buttonValue);
        }
    });
}

function clearResult(){
    inputFieldEl.value = "";
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendvalue(buttonValue){
    inputFieldEl.value += buttonValue;
    // inputFieldEl.value += buttonValue + buttonValue;

}