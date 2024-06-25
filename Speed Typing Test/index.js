let speedTypingTest = document.getElementById('speedTypingTest');
let timerEl = document.getElementById('timer');
let quoteDisplay = document.getElementById('quoteDisplay');
let result = document.getElementById('result');
let quoteInput = document.getElementById('quoteInput');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');
let spinner = document.getElementById('spinner')

let counter = 0
spinner.classList.toggle('d-none')



function startCount() {
    counter += 1;
    timerEl.textContent = counter;
}
let counterValue = setInterval(startCount, 1000)

function getQuote() {
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsondata) {
            spinner.classList.add('d-none')

            let quote = jsondata.content;
            quoteDisplay.textContent = quote;
        })
}

submitBtn.onclick = function() {
    if (quoteDisplay.textContent === quoteInput.value) {
        result.textContent = "You typed in " + counter + " seconds";
        clearInterval(counterValue)
    } else {
        result.textContent = "You typed incorrect sentence"
    }
}
resetBtn.onclick = function() {
    spinner.classList.remove('d-none')
    counter = 0
    startCount()
    getQuote()
    result.textContent = ""
    quoteInput.value = ""
}







getQuote()
startCount()