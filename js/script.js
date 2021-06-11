//VARIAVEIS
let inputRangeRed = null;
let inputRangeGreen = null;
let inputRangeBlue = null;

let inputTextRed = null;
let inputTextGreen = null;
let inputTextBlue = null;

let divSquare = null;

let r = "0";
let g = "0";
let b = "0";

//FUNÇÃO QUE INICIA A PAGINA
window.addEventListener('load', () => {
    mapElements();
    syncDiv();
});
//SELECIONANDO TODOS OS IDS
function mapElements() {
    inputRangeRed = document.querySelector("#inputRangeRed");
    inputRangeGreen = document.querySelector("#inputRangeGreen");
    inputRangeBlue = document.querySelector("#inputRangeBlue");

    inputTextRed = document.querySelector("#inputTextRed");
    inputTextGreen = document.querySelector("#inputTextGreen");
    inputTextBlue = document.querySelector("#inputTextBlue");

    divSquare = document.querySelector("#divSquare");

    inputRangeRed.addEventListener('change', handleInputRangeChange);
    inputRangeGreen.addEventListener('change', handleInputRangeChange);
    inputRangeBlue.addEventListener('change', handleInputRangeChange);

}

//SETANDO VALOR
function handleInputRangeChange(event) {
    const value = event.target.value;
    const id = event.target.id;

    

    console.log(inputTextBlue);

// ATRIBUINDO VALOR
    switch (id) {
        case "inputRangeRed":
            r = value;
            break;
        case "inputRangeGreen":
            g = value;
            break;
        case "inputRangeBlue":
            b = value;
            break;
    }
    syncDiv();
}

//REDERIZANDO NO CSS
function syncDiv() {
    divSquare.style.backgroundColor = `rgb(${r} ${g} ${b})`
    
    inputTextRed.value = r;
    inputTextGreen.value = g;
    inputTextBlue.value = b;
}




