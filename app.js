const tax=250;

function myFunction(){
    const device1={type:"computer", brand: "apple", price: 1000, 
    productName: function(){return this.brand + " " + this.type;}};
    let finalPrice=device1.price + tax;
    document.getElementById("electronicDevice").innerHTML = 
    "Name of Product: " + device1.productName() + "<br>" + "initial price: $" + device1.price
    + "<br>" + "tax: $" + tax + "<br>" + "final price: $" + finalPrice;
};

function otherFunction(){
    const decvice2 = {type2: "laptop", brand2: "Microsoft", price2: 900, 
    productName2: function(){return this.brand2 + " " + this.type2;}};
    let finalPrice = decvice2.price2 + tax;
    document.getElementById("electronicDevice2").innerHTML= "Name of Product: " + decvice2.productName2() + "<br>"
    + "initial price: $" + decvice2.price2 + "<br>" + "tax: $" + tax + "<br>" + "final price: $" + finalPrice;
}
