let cart = [];

// Function to add items to cart
function addToCart(item) {
  cart.push(item);
  updateCart();
}

// Function to update cart display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });
}

// Function to toggle between light and dark themes
document.getElementById("toggle-theme").addEventListener("click", () => {
  const body = document.body;

  // Toggle the 'dark-theme' class on the body element
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme"); // Switch to light theme
  } else {
    body.classList.add("dark-theme"); // Switch to dark theme
  }
});

// Add event listener for checkout button
document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Order placed for: ${cart.join(", ")}`);
    cart = []; // Clear the cart after checkout
    updateCart();
  }
});