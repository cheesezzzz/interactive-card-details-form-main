// GRABBING ALL DOM ELEMENTS
const inputName = document.getElementById('cardholder-name');
const infoName = document.getElementById('name');
const errorName = document.getElementById('cardholder-name-error')

const inputCardNumber = document.getElementById('card-number')
const infoCardNumber =  document.getElementById('number')
const errorCardNumber = document.getElementById('card-number-error')


const inputMonth = document.getElementById('month-input')
const infoMonth = document.getElementById('month')

const inputYear = document.getElementById('year-input')
const infoYear = document.getElementById('year')
const errorEXPDate = document.getElementById('exp-error')

const inputCVC = document.getElementById('cvc')
const infoCVC = document.getElementById('cvc-number')
const errorCVC = document.getElementById('cvc-error')

const confirmBtn = document.getElementById('confirm-btn')
const continueBtn = document.getElementById('continue-btn')
const completed = document.getElementById('completed')
const form = document.getElementById('form')

const allInfo = [infoCardNumber, infoName, infoCVC, infoMonth, infoYear]


// UPDATING TEXT INFORMATION FROM INPUT
function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, ' $& ');
}

function setCardNumber() {
    infoCardNumber.innerText = format(inputCardNumber.value);
};  

function setCardName(e) {
    infoName.innerText = inputName.value.toUpperCase();
}

function setCardMonth () {
    infoMonth.innerText = inputMonth.value;
}

function setCardYear () {
    infoYear.innerText = inputYear.value;
}

function setCardCVC () {
    infoCVC.innerText = inputCVC.value;
}

// ADDING KEY UP EVENTS
inputCardNumber.addEventListener("keyup", setCardNumber);
inputName.addEventListener("keyup", setCardName);
inputMonth.addEventListener("keyup", setCardMonth);
inputYear.addEventListener("keyup", setCardYear);
inputCVC.addEventListener("keyup", setCardCVC);

// REMOVING DEFAULT RED BORDERS OF INPUT
inputCardNumber.classList.remove('border-red-600')
inputName.classList.remove('border-red-600')
inputMonth.classList.remove('border-red-600')
inputYear.classList.remove('border-red-600')
inputCVC.classList.remove('border-red-600')


// CONFIRM BUTTON EVENT LISTENER FOR ERRORS 
confirmBtn.addEventListener('click', function(e) {
    e.preventDefault()
    if (!inputName.value || inputName.value.match('$')) {
        errorName.classList.remove('hidden')
        inputName.classList.add('border-red-600')
    } else {
        errorCardNumber.classList.add('hidden')
        errorCardNumber.classList.add('border-gray-200')
    } 

    if (!inputCardNumber.value) {
        errorCardNumber.classList.remove('hidden')
        inputCardNumber.classList.add('border-red-600')
    } else {
        errorCardNumber.classList.add('hidden')
    }

    if (!inputMonth.value) {
        errorEXPDate.classList.remove('hidden')
        inputMonth.classList.add('border-red-600')
    } else {
        errorEXPDate.classList.add('hidden')
    }

    if (!inputYear.value) {
        errorEXPDate.classList.remove('hidden')
        inputYear.classList.add('border-red-600')
    } else {
        errorEXPDate.classList.add('hidden')
    }

    if (!inputCVC.value) {
        errorCVC.classList.remove('hidden')
        inputCVC.classList.add('border-red-600')
    } else {
        errorCardNumber.classList.add('hidden')
    }

    if(inputName.value && inputCardNumber.value && inputMonth.value && inputYear.value && inputCVC.value) {
        completed.classList.remove('hidden')
        form.classList.add('hidden')
    } else {
        completed.classList.add('hidden')
        form.classList.remove('hidden')
    }
}, 2000)


continueBtn.addEventListener('click', function() {
    completed.classList.add('hidden')
    form.classList.remove('hidden')
    form.reset()

    infoCardNumber.innerText = '0000 0000 0000 0000'
    infoName.innerText = 'e.g JANE APPLESEED'
    infoCVC.innerText = '000'
    infoMonth.innerText = '00'
    infoYear.innerText = '00'

    // allInfo.forEach(function(e) {
    //     e.innerText = 'N/A'
    // })
})

