
var customer = localStorage.getItem("customer");
var cust = JSON.parse(customer);
console.log(cust);


var retrieved_data = localStorage.current_json;
console.log("data" + localStorage.current_json);
var data = JSON.parse(retrieved_data);


var index = parseInt(localStorage.getItem("current_index"));
//var index = JSON.parse(retrieved_index);
console.log(index);
console.log("data" + data.allProducts[index].image_path);
index--;

var x = document.getElementById("image");
var y = document.getElementById("product");
console.log(x);
console.log(y);
document.getElementById("image").src = data.allProducts[index].image_path;
document.getElementById("product").innerHTML = data.allProducts[index].product_description;

function random() {
    document.getElementById("order").innerHTML = "Order # - " + Math.floor(Math.random()*1000);
}
random();

document.getElementById("cust_details").innerHTML
    = "<span class='month'>" + "First-Name:" + "</span> " + cust.fname + "<br>" +
"<span class='month'>" + "Last-Name:" + "</span> " + cust.lname + "<br>" +
"<span class='month'>" + "Email-ID:" + "</span> " + cust.at + "<br>" +
"<span class='month'>" + "Credit-Card-Number:" + "</span> " + cust.cc + "<br>" +
"<span class='month'>" + "Age:" + "</span> " + cust.age + "<br>" +
"<span class='month'>" + "Address-1:" + "</span> " + cust.ad1 + "<br>" +
"<span class='month'>" + "Address-2:" + "</span> " + cust.ad2 + "<br>" +
"<span class='month'>" + "City:" + "</span> "  + cust.city + "<br>" +
"<span class='month'>" + "State:" + "</span> " + cust.state + "<br>" +
"<span class='month'>" + "Zip-Code:" + "</span> " + cust.zip + "<br>" +
"<span class='month'>" + "Country:" + "</span> " + cust.country + "<br>";
