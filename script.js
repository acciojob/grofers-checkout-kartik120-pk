const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".price"); // Select all price elements
    let total = 0;

    // Loop through each price element and add the values to the total
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    // Check if the total row already exists to prevent duplication
    let existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove(); // Remove existing total row before adding a new one
    }

    // Create a new row for total price
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    newRow.id = "totalRow"; // Assign an ID to avoid duplicates

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // Make the total price span both columns
    totalCell.style.fontWeight = "bold"; // Make the text bold
    totalCell.style.textAlign = "center";
    totalCell.textContent = `Total Price: Rs ${total}`;

    newRow.appendChild(totalCell);
    table.appendChild(newRow); // Append the total row to the table
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
