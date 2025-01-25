let amountInput = document.getElementById("mortgageAmount");
let termInput = document.getElementById("mortgageTerm");
let rateInput = document.getElementById("mortgageRate");
let repaymentCheckbox = document.getElementById("checkbox-1");
let interestOnlyCheckbox = document.getElementById("checkbox-2");
let contentRight = document.querySelector(".contentRight");
let contentRightTwo = document.querySelector(".contentRight-2");
let totalOne = document.getElementById("total-1");
let totalTwo = document.getElementById("total-2");

function calc() {
    let amount = parseFloat(amountInput.value);
    let term = parseFloat(termInput.value);
    let rate = parseFloat(rateInput.value);
    if (isNaN(amount) || isNaN(term) || isNaN(rate)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Write Somthing!",
        });

    } else {
        let months = term * 12;
        let monthlyRate = (rate / 100) / 12;
        let power = Math.pow(1 + monthlyRate, months);
        let numerator = monthlyRate * power;
        let denominator = power - 1;
        contentRight.style.display = "none";
        contentRightTwo.style.display = "block";
        if (repaymentCheckbox.checked) {
            let monthlyPayment = amount * (numerator / denominator);
            totalOne.innerHTML = (monthlyPayment.toFixed(2)).toLocaleString('en-US');
            totalTwo.innerHTML = (monthlyPayment.toFixed(2) * term * 12).toLocaleString('en-US');
        } else if (interestOnlyCheckbox.checked) {
            let monthlyPayment = amount * monthlyRate;
            totalOne.innerHTML = (monthlyPayment.toFixed(2)).toLocaleString('en-US');
            totalTwo.innerHTML = (monthlyPayment.toFixed(2) * term * 12).toLocaleString('en-US');
        } else {
                     Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please select a mortgage type.!",
        });

        }
    }
}
// clear all tn
function clearAll() {
    amountInput.value = " ";
    termInput.value = " ";
    rateInput.value = " ";
    if (repaymentCheckbox.checked || interestOnlyCheckbox.checked) {
        repaymentCheckbox.checked = false;
        interestOnlyCheckbox.checked = false;
    }
    totalOne.innerHTML = "0,00.00";
    totalTwo.innerHTML = "000,000.0";
}
