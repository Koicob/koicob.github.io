let count = 0;

document.getElementById("counter").innerText = count;


function tickUp() {
    count = count + 1;
    document.getElementById("counter").innerText = count;
}

function tickDown() {
    count = count - 1;
    document.getElementById("counter").innerText = count;
}


function runForLoop() {
    let resultText = "";
    let i = 0;

    for (i = 0; i <= count; i = i + 1) {
        resultText = resultText + i;
        resultText = resultText + " ";
    }

    document.getElementById("forLoopResult").innerText = resultText;
}

function showOddNumbers() {
    let resultText = "";
    let i = 1;

    for (i = 1; i <= count; i = i + 1) {
        if (i % 2 == 1) {
            resultText = resultText + i;
            resultText = resultText + " ";
        }
    }

    document.getElementById("oddNumberResult").innerText = resultText;
}


function addMultiplesToArray() {
    let numbers = [];
    let i = 0;

    for (i = count; i >= 0; i = i - 1) {
        if (i % 5 == 0 && i >= 5) {
            numbers.push(i);
        }
    }

    console.log(numbers);
}


function printCarObject() {
    let typeValue = document.getElementById("carType").value;
    let mpgValue = document.getElementById("carMPG").value;
    let colorValue = document.getElementById("carColor").value;

    let car = {};
    car.cType = typeValue;
    car.cMPG = mpgValue;
    car.cColor = colorValue;

    console.log(car);
}

function loadCar(carNumber) {
    let selectedCar = null;

    if (carNumber == 1) {
        selectedCar = carObject1;
    }

    if (carNumber == 2) {
        selectedCar = carObject2;
    }

    if (carNumber == 3) {
        selectedCar = carObject3;
    }

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}


function changeColor(choice) {
    let paragraph = document.getElementById("styleParagraph");

    if (choice == 1) {
        paragraph.style.color = "red";
    }

    if (choice == 2) {
        paragraph.style.color = "green";
    }

    if (choice == 3) {
        paragraph.style.color = "blue";
    }
}
