
//Function 1-A
function leastOfNumbers() {
    let a1 = Number(document.getElementById("IFa1").value)
    let a2 = Number(document.getElementById("IFa2").value)
    let a3 = Number(document.getElementById("IFa3").value)
    let a4 = Number(document.getElementById("IFa4").value)
    let a5 = Number(document.getElementById("IFa5").value)
    let resultOfA = Math.min(a1, a2, a3, a4, a5)
    let spanEl = document.getElementById("resultOfA");
    spanEl.innerHTML = `<b>${resultOfA}</b>`;
}

//Function 1-B
function greatestOfNumbers() {
    let b1 = Number(document.getElementById("IFb1").value)
    let b2 = Number(document.getElementById("IFb2").value)
    let b3 = Number(document.getElementById("IFb3").value)
    let b4 = Number(document.getElementById("IFb4").value)
    let b5 = Number(document.getElementById("IFb5").value)
    let resultOfB = Math.max(b1, b2, b3, b4, b5)
    let spanEl = document.getElementById("resultOfB");
    spanEl.innerHTML = `<b>${resultOfB}</b>`;
}

//Function 1-C
function meanOfNumbers() {
    let c1 = Number(document.getElementById("IFc1").value);
    let c2 = Number(document.getElementById("IFc2").value);
    let c3 = Number(document.getElementById("IFc3").value);
    let c4 = Number(document.getElementById("IFc4").value);
    let c5 = Number(document.getElementById("IFc5").value);
    let entries = [c1, c2, c3, c4, c5];
    let sum = entries.reduce(function (sum, secondParameter) {
        return sum += secondParameter;
    });
    let avg = sum / entries.length;
    let resultOfC = avg;
    let spanEl = document.getElementById("resultOfC");
    spanEl.innerHTML = `<b>${resultOfC}</b>`;
}

//Function 1-D
function sumOfNumbers() {
    let d1 = Number(document.getElementById("IFd1").value);
    let d2 = Number(document.getElementById("IFd2").value);
    let d3 = Number(document.getElementById("IFd3").value);
    let d4 = Number(document.getElementById("IFd4").value);
    let d5 = Number(document.getElementById("IFd5").value);
    let entries = [d1, d2, d3, d4, d5];
    let sum = entries.reduce(function (sum, secondParameter) {
        return sum += secondParameter;
    });
    let resultOfD = sum;
    let spanEl = document.getElementById("resultOfD");
    spanEl.innerHTML = `<b>${resultOfD}</b>`;
}

//Function 1-E
function productOfNumbers() {
    let e1 = Number(document.getElementById("IFe1").value);
    let e2 = Number(document.getElementById("IFe2").value);
    let e3 = Number(document.getElementById("IFe3").value);
    let e4 = Number(document.getElementById("IFe4").value);
    let e5 = Number(document.getElementById("IFe5").value);
    let entries = [e1, e2, e3, e4, e5];
    let sum = entries.reduce(function (sum, secondParameter) {
        return sum *= secondParameter;
    });
    let resultOfE = sum;
    let spanEl = document.getElementById("resultOfE");
    spanEl.innerHTML = `<b>${resultOfE}</b>`;
}




//Function 2 (Factorial of a number)


function factorialOfANumber() {
    let num = Number(document.getElementById("IFQ2").value);
    let output = 1;

    if (num < 0)
        output = -1;
    else if (num == 0)
        output = 1;
    else {
        for (let i = num; i >= 2; i--) { output *= i; }
    }


    let spanEl = document.getElementById("resultOfQ2");
    spanEl.innerHTML = `<b>${output}</b>`;
}


//Question 4 Code (Incomplete)
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
var par = Number(document.getElementById("parInput").value);
var strokes = Number(document.getElementById("strokesInput").value);
var q4Answer = "";
function golfScore(par, strokes) {
    if (strokes == 1) {
        q4Answer = names[0];
    }
    else if (strokes <= par - 2) {
        q4Answer = names[1];
    }
    else if (strokes == par - 1) {
        q4Answer = names[2];
    }
    else if (strokes == par) {
        q4Answer = names[3];
    }
    else if (strokes == par + 1) {
        q4Answer = names[4];
    }
    else if (strokes == par + 2) {
        q4Answer = names[5];
    }
    else if (strokes >= par + 3) {
        q4Answer = names[6];
    }
    q4Answer = "Error";

    let spanEl = document.getElementById("resultOfQ4")
    spanEl.innerHTML = q4Answer;
}


