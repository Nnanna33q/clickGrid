let container = document.querySelector('.container');
let squares = container.children;
let controls = document.querySelector('.controls');
let alphabets = document.querySelectorAll('.color-container')[1].children;
let position = 0;
let num = 0;
let color1 = 0;
let color2 = 0;
let color3 = 0;
let color4 = 0;
let color5 = 0;
let color6 = 0;
let color7 = 0;
let color8 = 0;
let color9 = 0;
let color10 = 0;
let squareA = 0;
let squareB = 0;
let squareC = 0;
let squareD = 0;
let squareE = 0;
let squareF = 0;
let squareG = 0;
let squareH = 0;
let squareI = 0;
let icon = document.querySelector('.icon');
let number = document.querySelector('.number');
container.addEventListener('click', (e) => {
    let random = Math.floor(Math.random() * 10);
    let colors = document.querySelectorAll('.color');
    if (e.target.classList[0] === 'cells') {
        e.target.style.cssText = `transform: rotateZ(${position += 360}deg); transition: 0.5s;`
    }

    const whitebg = (col) => {
        col.style.backgroundColor = 'rgb(222, 212, 212)';
        col.style.transition = '0.2s';
    }

    if (e.target.classList[0] === 'cells') {
        if (random === 0) {
            e.target.style.backgroundColor = 'blue';
            colors[0].style.backgroundColor = 'blue'
            document.querySelector('.blue').innerText = color1 += 1;
            setTimeout(whitebg, 1000, colors[0]);
        } else if (random === 1) {
            e.target.style.backgroundColor = 'red';
            document.querySelector('.red').innerText = color2 += 1;
            setTimeout(whitebg, 1000, colors[1]);
            colors[1].style.backgroundColor = 'red';
        } else if (random === 2) {
            e.target.style.backgroundColor = 'green';
            document.querySelector('.green').innerText = color3 += 1;
            setTimeout(whitebg, 1000, colors[2]);
            colors[2].style.backgroundColor = 'green';
        } else if (random === 3) {
            e.target.style.backgroundColor = 'yellow';
            document.querySelector('.yellow').innerText = color4 += 1;
            setTimeout(whitebg, 1000, colors[3]);
            colors[3].style.backgroundColor = 'yellow';
        } else if (random === 4) {
            e.target.style.backgroundColor = 'orange';
            document.querySelector('.orange').innerText = color5 += 1;
            setTimeout(whitebg, 1000, colors[4]);
            colors[4].style.backgroundColor = 'orange';
        } else if (random === 5) {
            e.target.style.backgroundColor = 'indigo';
            document.querySelector('.indigo').innerText = color6 += 1;
            setTimeout(whitebg, 1000, colors[5]);
            colors[5].style.backgroundColor = 'indigo';
        } else if (random === 6) {
            e.target.style.backgroundColor = 'grey';
            document.querySelector('.grey').innerText = color7 += 1;
            setTimeout(whitebg, 1000, colors[6]);
            colors[6].style.backgroundColor = 'grey';
        } else if (random === 7) {
            e.target.style.backgroundColor = 'gold';
            document.querySelector('.gold').innerText = color8 += 1;
            setTimeout(whitebg, 1000, colors[7]);
            colors[7].style.backgroundColor = 'gold';
        } else if (random === 8) {
            e.target.style.backgroundColor = 'brown';
            document.querySelector('.brown').innerText = color9 += 1;
            setTimeout(whitebg, 1000, colors[8]);
            colors[8].style.backgroundColor = 'brown';
        } else if (random === 9) {
            e.target.style.backgroundColor = 'silver';
            document.querySelector('.silver').innerText = color10 += 1;
            setTimeout(whitebg, 1000, colors[9]);
            colors[9].style.backgroundColor = 'silver';
        } else if (e.target.classList[0] !== 'cells') {
            return;
        }
    }
    if (e.target.classList[0] === 'cells') {
        number.innerText = num += 1
    } else {
        return;
    }

    if (e.target === squares[0]) {
        document.querySelector('.squareA').innerText = squareA += 1;
    } else if (e.target === squares[1]) {
        document.querySelector('.squareB').innerText = squareB += 1;
    } else if (e.target === squares[2]) {
        document.querySelector('.squareC').innerText = squareC += 1;
    } else if (e.target === squares[3]) {
        document.querySelector('.squareD').innerText = squareD += 1;
    } else if (e.target === squares[4]) {
        document.querySelector('.squareE').innerText = squareE += 1;
    } else if (e.target === squares[5]) {
        document.querySelector('.squareF').innerText = squareF += 1;
    } else if (e.target === squares[6]) {
        document.querySelector('.squareG').innerText = squareG += 1;
    } else if (e.target === squares[7]) {
        document.querySelector('.squareH').innerText = squareH += 1;
    } else if (e.target === squares[8]) {
        document.querySelector('.squareI').innerText = squareI += 1;
    }
})
document.querySelector('.reset').addEventListener('click', (e) => {
    window.location.reload();
})

const changeColor = (element) => {
    if (element.style.border === '3px solid black') {
        element.style.border = '3px solid red';
    } else {
        element.style.border = '3px solid black';
    }
}

const originalBorder = (element) => {
    element.style.border = '3px solid black;'
}
let inter = setInterval(changeColor, 200, icon);
let button = document.querySelector('.button');
button.addEventListener('click', (e)=>{
    document.querySelector('.message-container').style.cssText = `display: none;`
    clearInterval(inter);
    originalBorder(icon);
})

icon.addEventListener('click', (e)=> {
    document.querySelector('.message-container').style.display = 'block';
})