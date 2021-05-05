
function addRates(value) {
    for (var i = 1; i <= 5; i++) {
        document.getElementById("divRating" + i).classList.remove("active");
    }
    for (var i = 1; i <= value; i++) {
        document.getElementById("divRating" + i).classList.add("active");
    }
}

document.body.addEventListener("click", (event) => {
    for (var i = 1; i <= 5; i++) {
        document.getElementById("divRating" + i).classList.remove("active");
    }
}, false);
document.getElementById("divRating").addEventListener("click", function (ev) {
    ev.stopPropagation();
}, false);