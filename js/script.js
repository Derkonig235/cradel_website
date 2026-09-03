/* =========================================
   CRADEL - JAVASCRIPT PRINCIPAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- MENU MOBILE ---------- */

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });

    }


    /* ---------- FERMER LE MENU APRÈS UN CLIC ---------- */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (navbar) {
                navbar.classList.remove("active");
            }

        });

    });


    /* ---------- ANNÉE AUTOMATIQUE ---------- */

    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});