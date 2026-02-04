const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

function validateCoupon(couponCode, cartTotal, cartItems) {
  // 1. Check if coupon exists
  // 2. Check minimum amount requirement
  // 3. Check category requirement (if any)
  // Return { valid: true/false, message: '...' }
    if(!coupons[couponCode]){
        return {
            valid : false,
            message : 'Invalid Coupon Code'
        }
    }
    if(cartTotal < coupons[couponCode].minAmount){
        return {
            valid : false,
            message : 'Minimum amount requirement not met'
        }
    }
    if(coupons[couponCode].category && !cartItems.some(item => item.category === coupons[couponCode].category)){
        return {
            valid : false,
            message : 'Category requirement not met'
        }
    }
    return {
        valid : true,
        message : 'Coupon is valid'
    }
}

function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  // Return discount amount
    let coupon = coupons[couponCode]
    if(!couponCode) return 0

    if(coupon.type === 'percentage'){
        return (cartTotal * coupon.value) * 100;
    }

    if(coupon.type === 'flat'){
        return coupon.value
    }

    return 0;
}

function applyDiscount(couponCode,cartTotal, cartItems) {
  // 1. Validate coupon
  // 2. If valid, calculate discount
  // 3. Return final amount and discount details
  // Return { 
  //   originalTotal: ..., 
  //   discount: ..., 
  //   finalTotal: ...,
  //   message: '...'
  // }
    let discount = 0;
    if(!validateCoupon(cartTotal,couponCode,cartItems)){
        return  {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    }
    }
    discount = calculateDiscount(couponCode,cartTotal);
    let final_Amount = cartTotal - discount;
    return {
      originalTotal : cartTotal,
      discount : discount,
      finalTotal : final_Amount,
      message : 'coupon applied succesfully'
    }
}

export { validateCoupon, calculateDiscount, applyDiscount }