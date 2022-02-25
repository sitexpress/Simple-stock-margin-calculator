window.addEventListener('DOMContentLoaded', ()=> {
    const inputText = document.querySelector('.input_text')
    const percentPlus = document.querySelectorAll('.percent_plus')
    const percentMinus = document.querySelectorAll('.percent_minus')

    const inputTextAm = document.querySelector('.input_text_am')
    const percentPlusAm = document.querySelectorAll('.percent_plus_am')
    const percentMinusAm = document.querySelectorAll('.percent_minus_am')

    // Stock
    inputText.addEventListener('input', () => {
        let countPlus = 0
        let countMinus = 0
        let text

        for (let i = 0; i <= percentPlus.length - 1; i++) {
            countPlus = countPlus + 5 
            text = inputText.value * ((countPlus / 100) + 1)
            percentPlus[i].textContent = text.toFixed(2)

        }
        for (let i = 0; i <= percentMinus.length - 1; i++) {
            countMinus = countMinus + (-5)
            console.log(countMinus)
            text = inputText.value * ((countMinus / 100) + 1)
            percentMinus[i].textContent = text.toFixed(2)

        }

    })

    // Ammount
    inputTextAm.addEventListener('input', () => {
        let countPlus = 0
        let countMinus = 0
        let text

        for (let i = 0; i <= percentPlusAm.length - 1; i++) {
            countPlus = countPlus + 5 
            text = inputTextAm.value * ((countPlus / 100) + 1)
            percentPlusAm[i].textContent = text.toFixed(2)

        }
        for (let i = 0; i <= percentMinusAm.length - 1; i++) {
            countMinus = countMinus + (-5)
            console.log(countMinus)
            text = inputTextAm.value * ((countMinus / 100) + 1)
            percentMinusAm[i].textContent = text.toFixed(2)

        }
    })
})

