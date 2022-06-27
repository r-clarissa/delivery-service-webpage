// Variables of HTML fields
var checkedSize = document.getElementsByName('size');   // Pizza Size
var checkedCrust = document.getElementsByName('crust'); // Pizza Crust Type
var checkedAdd = document.getElementsByName('extratoppings'); // Pizza Additional Toppings
var checkedMain = document.getElementsByName('maintoppings')[0]; // Pizza Main Toppings
var totalPrice = 0  // Default value of total price
var mainPrice, sizePrice, crustPrice, addPrice, addTopVegPrice=0, addTopMeatPrice=0, addTopCheesePrice=0, totalAddTopCost;


// Gets the selected main toppings value
checkedMain.addEventListener('input',function() {
    mval = this.value;
    switch (mval) {
        case "Pepperoni Overload":
            mval = "100";
            mainPrice = parseFloat(mval);
            break;
        case "Hawaiian":
            mval = "50";
            mainPrice = parseFloat(mval);
            break;
        case "Meat Overload":
            mval = "125"
            mainPrice = parseFloat(mval);
            break;
        default:
            mval = ""
            break;
        }
    console.log("main price:", mainPrice);
    total();
    })

// Calculates the initial price of selected pizza size and crust values
function getRadPrice() {
    // Gets selected pizza size value
    for (i=0; i < checkedSize.length; i++) {
        if (checkedSize[i].checked) {
            var sval = parseFloat(checkedSize[i].value);
            sizePrice = sval;
        }
    }
    console.log("size price:", sizePrice);
    // Gets selected pizza crust type value
    for (j=0; j < checkedCrust.length; j++) {
        if (checkedCrust[j].checked) {
            var cval = parseFloat(checkedCrust[j].value);
            crustPrice = cval;
        }
    }
    console.log("crust price:", crustPrice);
    total();
}

// Gets the selected additional toppings value
function getAddToppingPrice(){
    selectedCboxes = Array.prototype.slice.call(checkedAdd).filter(ch => ch.checked==true).map(ch => ch.value);
    if (selectedCboxes.includes("12")){
        addTopVegPrice = 12;
        console.log("add top veg price:", addTopVegPrice);
    }
    else{
        addTopVegPrice = 0;
    }
    if (selectedCboxes.includes("75")){
        addTopMeatPrice = 75;
        console.log("add top meat price:", addTopMeatPrice);
    }
    else{
        addTopMeatPrice = 0;
    }
    if (selectedCboxes.includes("50")){
        addTopCheesePrice = 50;
        console.log("add top cheese price:", addTopCheesePrice);
    }
    else{
        addTopCheesePrice = 0;
    }
    total();
}

// Calculates the total price of the selected values
function total(){
    totalPrice= mainPrice + sizePrice + crustPrice + addTopVegPrice + addTopMeatPrice + addTopCheesePrice;
    console.log("total price:", totalPrice);
    if (isNaN(totalPrice)== false) {
        document.getElementById('price').innerHTML = 'Price: ' + totalPrice + ' + 12% tax'; 
    }
}

// Displays 24 hr period and validates the input time on cut off delivery time
function validateTime() {
    var x = document.getElementById("myTime");
    var start = document.getElementById("myTime").min;
    var end = document.getElementById("myTime").max;
    var enteredTime = x.value;
    
    if ( enteredTime >= start && enteredTime <= end) {
      document.getElementById("confirmation").innerHTML = 'Expected time of delivery: ' + enteredTime;
    } else {
      alert('Open hours: 10:00 AM to 7:00 PM. Choose time between the schedule.')
    }
  }
