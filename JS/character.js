var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgModal");
var titleText = document.getElementById("title");
var modalCapt;

function onClick(element) {
    var clickedName = element.alt;
    modalCapt = document.getElementById(clickedName);

    titleText.innerHTML = clickedName;
    modal.style.display = "flex";
    modalImg.src = element.src;
    modalCapt.style.display = "block";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
        modalCapt.style.display = "none";
    }
}

var close = document.getElementById("close");

close.onclick = function() {
    modal.style.display = "none";
    modalCapt.style.display = "none";
}