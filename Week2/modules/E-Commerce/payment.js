// Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// TODO: Implement these functions

function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  // 2. Apply discount if coupon provided
  // 3. Validate payment method (card/upi/cod)
  // 4. Process payment (simulate)
  // 5. Reduce stock for all items
  // 6. Clear cart
  // 7. Generate order summary

  // Return order summary:
  // {
  //   orderId: ...,
  //   items: [...],
  //   subtotal: ...,
  //   discount: ...,
  //   total: ...,
  //   paymentMethod: ...,
  //   status: 'success/failed',
  //   message: '...'
  // }
    let item = getCartItems();
    let Total = getCartTotal();
    if(item.length === 0){
        return {
            status : 'failed',
            message : 'No items in cart'
        }
    }
    let discount = 0;
    let subtotal = Total;
    let discountmessage = 'No Coupon Provided'
    if(couponCode){
      // originalTotal : cartTotal,
      // discount : discount,
      // finalTotal : final_Amount,
      // message : 'coupon applied succesfully'
        let discountAmount = applyDiscount(couponCode,subtotal,item)
        discount = discountAmount.discount;
        subtotal = discountAmount.finalTotal;
        discountmessage = discountAmount.message;
      }
      
      if(!validatePaymentMethod(paymentMethod)){
          return{
              status : 'failed',
              message : 'Invalid Payment Option'
          }
      }
       // simulate payment status
      let PaymentStatus = true; // let it be success

      if(!PaymentStatus){
          return{
              status : "failed",
              message : 'Payment Failed'
          }
      }

      for (let i = 0; i < item.length; i++) {
          reduceStock(item[i].productId, item[i].quantity);
      }

      clearCart();
  //   orderId: ...,
  //   items: [...],
  //   subtotal: ...,
  //   discount: ...,
  //   total: ...,
  //   paymentMethod: ...,
  //   status: 'success/failed',
  //   message: '...'
  // }

      return{
          orderId : generateOrderId(),
          items : item,
          subtotal : -subtotal,
          discount : discount,
          total : -(subtotal - discount),
          paymentMethod : paymentMethod,
          status : 'success',
          message : 'Payment Successfully'
      }
}



function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
    const validMethods = ['card', 'upi', 'cod'];
    return validMethods.includes(method);
}

function generateOrderId() {
  // Generate random order ID
  return 'ORD' + Date.now();
}
export { processPayment, validatePaymentMethod, generateOrderId };