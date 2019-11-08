document.querySelector('#shBtn').onclick = showContainer;
document.querySelector('#color-input').onchange = changeColor;
document.querySelector('#console').onclick = consoleLog;

let inputValue = document.querySelector('#input');

let cntr = document.querySelector('.container');
function showContainer() {
    if (cntr.hidden == false) 
    {
        cntr.hidden = true;
    }
    else
    {
        cntr.hidden = false;
    }
}
function hideContainer() {
    cntr.hidden = true;
}

function changeColor() {    
        cntr.style.backgroundColor = document.querySelector('#color-input').value;
        console.log(document.querySelector('#color-input').value);
}

function consoleLog() {
    let inpVal = inputValue.value;
    console.log(inpVal);
    // console.log(document.querySelector('#color-input').value);
}