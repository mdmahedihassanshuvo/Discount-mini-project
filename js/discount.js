document.getElementById('discount-btn').addEventListener('click', function(){
    const priceInputField = document.getElementById('price-input');
    const priceInputFieldString = priceInputField.value;
    const price = parseFloat(priceInputFieldString);
    
    const discount = price * 0.3;
    const newPrice = price - discount;

    const couponField = document.getElementById('coupon-input');
    const coupon = couponField.value;
    
    const payPriceField = document.getElementById('pay-input');
    const payPrice = payPriceField.value;
    payPriceField.value = newPrice;
    priceInputField.value = '';
    couponField.value = '';
    
    if(coupon === 'DISC30'){
        payPriceField.value = newPrice
    }
    else{
        alert('Please inter correct coupon code');
        payPriceField.value = '';
    }
})