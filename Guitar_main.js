
//var imgarray = ["main.jpg", "product1.jpg", "product2.jpg", "product3.jpg"];

var acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    };
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        console.log(myObj);

        localStorage.current_json=JSON.stringify(myObj);
        console.log("ls" + localStorage.current_json);
    }
};

xmlhttp.open("GET", "guitardata.json", true);
xmlhttp.send();

a = 0;  

function next() {

    x = document.getElementById("image");
    y = document.getElementById("product");
    z = document.getElementById("shipping");
    w = document.getElementById("reviews");
    
    if (a < myObj.allProducts.length) {
        x.src = myObj.allProducts[a].image_path;
        y.innerHTML = myObj.allProducts[a].product_description;
        z.innerHTML = myObj.allProducts[a].shipping_details;
        w.innerHTML = myObj.allProducts[a].customer_reviews;
        a++;
        console.log(myObj);
    }
    else {
        alert("This is the last image");
    }
    localStorage.setItem("current_index", a);

}

function previous() {

    if (a >= 1) {
        x.src = myObj.allProducts[a-1].image_path;
        y.innerHTML = myObj.allProducts[a-1].product_description;
        z.innerHTML = myObj.allProducts[a-1].shipping_details;
        w.innerHTML = myObj.allProducts[a-1].customer_reviews;
        a--;
        console.log(myObj);

    }
    else {
        alert("This is the last image");
    }
    localStorage.setItem("current_index", a);

}





