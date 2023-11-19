const form = document.querySelector('.form');
const input = document.querySelector('.card input');
const qrContainer = document.querySelector('.qr-container');
const qrImage = document.querySelector('.qr-image')

function generateQR() {
    if (input.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        qrContainer.classList.add("show-img")
    }
    else {
        input.classList.add('error');
        setTimeout(() => {
            input.classList.add('error');
        }, 1000)
    }

}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    generateQR();
})