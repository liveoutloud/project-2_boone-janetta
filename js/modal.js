//Gets the modal
var modal = document.getElementById("myModal");

//Opens the modal
var btn = document.getElementById("myBtn");

//Gets the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Open
btn.onclick = function() {
    modal.style.display = "block";
}

//Close (x)
span.onclick = function() {
    modal.style.display = "none";
}
