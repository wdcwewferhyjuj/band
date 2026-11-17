function calculate() {
    var price = parseFloat(document.getElementById("item").value);
    var qty   = parseInt(document.getElementById("qty").value);

    if (isNaN(qty) || qty < 1) {
        document.getElementById("result").innerHTML = "Введите количество!";
        return;
    }

    var total = price * qty;
    document.getElementById("result").innerHTML =
        "Сумма: " + total + " ₽";
}
