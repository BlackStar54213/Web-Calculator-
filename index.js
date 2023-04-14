

function findAns() {
    var x = document.getElementById("pay").value;
    var fire=document.getElementById("pricetag").value;
    var  percentpay = ((x/100) * fire)/customernumber;
    var totalpay = (fire/customernumber)+(percentpay);
    const result = percentpay.toFixed(2);
    var flint = document.getElementById("customer").value;
    document.getElementById("totally").innerHTML = ("$ "+result);
    document.getElementById("total").innerHTML = ("$ "+totalpay);    
}
function findAns1() {
    var x = document.getElementById("pay").value;
    var flame = document.getElementById("pricetag").value;
    var customernumber = document.getElementById("customer").value;
    var percentpay = ((x/100) * flame)/customernumber;
    var totalpay = (flame/customernumber)+(percentpay);
    const result = percentpay.toFixed(2);
    var resultPay = totalpay.toFixed(2);
    if (customernumber <= 0) {
        document.getElementById("error").style.visibility ="visible";
        document.getElementById("customer").style.border ="2px solid red"

    } else {
        document.getElementById("totally").innerHTML = ("$ " +result);
        document.getElementById("total").innerHTML = ("$ "+resultPay);
    }
    
}

function findAns2() {
    var y = document.getElementById("pays").value;
    var flame = document.getElementById("pricetag").value;
    var customernumber = document.getElementById("customer").value;
    var percentpay = ((y/100) * flame)/customernumber;
    var totalpay = (flame/customernumber)+(percentpay);
    const result = percentpay.toFixed(2);
    var resultPay = totalpay.toFixed(2);
    if (customernumber <= 0) {
        document.getElementById("error").style.visibility ="visible";
        document.getElementById("customer").style.border ="2px solid red"
        
    } else {
        document.getElementById("totally").innerHTML = ("$ " +result);
        document.getElementById("total").innerHTML = ("$ "+resultPay);
    }
}

function findAns3() {
    var z = document.getElementById("payss").value;
    var flame = document.getElementById("pricetag").value;
    var customernumber = document.getElementById("customer").value;
    var percentpay = ((z/100) * flame)/customernumber;
    var totalpay = (flame/customernumber)+(percentpay);
    const result = percentpay.toFixed(2);
    var resultPay = totalpay.toFixed(2);
    if (customernumber <= 0) {
        document.getElementById("error").style.visibility ="visible";
        document.getElementById("customer").style.border ="2px solid red"
        
    } else {
        document.getElementById("totally").innerHTML = ("$ " +result);
        document.getElementById("total").innerHTML = ("$ " +resultPay)
    }
}

function findAns4() {
    var s = document.getElementById("paysss").value;
    var flame = document.getElementById("pricetag").value;
    var customernumber = document.getElementById("customer").value;
    var percentpay = ((s/100) * flame)/customernumber;
    var totalpay = (flame/customernumber)+(percentpay);
    const result = percentpay.toFixed(2);
    var resultPay = totalpay.toFixed(2);
    if (customernumber <= 0) {
        document.getElementById("error").style.visibility ="visible";
        document.getElementById("customer").style.border ="2px solid red"
        
    } else {
        document.getElementById("totally").innerHTML = ("$ " +result);
        document.getElementById("total").innerHTML = ("$ "+resultPay);
    }
}

function findAns5() {
    var s = document.getElementById("payssss").value;
    var flame = document.getElementById("pricetag").value;
    var customernumber = document.getElementById("customer").value;
    var percentpay = ((s/100) * flame)/customernumber;
    var totalpay = (flame/customernumber)+(percentpay);
    const result = percentpay.toFixed(2);
    var resultPay = totalpay.toFixed(2);
    if (customernumber <= 0) {
        document.getElementById("error").style.visibility ="visible";
        document.getElementById("customer").style.border ="2px solid red"
        
    } else {
        document.getElementById("totally").innerHTML = ("$ " +result);
        document.getElementById("total").innerHTML = ("$ "+resultPay);
    }
}

function customInput() {
    var s = document.getElementById("custominput").value;
    var flame = document.getElementById("pricetag").value;
    var customernumber = document.getElementById("customer").value;
    var percentpay = ((s/100) * flame)/customernumber;
    var totalpay = (flame/customernumber)+(percentpay);
    const result = percentpay.toFixed(2);
    var resultPay = totalpay.toFixed(2);
    if (customernumber <= 0) {
        document.getElementById("error").style.visibility ="visible";
        document.getElementById("customer").style.border ="2px solid red"
        
    } else {
        document.getElementById("totally").innerHTML = ("$ " +result);
        document.getElementById("total").innerHTML = ("$ "+resultPay);
}
}