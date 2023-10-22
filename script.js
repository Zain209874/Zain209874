document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const sidebar = document.getElementById("sidebar");

    sidebar.style.right = "-250px";

    menuIcon.addEventListener("click", function () {
        sidebar.style.right = "0";
    });

    closeIcon.addEventListener("click", function () {
        sidebar.style.right = "-250px";
    });

    // Add event listeners to the navigation links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior
            const href = link.getAttribute("href");
            if (href) {
                window.location.href = href; // Redirect to the clicked link
            }
        });
    });
});