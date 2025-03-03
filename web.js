// variable define
let card = document.querySelector(".trend");// jab hum ispar click kare to yah hame show ho
let card2 = document.getElementById("trendSec");// jab hum ispar click kare to yah hame show ho
let about = document.querySelector(".about");// jab hum click kare to yaha  show ho
let contact = document.querySelector(".contact");// jab hum click kare to yaha  show ho
 
console.log(card);
let blog = document.querySelector(".trends"); // na dikhe

let mainPage = document.querySelector(".main");// na dikhe





// home
function homes(){
    mainPage.style.display="flex";//none
    card.style.display="block";//none
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="none";

    // click karnemai button ka color kaise change ho
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="rgb(2, 173, 173)";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
}




// shop
function shops(){
mainPage.style.display="none";//none
blog.style.display="none";
about.style.display="none";
card.style.display="block";//none
card2.style.display="block";

// click karnemai button ka color kaise change ho
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="rgb(2, 173, 173)";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";

}



//blog
function blogs(){
    mainPage.style.display="none";//none
    card.style.display="none";//none
    card2.style.display="none";
    blog.style.display="block";
    about.style.display="none";
 

    // color kaise de button

    document.getElementById("blog").style.color="rgb(2, 173, 173)";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";

}


// about

function abouts() {
    mainPage.style.display="none";//none
    card.style.display="none";//none
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="block";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="rgb(2, 173, 173)";
}

// contact

function Contacts (){

    mainPage.style.display="none";//none
    card.style.display="none";//none
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="block";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="rgb(2, 173, 173)";
}


// cart jab hmm img par click kare to show ho

function show(img){
    let newImg = document.getElementById("newImg"); // newImg ko target kar rahehai
    console.log(img);
    newImg.src=img.src;// new img may kay source kare iska img ka assign source karo 

    
    mainPage.style.display="none";//none
    card.style.display="none";//none
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";

    document.querySelector(".cart").style.display="flex";
}


// Add to cart
function addCart(){
    alert("Added To Cart");
    location.reload();
}