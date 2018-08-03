//Gets the modal
var modal = document.getElementById("myModal");

//Opens the modal
var btn = document.getElementById("myBtn");

//Gets the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Opens modal onclick
btn.onclick = function() {
    modal.style.display = "block";
}

//Closes the modal onclick the (x)
span.onclick = function() {
    modal.style.display = "none";
}

//Close modal when anywhere outside is clicked
window.onlick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
