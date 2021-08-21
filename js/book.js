// count memory 
const countMemorey = document.getElementById('const-memory');


// paid memory 
document.getElementById('paid-memory').addEventListener('click', function () {
    countMemorey.innerText = '180'
    updateText();
})

// free memory 
document.getElementById('free-memory').addEventListener('click', function () {
    countMemorey.innerText = '0'
    updateText();
})

// count ssd 1tb
const countSsd = document.getElementById('count-ssd')

// free SSD 
document.getElementById('free-ssd').addEventListener('click', function () {
    countSsd.innerText = '0';
    updateText();
})

// paid SSD 
document.getElementById('paid-ssd').addEventListener('click', function () {
    countSsd.innerText = '100';
    updateText();
})

// paid 1tb 
document.getElementById('paid-1tb').addEventListener('click', function () {
    countSsd.innerText = '180'
    updateText();
})


// count Delivary 
const countDelivary = document.getElementById('count-delivary');

document.getElementById('free-delivary').addEventListener('click', function () {
    countDelivary.innerText = '0';
    updateText();
});

document.getElementById('paid-delivary').addEventListener('click', function () {
    countDelivary.innerText = '20'
    updateText();
})
// product Price
const productPrice = document.getElementById('product-price');
// total price 
const totalPrice = document.getElementById('total-price');

// total Product coust 
function updateText() {
    const macPrice = parseFloat(productPrice.innerText)
    const memory = parseFloat(countMemorey.innerText);
    const ssd = parseFloat(countSsd.innerText);
    const delivary = parseFloat(countDelivary.innerText);

    const grandTotal = macPrice + memory + ssd + delivary;
    totalPrice.innerText = grandTotal;
    soldOutPrice()

}



const soldoutPrice = document.getElementById('soldout-price');

// soldOut Coust function 
function soldOutPrice() {
    const macPrice = parseFloat(productPrice.innerText)
    const memory = parseFloat(countMemorey.innerText);
    const ssd = parseFloat(countSsd.innerText);
    const delivary = parseFloat(countDelivary.innerText);

    const grandTotal = macPrice + memory + ssd + delivary;
    soldoutPrice.innerText = grandTotal;

    return soldoutPrice.innerText;
}

// discount Input 
// problem
const discountInput = document.getElementById('discount-input');
const totalDiscount = document.getElementById('soldout-price');



document.getElementById('apply-btn').addEventListener('click', function () {

    if (discountInput.value.toLowerCase() == 'stevekaku') {
        let discount = totalDiscount.innerText * (20 / 100);
        let discountTotal = document.getElementById('total-discount');
        discountTotal.innerText = discount;
    }


})
// problem