function aplicarDescuento() {
    var originalPrice = document.getElementById('originalPrice').value;
    var discountPrice = originalPrice * 0.80; // Aplica el 20% de descuento
    document.getElementById('finalPrice').innerText = 'Precio Final: $' + discountPrice.toFixed(2);
}
