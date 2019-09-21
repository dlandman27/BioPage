    var modal = document.getElementByClassName("circle");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementByClassName("img01");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
     modal.style.display = "block";
     modalImg.src = this.src;
    };
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    };
    
    function a(p1,p2)
    {
        return p1*p2;
    }
    