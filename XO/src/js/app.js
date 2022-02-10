const getElementCross = document.getElementById('cross')
const getElementZero = document.getElementById('zero')

render()

function render() {
    for (let i=0; i<9;i++) {
        document.getElementById('game').innerHTML +='<div class = "block"></div>'
    }
}

function newRender() {
    const element = document.getElementById('game')
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    render()
}
let hod = 0;
let cross = 0, zero = 0


document.getElementById('game').onclick = function (event) {
    console.log(event);
    if (event.target.className =='block') {
        if (hod %2 == 0) {
            event.target.innerHTML = 'X';
        }
        else {
            event.target.innerHTML = 'O';
        }
        hod++;
        checkWinner();
    }
}


function  checkWinner() {
    let allblock = document.getElementsByClassName('block')

    function updateStateCross() {
        alert('You Win - Congratulations (X)')
        confirm("Начать заново ?");
        cross++;
        getElementCross.innerHTML = `${cross}`;
        newRender();

    }
        if (allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X' && allblock[2].innerHTML == 'X')
            updateStateCross()
        if (allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X')
            updateStateCross()
        if (allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X')
            updateStateCross()
        if (allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X')
            updateStateCross()
        if (allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X')
            updateStateCross()
        if (allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[8].innerHTML == 'X')
            updateStateCross()
        if (allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X')
            updateStateCross()
        if (allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML == 'X')
            updateStateCross()

    function updateStateZero() {
        alert('You Win - Congratulations (O)')
        confirm("Начать заново ?");
        zero++;
        getElementZero.innerHTML = `${zero}`;
        newRender();

    }
        if (allblock[0].innerHTML == 'O' && allblock[1].innerHTML == 'O' && allblock[2].innerHTML == 'O')
            updateStateZero()
        if (allblock[3].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[5].innerHTML == 'O')
            updateStateZero()
        if (allblock[6].innerHTML == 'O' && allblock[7].innerHTML == 'O' && allblock[8].innerHTML == 'O')
            updateStateZero()
        if (allblock[0].innerHTML == 'O' && allblock[3].innerHTML == 'O' && allblock[6].innerHTML == 'O')
            updateStateZero()
        if (allblock[1].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[7].innerHTML == 'O')
            updateStateZero()
        if (allblock[2].innerHTML == 'O' && allblock[5].innerHTML == 'O' && allblock[8].innerHTML == 'O')
            updateStateZero()
        if (allblock[0].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[8].innerHTML == 'O')
            updateStateZero()
        if (allblock[2].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[6].innerHTML == 'O')
            updateStateZero()

}