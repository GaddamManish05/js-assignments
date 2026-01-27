// cart.js - Shopping cart operations
import { getProductById, checkStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
  // 1. Get product details
  // 2. Check stock availability
  // 3. Check if product already in cart
  //    - If yes, update quantity
  //    - If no, add new item
  // 4. Return success/error message

  //  Get product details
  let product = getProductById(productId);
  if (!product) {
    return "Product not found";
  }

  //  Check stock availability
  if (!checkStock(product, quantity)) {
    return "Insufficient stock";
  }

  //  Check if product already in cart
  let cartItem = cartItems.find(item => item.productId === productId);

  if (cartItem) { // If yes, update quantity
    cartItem.quantity += quantity;
  } else { // If no, add new item
    cartItems.push({
      productId,
      quantity
    });
  }

  return "Product added to cart successfully";
}

export function removeFromCart(productId) { // Remove product from cart
    let ProfToRemove = cartItems.find(product => product.id === productId)
    if (index === -1) {
        return "Product not found in cart";
    }

    cartItems.splice(index, 1);
    return "Product removed from cart";
}


export function updateQuantity(productId, newQuantity) { // Update quantity of product in cart
  // Check stock before updating
    let cartItem = cartItems.find(product => product.id === productId)
    if (!cartItem) {
        return "Product not found in cart";
    }

    let product = getProductById(productId);

    if (!checkStock(product, newQuantity)) {
        return "Insufficient stock";
    }

    cartItem.quantity = newQuantity;
    return "Quantity updated successfully";
}

 export function getCartItems() {// Return all cart items with product details
    return cartItems.map(item => {
    let product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      totalPrice: product.price * item.quantity
    };
  });
}


export function getCartTotal() { // Calculate total price of all items in cart
  // Return total
    return cartItems.reduce((total, item) => {
        let product = getProductById(item.productId);
        return total + product.price * item.quantity;
    }, 0);
}

export function clearCart() {
  // Empty the cart
    cartItems.length = 0
    return "Cart Item Cleared"

}