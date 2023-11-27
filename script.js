window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('show');
});
document.addEventListener("DOMContentLoaded", function () {
    // Buat elemen button
    var button = document.createElement("a");
    button.id = "floating-btn";
    button.href = "https://wa.me/+6283199554399";
    button.target = "_blank"; 

    var icon = document.createElement("img");
    icon.src = "img/icon.png";
    icon.alt = "WhatsApp";
    icon.style.width = "30px"; // Sesuaikan ukuran ikon sesuai keinginan
    icon.style.height = "30px";
    button.appendChild(icon);

    // var buttonText = document.createTextNode(" Click");
    // button.appendChild(buttonText);

    document.body.appendChild(button);

    button.addEventListener("click", function (event) {
       alert("HALLO!!! Chat Ke WA!")
        event.preventDefault();

        window.open(button.href, button.target);
    });
});
