console.log("added");
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length == 4)
        return pin;
    else
        return getPin();

}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin').addEventListener("click", function () {
    const pin = getPin();
    // console.log(pin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {

    const typedNumberField = document.getElementById("typed-number");
    const previousTypedNumber = typedNumberField.value;
    const number = event.target.innerText;
    if (isNaN(number)) {
        console.log(number);
        if (number == 'C')
            typedNumberField.value = '';
        else if (number == '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }

    }
    else {


        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }

})