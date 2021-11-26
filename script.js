var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");






// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function() {
  modal1.style.display = "block";

}

btn2.onclick = function() {
  modal2.style.display = "block";

}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modal1.style.display = "none";
  modal2.style.display = "none";


}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal1|| event.target == modal2)  {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";

   
  }
}