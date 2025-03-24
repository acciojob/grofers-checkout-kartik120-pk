document.getElementById("calculateTotal").addEventListener("click", function() {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0; // Convert text to number
    });

    let totalDisplay = document.getElementById("ans");
    totalDisplay.textContent = `Total Price: Rs ${total}`;
});
