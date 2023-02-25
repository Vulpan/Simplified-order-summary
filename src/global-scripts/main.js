/// Main JavaScript File
/// Here we import all the global JavaScript files we need for our project.

let paymentButtonContainer = document.getElementsByClassName("order-summary-container__payment-button-container")[0];
let paymentButton = document.getElementsByClassName("order-summary-container__payment-button")[0];
let loader = document.getElementsByClassName("order-summary-container__loader")[0];

loader.style.display = "none";

paymentButtonContainer.addEventListener("click", function () {
    if (loader.style.display !== "none") {
        paymentButton.textContent = "Proceed to Payment";
        loader.style.display = "none";
    } else {
        paymentButton.textContent = "w trakcie ładowania";
        loader.style.display = "block";
    }
});

