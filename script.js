function addToCart(item) {
    fetch('/add_to_cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'item=' + encodeURIComponent(item)
    })
    .then(response => response.text())
    .then(data => {
        document.open();
        document.write(data);
        document.close();
    });
}

function removeFromCart(item) {
    fetch('/remove_from_cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'item=' + encodeURIComponent(item)
    })
    .then(response => response.text())
    .then(data => {
        document.open();
        document.write(data);
        document.close();
    });
}
