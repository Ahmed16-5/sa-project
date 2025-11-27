document.querySelectorAll("tbody tr").forEach(row => {
  
  const price = parseFloat(row.querySelector(".price").innerText.replace("$", ""));
  const qtyElement = row.querySelector(".qty");
  const itemTotalElement = row.querySelector(".item-total");
  const plus = row.querySelector(".plus");
  const minus = row.querySelector(".minus");
  const remove = row.querySelector(".remove");

  function updateTotals() {
    const qty = parseInt(qtyElement.innerText);
    const newTotal = price * qty;
    itemTotalElement.innerText = "$" + newTotal;
    updateCartTotals();
  }

  plus.addEventListener("click", () => {
    qtyElement.innerText = parseInt(qtyElement.innerText) + 1;
    updateTotals();
  });

  minus.addEventListener("click", () => {
    let qty = parseInt(qtyElement.innerText);
    if (qty > 1) {
      qtyElement.innerText = qty - 1;
      updateTotals();
    }
  });

  remove.addEventListener("click", () => {
    row.remove();
    updateCartTotals();
  });
});

function updateCartTotals() {
  let subtotal = 0;

  document.querySelectorAll(".item-total").forEach(total => {
    subtotal += parseFloat(total.innerText.replace("$", ""));
  });

  document.getElementById("subtotal").innerText = "$" + subtotal;
  document.getElementById("final-total").innerText = "$" + subtotal;
}
