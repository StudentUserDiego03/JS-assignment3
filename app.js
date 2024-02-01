const tax=250;

function myFunction(){
    const device1={type:"computer", brand: "apple", price: 1000, 
    productName: function(){return this.brand + " " + this.type;}};
    finalPrice=device1.price + 250;
    document.getElementById("electronicDevice").innerHTML = 
    "Name of Product: " + device1.productName() + "<br>" + "initial price: $" + device1.price
    + "<br>" + "tax: $" + tax + "<br>" + "final price: $" + finalPrice;

}