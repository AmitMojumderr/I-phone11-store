function updateProductNumber(product,isIncreasing,price){
    const productInput=document.getElementById(product +'-number');
    let productNumber=productInput.value;
    if(isIncreasing==true){
        productNumber=parseInt(productNumber)+1;
    }
    else if(productNumber>0){
       productNumber=parseInt(productNumber)-1;
    }
    productInput.value=productNumber;
    const productTotal=document.getElementById(product +'-total');
    productTotal.innerText=productNumber*price;
    calculateTotal();
}
function getInputValue(product){
     const productInput=document.getElementById(product + '-number');
     const productNumber=parseInt(productInput.value);
     return productNumber;
}
function calculateTotal(){
    
    const phoneTotal=getInputValue('phone')*1229;
    const caseTotal=getInputValue('case')*59;
    const subTotal=phoneTotal+caseTotal;
    const tax=subTotal/10;
    const totalAmount=subTotal+tax;
//update sub-total
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=totalAmount;
}
// phone increase-decrease
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',true,1229);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',false,1229);
})

// case increase-decrease
document.getElementById('case-plus').addEventListener('click',function(){
        updateProductNumber('case', true,59);
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',false,59);
    // caseInput.value=parseInt(caseNumber)-1; 
})