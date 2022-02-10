const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const CheckButton = document.querySelector("#check-btn");
const output = document.querySelector("#out-put");
var sum = 0;

function CheckLuck() {
    var bdate = birthDateis(birthDate.value);
    var add = sumofDate(bdate);
    if (birthDate.value && luckyNumber.value) {
        if (add % (luckyNumber.value) === 0) {
            // console.log("hello"); always try to check in console whether the function is working correctly or not while programming.
            output.innerHTML = "Yay...your birthday is a lucky number!!😀";
        } else {
            output.innerHTML = "Sad...not a lucky number 🙁 ! But it's okay keep believing on you. ✌️";
        }
    } else {
        output.innerHTML = "Please enter both the fields 😈";
    }
}

function birthDateis(olddate) {
    var newdate = olddate.replaceAll('-', '');
    // console.log(typeof newdate);
    return newdate;
}

function sumofDate(bdate) {
    var sum = 0; //here we need to initialize it to 0 when it starts again . otherwise it will take sum value of previous date & give wrong error.
    for (var i = 0; i < bdate.length; i++) {
        sum = sum + Number(bdate[i]);
        // console.log(sum,luckyNumber.value);

    }
    return sum;
}
CheckButton.addEventListener('click', CheckLuck);