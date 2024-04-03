const headerMenu = document.getElementById("header");
            const navbarMenu = document.getElementById("menu");
            const burgerMenu = document.getElementById("burger");
            const bgOverlay = document.querySelector(".overlay");
            
            // Toggle to show and hide navbar menu
            if (burgerMenu && bgOverlay) {
               burgerMenu.addEventListener("click", () => {
                  navbarMenu.classList.add("is-active");
                  bgOverlay.classList.add("is-active");
               });
            
               bgOverlay.addEventListener("click", () => {
                  navbarMenu.classList.remove("is-active");
                  bgOverlay.classList.remove("is-active");
               });
            }
            
            // Closed navbar menu on links click
            document.querySelectorAll(".menu-link").forEach((link) => {
               link.addEventListener("click", () => {
                  navbarMenu.classList.remove("is-active");
                  bgOverlay.classList.remove("is-active");
               });
            });
            
            // Toggle to show and hide cart section
            const cart = document.getElementById("cart");
            const cartBtn = document.getElementById("cart-btn");
            
            if (cart && bgOverlay) {
               cartBtn.addEventListener("click", () => {
                  cart.classList.add("is-active");
                  bgOverlay.classList.add("is-active");
               });
            
               bgOverlay.addEventListener("click", () => {
                  cart.classList.remove("is-active");
                  bgOverlay.classList.remove("is-active");
               });
            };