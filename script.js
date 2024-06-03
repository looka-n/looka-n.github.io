var modal = document.getElementById("art-container");

var modalImg = document.getElementById("art-id");

var images = document.getElementsByClassName("art-item");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}