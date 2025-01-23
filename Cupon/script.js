function aplicarDescuentoCallback(originalPrice, callback) {
    setTimeout(() => {
        try {
            const discountPrice = originalPrice * 0.80;
            callback(null, discountPrice);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}


function aplicarDescuentoPromesa(originalPrice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const discountPrice = originalPrice * 0.80;
                resolve(discountPrice);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
}


function aplicarDescuento() {
    const originalPrice = document.getElementById('originalPrice').value;


    aplicarDescuentoCallback(originalPrice, (error, discountPrice) => {
        if (error) {
            console.error('Error al aplicar el descuento:', error);
        } else {
            document.getElementById('finalPrice').innerText = 'Precio Final (Callback): $' + discountPrice.toFixed(2);
        }
    });

    aplicarDescuentoPromesa(originalPrice)
        .then(discountPrice => {
            document.getElementById('finalPrice').innerText = 'Precio Final (Promise): $' + discountPrice.toFixed(2);
        })
        .catch(error => {
            console.error('Error al aplicar el descuento:', error);
        });
}
