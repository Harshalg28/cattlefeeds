// javascript for cart.html
// Function to retrieve and display cart data
function displayCartProducts() {
   const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve the cart from localStorage
   const cartDisplay = document.getElementById('cart-display');
   cartDisplay.innerHTML = ''; // Clear previous cart items
   if (cart.length === 0) {
       cartDisplay.innerHTML = '<p>Your cart is empty.</p>';
       return;
   }
   cart.forEach(product => {
       const cartItem = document.createElement('div');
       cartItem.classList.add('cart-item');
       cartItem.innerHTML = `
           <p>${product.name} - ${product.kilogram}kg - Quantity: ${product.quantity}</p>
       `;
       cartDisplay.appendChild(cartItem);
   });
}
// Call the displayCartProducts function when the page loads
displayCartProducts();
// Function to send cart items via WhatsApp
function sendWhatsApp() {
   const cart = JSON.parse(localStorage.getItem('cart')) || [];
   if (cart.length === 0) {
       alert('Your cart is empty.');
       return;
   }
   let message = 'New Vir-mahavir Brothers\n\n';
   cart.forEach(product => {
       message += `${product.name} - ${product.kilogram}kg - Quantity: ${product.quantity}\n`;
   });

   const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
   window.open(whatsappURL, '_blank');
}