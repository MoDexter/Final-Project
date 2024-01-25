const body = document.querySelector("body");
const date = new Date();
const hour = date.getHours();

if (hour < 17) {
    body.style.backgroundColor = "lightBlue";
} else if (hour > 18) {
    body.style.backgroundColor = "amaranth";

} else {
    body.style.backgroundColor = "pink";
}



const qOneT = document.querySelector("#qOneTrue")
const qOneF = document.querySelector("#qOneFalse")
qOneT.addEventListener ("click", colorChange);
qOneF.addEventListener ("click", colorChange);
function colorChange() {

qOneT.classList.add("btn-success");
//qOneF.classList.add("btn-danger");

console.log("color")
}

const qTwoT = document.querySelector("#qTwoTrue")
const qTwoF = document.querySelector("#qTwoFalse")
qTwoT.addEventListener("click", colorChangeTwo);
qTwoF.addEventListener("click", colorChangeTwo);
function colorChangeTwo() {
   // qTwoT.classList.add("btn-danger");
    qTwoF.classList.add("btn-success");
}

const qThreeT = document.querySelector("#qThreeTrue")
const qThreeF = document.querySelector("#qThreeFalse")
qThreeT.addEventListener("click", colorChangeThree);
qThreeF.addEventListener("click", colorChangeThree);
function colorChangeThree() {
    qThreeT.classList.add("btn-success");
   // qThreeF.classList.add("btn-danger")
}


const qFourT = document.querySelector("#qFourTrue")
const qFourF = document.querySelector("#qFourFalse")
qFourT.addEventListener("click", colorChangeFour);
qFourF.addEventListener("click", colorChangeFour);
function colorChangeFour() {
    qFourT.classList.add("btn-success");
}

const qFiveT = document.querySelector("#qFiveTrue")
const qFiveF = document.querySelector("#qFiveFalse")
qFiveT.addEventListener("click", colorChangeFive);
qFiveF.addEventListener("click", colorChangeFive);
function colorChangeFive() {
    qFiveF.classList.add("btn-success");
}

const qSixT = document.querySelector("#qSixTrue")
const qSixF = document.querySelector("#qSixFalse")
qSixT.addEventListener("click", colorChangeSix);
qSixF.addEventListener("click", colorChangeSix);
function colorChangeSix() {
    qSixT.classList.add("btn-success");
}

const qSevenT = document.querySelector("#qSevenTrue")
const qSevenF = document.querySelector("#qSevenFalse")
qSevenT.addEventListener("click", colorChangeSeven);
qSevenF.addEventListener("click", colorChangeSeven);
function colorChangeSeven() {
    qSevenT.classList.add("btn-success");
}

const qEightT = document.querySelector("#qEightTrue")
const qEightF = document.querySelector("#qEightFalse")
qEightT.addEventListener("click", colorChangeEight);
qEightF.addEventListener("click", colorChangeEight);
function colorChangeEight() {
    qEightF.classList.add("btn-success");
}

const qNineT = document.querySelector("#qNineTrue")
const qNineF = document.querySelector("#qNineFalse")
qNineT.addEventListener("click", colorChangeNine);
qNineF.addEventListener("click", colorChangeNine);
function colorChangeNine() {
    qNineT.classList.add("btn-success");
}

const qTenT = document.querySelector("#qTenTrue")
const qTenF = document.querySelector("#qTenFalse")
qTenT.addEventListener("click", colorChangeTen);
qTenF.addEventListener("click", colorChangeTen);
function colorChangeTen() {
    qTenF.classList.add("btn-success");
}