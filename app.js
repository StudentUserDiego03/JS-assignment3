const tax=250;

function myFunction(){
    const device1={type:"computer", brand: "apple", price: 1000, 
    productName: function(){return this.brand + " " + this.type;}};
    let finalPrice=device1.price + tax;
    document.getElementById("electronicDevice").innerHTML = 
    "Name of Product: " + device1.productName() + "<br>" + "initial price: $" + device1.price
    + "<br>" + "tax: $" + tax + "<br>" + "final price: $" + finalPrice;
}

function newFunction(){
    const device2 = {type2: "computer", brand2: "microsoft", price2: 1200, 
    productName2: function(){return this.brand2 + " " + this.type2;}};
    document.getElementById("ElectronicDevice2").innerHTML = "Name of Product: " + device2.productName2 ;
}