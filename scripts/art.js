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

var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

prev.onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    modalImg.src = images[currentIndex].src;
}

next.onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = images[currentIndex].src;
}