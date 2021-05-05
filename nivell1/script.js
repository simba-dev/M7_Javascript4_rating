document.getElementById('divRating').onclick = changeColor;   
// document.body.onclick = setDefault;

function changeColor() {
    
    return false;
}   


var body = document.body;
var divRating1 = document.getElementById('divRating1');
var divRating2 = document.getElementById('divRating2');
var divRating3 = document.getElementById('divRating3');
var divRating4 = document.getElementById('divRating4');
var divRating5 = document.getElementById('divRating5');

body.addEventListener("click", function () {
    divRating1.style.color = "black";
    divRating2.style.color = "black";
    divRating3.style.color = "black";
    divRating4.style.color = "black";
    divRating5.style.color = "black";
}, false);
divRating1.addEventListener("click", function (ev) {
    divRating1.style.color="lightblue";
    divRating2.style.color = "black";
    divRating3.style.color = "black";
    divRating4.style.color = "black";
    divRating5.style.color = "black";
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);
divRating2.addEventListener("click", function (ev) {
    divRating1.style.color="lightblue";
    divRating2.style.color="lightblue";
    divRating3.style.color = "black";
    divRating4.style.color = "black";
    divRating5.style.color = "black";
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);
divRating3.addEventListener("click", function (ev) {
    divRating1.style.color="lightblue";
    divRating2.style.color="lightblue";
    divRating3.style.color="lightblue";
    divRating4.style.color = "black";
    divRating5.style.color = "black";
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);
divRating4.addEventListener("click", function (ev) {
    divRating1.style.color="lightblue";
    divRating2.style.color="lightblue";
    divRating3.style.color="lightblue";
    divRating4.style.color="lightblue";
    divRating5.style.color = "black";
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);
divRating5.addEventListener("click", function (ev) {
    divRating1.style.color="lightblue";
    divRating2.style.color="lightblue";
    divRating3.style.color="lightblue";
    divRating4.style.color="lightblue";
    divRating5.style.color="lightblue"
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);