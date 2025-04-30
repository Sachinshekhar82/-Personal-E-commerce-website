let cart = [];

        function addToCart(productName, price) {
            cart.push({ productName, price });
            alert(`${productName} has been added to your cart!`);
        }

        function viewCart() {
            const cartModal = document.getElementById("cartModal");
            const cartOverlay = document.getElementById("cartOverlay");
            const cartDetails = document.getElementById("cartDetails");

            if (cart.length === 0) {
                cartDetails.innerHTML = "<p>Your cart is empty.</p>";
            } else {
                let total = 0;
                cartDetails.innerHTML = '<ul>' + cart.map(item => {
                    total += parseFloat(item.price);
                    return `<li>${item.productName}: $${item.price}</li>`;
                }).join('') + '</ul>';
                cartDetails.innerHTML += `<strong>Total: $${total.toFixed(2)}</strong>`;
            }

            cartOverlay.style.display = "block";
            cartModal.style.display = "block";
        }

        function closeCart() {
            document.getElementById("cartModal").style.display = "none";
            document.getElementById("cartOverlay").style.display = "none";
        }