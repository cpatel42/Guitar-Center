
function save1() {
    document.getElementById("fname").value = "";

    document.getElementById("lname").value = "";

    document.getElementById("email").value = "";

    document.getElementById("cc").value = "";

    document.getElementById("age").value = "";

    document.getElementById("ad1").value = "";

    document.getElementById("ad2").value = "";

    document.getElementById("city").value = "";

    document.getElementById("state").value = "";

    document.getElementById("zip").value = "";

    document.getElementById("country").value = "selected";

    document.getElementById("details").innerHTML =
        "First-Name: " + fname + "<br>" +
        "Last-Name:" + lname + "<br>" +
        "Email-ID:" + at + "<br>" +
        "Credit-Card-Number:" + cc + "<br>" +
        "Age:" + age + "<br>" +
        "Address-1: " + ad1 + "<br>" +
        "Address-2: " + ad2 + "<br>" +
        "City: " + city + "<br>" +
        "State: " + state + "<br>" +
        "Zip-Code: " + zip + "<br>" +
        "Country: " + country + "<br>";

    //document.getElementById("cust_details").style.display = "block";
    document.getElementById("buy1").style.display = "block";
    document.getElementById("details").style.display = "block";
    document.getElementById("edit").style.display = "block";

}

function edit_button() {
    document.getElementById("fname").value = fname;
    document.getElementById("lname").value = lname;
    document.getElementById("email").value = at;
    document.getElementById("cc").value = cc;
    document.getElementById("age").value = age;
    document.getElementById("ad1").value = ad1;
    document.getElementById("ad2").value = ad2;
    document.getElementById("city").value = city;
    document.getElementById("state").value = state;
    document.getElementById("zip").value = zip;
    document.getElementById("country").value = country;

    //document.getElementById("cust_details").style.display = "none";
    document.getElementById("edit").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("buy1").style.display = "none";

}

submitOK = true;

function save() {

    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    at = document.getElementById("email").value;
    cc = document.getElementById("cc").value;
    age = document.getElementById("age").value;
    ad1 = document.getElementById("ad1").value;
    ad2 = document.getElementById("ad2").value;
    city = document.getElementById("city").value;
    state = document.getElementById("state").value;
    zip = document.getElementById("zip").value;
    country = document.getElementById("country").value;

    if (fname.length == "") {
        alert("The first name cnnot be blank.");
        submitOK = false;
    }

    if (lname.length == "") {
        alert("The last name cannot be blank.");
        submitOK = false;
    }

    if (isNaN(cc) || cc.length < 15 || cc.length > 16) {
        alert("The Credit Card number must be between 15 and 16 characters.");
        submitOK = false;
    }

    if (isNaN(age) || age < 1 || age > 100) {
        alert("The age must be a number between 1 and 100.");
        submitOK = false;
    }

    if (ad1.length == "") {
        alert("The address 1 cannot be blank.");
        submitOK = false;
    }

    if (ad2.length == "") {
        alert("The address 2 cannot be blank.");
        submitOK = false;
    }

    if (city.length == "") {
        alert("The city cannot be blank.");
        submitOK = false;
    }

    if (state.length == "") {
        alert("The state cannot be blank.");
        submitOK = false;
    }

    if (isNaN(zip) || zip.length != 5) {
        alert("The zip code must be 5 digits only.");
        submitOK = false;
    }

    if (country == "selected") {
        alert("Please select a valid Country.");
        submitOK = false;
    }

    else if (submitOK == true) {
        save1();
    }
}
      


var retrieved_data = localStorage.current_json;
console.log("data" + localStorage.current_json);
var data = JSON.parse(retrieved_data);


var index = parseInt(localStorage.getItem("current_index"));
//var index = JSON.parse(retrieved_index);
console.log(index);
//console.log("data" + data.allProducts[index].image_path);
index--;

var x = document.getElementById("image");
var y = document.getElementById("product");
console.log(x);
console.log(y);
document.getElementById("image").src = data.allProducts[index].image_path;
document.getElementById("product").innerHTML = data.allProducts[index].product_description;




function Buy() {
    
    var customer_details = {
        fname: fname,
        lname: lname,
        at: at,
        cc: cc,
        age: age,
        ad1: ad1,
        ad2: ad2,
        city: city,
        state: state,
        zip: zip,
        country: country,
    }

    localStorage.setItem("customer", JSON.stringify(customer_details));

    location.href = "Guitar_confirmation.html";
}

