var cgs1 = 0;
var cgs2 = 0;
var ltgcgs1 = 0;
var ltg = 0;
var ltc = 0;
var incomecalculations = 0;
var firstvalue = 0;
var secondvalue = 0;
var result = 0;
var thirdvalue = 0;
var fourthvalue = 0;
var result1 = 0;
// ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


function myFunction(arg) {
    var x = document.getElementById(arg);
    if (x.innerHTML === "Show Details") {
        x.innerHTML = "Hide Details";
    } else {
        x.innerHTML = "Show Details";
    }
}

var income;






// DEDUCTIONS

function finaldeductions() {
    var finals = parseInt(document.getElementById('basicded').value) + parseInt(document.getElementById('Medicalded').value) + parseInt(document.getElementById('intrestded').value) + parseInt(document.getElementById('employeeded').value) + parseInt(document.getElementById('intrestdepded').value) + parseInt(document.getElementById('donationsded').value) + parseInt(document.getElementById('intresthousingded').value);

    if (!isNaN(finals)) {
        document.getElementById('fordeductions').value = finals;

    }
}


// INCOME FROM OTHER SOURCESsss

function otherincomes() {
    var incomesfinal = parseInt(document.getElementById('interestfos').value) + parseInt(document.getElementById('coifos').value) + parseInt(document.getElementById('wlcpeos').value);

    if (!isNaN(incomesfinal)) {
        document.getElementById('totalforios').value = incomesfinal;
        document.getElementById('ltryin').value = parseInt(document.getElementById('wlcpeos').value);

    }
    var ltry = parseInt(document.getElementById("ltryin").value) * 30 / 100;

    if (!isNaN(ltry)) {
        document.getElementById("ltryop").value = Math.round(ltry);
    }
}



// INCOME FROM HOUSE PROPERTY   

function ifloproperty() {
    var floproper = parseInt(document.getElementById("lurent").value) + parseInt(document.getElementById("lmtpdtyear").value) - parseInt(document.getElementById("alvrrreceiv").value);

    if (!isNaN(floproper)) {
        document.getElementById("navalue").value = floproper;
        document.getElementById("opproperty").value = floproper;

    }
}

function ifhprop() {
    var reprop = parseInt(document.getElementById("navalue").value) + parseInt(document.getElementById("iohloan").value);

    if (!isNaN(reprop)) {
        document.getElementById("opproperty").value = reprop;
    }
}



// CAPITAL GAINS 


function cgs416() {
    cgs1 = parseInt(document.getElementById("cgsone").value) + parseInt(document.getElementById("cgstwo").value) + parseInt(document.getElementById("cgsthree").value) + parseInt(document.getElementById("cgsfour").value) + parseInt(document.getElementById("cgsfive").value);

    if (!isNaN(cgs1)) {
        document.getElementById("cgsonetotal").value = cgs1;
        document.getElementById("cgstotal").value = cgs1 + cgs2 + ltgcgs1 + ltg + ltc;
    }


}



function cgs414() {
    cgs2 = parseInt(document.getElementById("cgstwoone").value) + parseInt(document.getElementById("cgstwotwo").value) + parseInt(document.getElementById("cgstwothree").value) + parseInt(document.getElementById("cgstwofour").value) + parseInt(document.getElementById("cgstwofive").value);
    if (!isNaN(cgs2)) {
        document.getElementById("cgstwototal").value = cgs2;
        document.getElementById("stcgin").value = cgs2;

        document.getElementById("cgstotal").value = cgs1 + cgs2 + ltgcgs1 + ltg + ltc;
    }
    var stgcfinal = parseInt(document.getElementById("stcgin").value) * 15 / 100;

    if (!isNaN(stgcfinal)) {
        document.getElementById("stcgop").value = Math.round(stgcfinal);
    }
}


function ltgcgs() {
    ltgcgs1 = parseInt(document.getElementById("ltcgone").value) + parseInt(document.getElementById("ltcgtwo").value) + parseInt(document.getElementById("ltcgthree").value) + parseInt(document.getElementById("ltcgfour").value) + parseInt(document.getElementById("ltcgfive").value);

    if (!isNaN(ltgcgs1)) {
        document.getElementById("ltcgtot").value = ltgcgs1;
        document.getElementById("ltcgctin").value = ltgcgs1;
        document.getElementById("cgstotal").value = cgs1 + cgs2 + ltgcgs1 + ltg + ltc;

    }
    var ltcgsctax = parseInt(document.getElementById("ltcgctin").value) * 20 / 100;

    if (!isNaN(ltcgsctax)) {
        document.getElementById("ltcgctop").value = Math.round(ltcgsctax);
    }

}


function ltgains() {
    ltg = parseInt(document.getElementById("ltgainsone").value) + parseInt(document.getElementById("ltgainstwo").value) + parseInt(document.getElementById("ltgainsthree").value) + parseInt(document.getElementById("ltgainsfour").value) + parseInt(document.getElementById("ltgainsfive").value);

    if (!isNaN(ltg)) {
        document.getElementById("ltgainstotal").value = ltg;
        document.getElementById("ltcgcttin").value = ltg;
        document.getElementById("cgstotal").value = cgs1 + cgs2 + ltgcgs1 + ltg + ltc;

    }
    var ltcgscttax = parseInt(document.getElementById("ltcgcttin").value) * 10 / 100;

    if (!isNaN(ltcgscttax)) {
        document.getElementById("ltcgcttop").value = Math.round(ltcgscttax);
    }
}



function ltcgcus() {
    ltc = parseInt(document.getElementById("ltcgcusone").value) + parseInt(document.getElementById("ltcgcustwo").value) + parseInt(document.getElementById("ltcgcusthree").value) + parseInt(document.getElementById("ltcgcusfour").value) + parseInt(document.getElementById("ltcgcusfive").value);

    if (!isNaN(ltc)) {
        document.getElementById("ltcgcustotal").value = ltc;
        document.getElementById("ltcgcusin").value = ltg;
        document.getElementById("cgstotal").value = cgs1 + cgs2 + ltgcgs1 + ltg + ltc;

    }
    var ltcguslast = parseInt(document.getElementById("ltcgcusin").value) * 10 / 100;

    if (!isNaN(ltcguslast)) {
        document.getElementById("ltcgcusop").value = Math.round(ltcguslast);
    }

}





// FOR NET TAXABLE INCOME 


function calcTaxes() {
    var income = 0;
    incomecalculations = parseInt(document.getElementById("totalval").value) + parseInt(document.getElementById("opproperty").value) + parseInt(document.getElementById("cgstotal").value) + parseInt(document.getElementById("totalforios").value) + parseInt(document.getElementById("pgbpcos").value) - parseInt(document.getElementById("fordeductions").value);

    if (!isNaN(incomecalculations)) {
        document.getElementById("ntifinal").value = incomecalculations;
        document.getElementById("iltnrtotal").value = incomecalculations - parseInt(document.getElementById("cgstwototal").value) - parseInt(document.getElementById("ltcgtot").value) - parseInt(document.getElementById("ltgainstotal").value) - parseInt(document.getElementById("ltcgcustotal").value) - parseInt(document.getElementById("wlcpeos").value);
        income = document.getElementById("iltnrtotal").value;
        document.getElementById("iltnrtax").value = Math.round(calcTaxesFinal(income));
        document.getElementById("itaxop").value = parseInt(document.getElementById("iltnrtax").value);
        // GENERATING CESS

        document.getElementById("itaxop").value >= 1 && document.getElementById("itaxop").value <= 999999999999;

        document.getElementById('ecess').value = Math.round(document.getElementById("itaxop").value * 4 / 100);

        // GENERATING SURCHARGE
        if (document.getElementById("totalval").value >= 5000001 && document.getElementById("totalval").value <= 10000000) {
            document.getElementById('scharge').value = Math.round(document.getElementById("itaxop").value * 10 / 100);
        }
        else if (document.getElementById("totalval").value >= 10000001 && document.getElementById("totalval").value <= 20000000) {
            document.getElementById('scharge').value = Math.round(document.getElementById("itaxop").value * 15 / 100);
        }
        else if (document.getElementById("totalval").value >= 20000001 && document.getElementById("totalval").value <= 50000000) {
            document.getElementById('scharge').value = Math.round(document.getElementById("itaxop").value * 25 / 100);
        }
        else if (document.getElementById("totalval").value >= 50000001) {
            document.getElementById('scharge').value = Math.round(document.getElementById("itaxop").value * 37 / 100);
        }


        // HEALTH & EDUCATIONAL CESS

        firstvalue = document.getElementById("itaxop").value;
        secondvalue = document.getElementById("ecess").value;
        result = parseInt(firstvalue) + parseInt(secondvalue);

        if (!isNaN(result)) {
            document.getElementById('sum').value = Math.round(result);
        }

        // SURCHARGE
        thirdvalue = document.getElementById("itaxop").value;
        fourthvalue = document.getElementById("scharge").value;
        result1 = parseInt(secondvalue) + parseInt(thirdvalue) + parseInt(fourthvalue);
        if (!isNaN(result1)) {
            document.getElementById('sum').value = Math.round(result1);
        }
    }
    else if (income == "") {
        alert("Please Enter Your Salary")
    }
    else if (income <= 250000) {
        alert("You're not eligible for paying tax")
    }
    else if (income >= 249999 && income < 500000) {
        alert("Tax Rebate has been applied unded 87/A")
    }


}











// FOR TOOLTIP

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


// FOR TAX CALCULATION

function calculate_tax() {
    var income = document.getElementById("iltnrtotal").value;
    var total;
    document.getElementById("iltnrtax").value = calcTaxesFinal(income);
}
function calcTaxesFinal(income) {
    console.log("income received", income);
    var total = 0;
    if (income >= 1 && income < 249999) {
        alert("You're not eligible for paying tax")
    }
    else if (income >= 249999 && income < 500000) {
        alert("Tax Rebate has been applied unded 87/A")
    }
    else if (income >= 500001 && income < 999999) {
        if (document.getElementById("Gender").value == "male") {     //for male     
            var tax = (income - 500001) * 20 / 100 + 12500;
        }
        else if (document.getElementById("Gender").value == "scitizen") { //for senior citizen

            var tax = (income - 500001) * 20 / 100 + 12500;
        }
        else if (document.getElementById("Gender").value == "sscitizen") { //for super senior citizen

            var tax = (income - 500001) * 20 / 100 + 12500;
        }
        else {
            var tax = (income - 500001) * 7 / 100 + 12500; //for female
        }

    }
    else if (income >= 1000000 && income < 99999999999999) {
        if (document.getElementById("Gender").value == "male") {//for male          
            var tax = (income - 1000001) * 30 / 100 + 12500 + 100000;
        }
        else if (document.getElementById("Gender").value == "scitizen") {//for seniorcitizen

            var tax = (income - 1000001) * 30 / 100 + 12500 + 100000;
        }
        else if (document.getElementById("Gender").value == "sscitizen") {//for super senior citizen

            var tax = (income - 1000001) * 30 / 100 + 12500 + 100000;
        }
        else {
            var tax = (income - 1000001) * 17 / 100 + 12500 + 100000; //for female
        }

    }



    return tax;

}
