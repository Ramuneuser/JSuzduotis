console.log ("test")

//1. Paspaudus ant mygtuko, puslapyje esantis div atsiranda/ pranyksta

function paspausti () {
    var square = document.getElementById ("square");
    if (square.style.display ==="none") {
        square.style.display = "block";
    } else {
        square.style.display = "none"
    }
}

//2. Turit vieną div, su aukščiu,pločiu ir spalva bei 4 mygtukus, su kuriais galit valdyt sukurto div savybes: plotis, aukstis, centravimas ir pozicija

function width1(){
    var square1 = document.getElementById("square1");
    if (square1.style.width === "200px"){
        square1.style.width = "100px";
    } else{
        square1.style.width = "200px";
    }
}

function height1(){
    var square1 = document.getElementById("square1");
    if (square1.style.height === "200px"){
        square1.style.height = "100px";
    } else{
        square1.style.height = "200px";
    }
}

function center1(){
    var square1 = document.getElementById("square1");
    if (square1.style.marginLeft === "0px"){
        square1.style.marginLeft = "30px";
    } else{
        square1.style.marginLeft = "0px";
    }
}

function BackToPosition1(){
    var square1 = document.getElementById("square1");
    if (square1.style.marginTop === "30px"){
        square1.style.marginTop = "0px";
    } else{
        square1.style.marginTop = "30px";
    }
}

//4. Bent 4 div elementai, pradžioje visi juodos spalvos, paspaudus bent ant vieno iš jų, yra pakeičiamos spalvos visiems. Spalvos generuojamos random.

function diffColor()
{
    let r, g, b, col1;
    let change1 = document.querySelector('#change1');
    let column1 = document.getElementById('column1');

    r = Math.floor(Math.random() * 256).toString();
    g = Math.floor(Math.random() * 256).toString();
    b = Math.floor(Math.random() * 256).toString();
    col1 = `rgb(${r},${g},${b})`;
    change1.textContent = col1;
    column1.style.backgroundColor = col1

    let r1, g1, b1, col2;
    let change2 = document.querySelector('#change2');
    let column2 = document.getElementById('column2');

    r1 = Math.floor(Math.random() * 256).toString();
    g1 = Math.floor(Math.random() * 256).toString();
    b1 = Math.floor(Math.random() * 256).toString();
    col2 = `rgb(${r},${g},${b})`;
    change2.textContent = col2;
    column2.style.backgroundColor = col2

    let r11, g11, b11, col3;
    let change3 = document.querySelector('#change3');
    let column3 = document.getElementById('column3');

    r11 = Math.floor(Math.random() * 256).toString();
    g11 = Math.floor(Math.random() * 256).toString();
    b11 = Math.floor(Math.random() * 256).toString();
    col3 = `rgb(${r},${g},${b})`;
    change3.textContent = col3;
    column3.style.backgroundColor = col3

    let r111, g111, b111, col111;
    let change4 = document.querySelector('#change4');
    let column4 = document.getElementById('column4');

    r111 = Math.floor(Math.random() * 256).toString();
    g111 = Math.floor(Math.random() * 256).toString();
    b111 = Math.floor(Math.random() * 256).toString();
    col4 = `rgb(${r},${g},${b})`;
    change4.textContent = col4;
    column4.style.backgroundColor = col4
}