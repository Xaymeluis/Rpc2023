  // When the user clicks on <div>, open the popup
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }
  
  // Get the modal
  var modal = document.getElementById("ModalPlan1");
  // Get the button that opens the modal
  var btn = document.getElementById("btnplan1");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


  // Get the modal
  var modal2 = document.getElementById("ModalPlan2");
  // Get the button that opens the modal
  var btn2 = document.getElementById("btnplan2");
  // Get the <span> element that closes the modal
  var span2 = document.getElementsByClassName("close2")[0];

 
  // Get the modal
  var modal3 = document.getElementById("ModalPlan3");
  // Get the button that opens the modal
  var btn3 = document.getElementById("btnplan3");
  // Get the <span> element that closes the modal
  var span3 = document.getElementsByClassName("close3")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {    
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // When the user clicks the button, open the modal 
  btn2.onclick = function () {    
    modal2.style.display = "block";
    
  }
  // When the user clicks on <span> (x), close the modal
  span2.onclick = function () {
    modal2.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal3) {
      modal2.style.display = "none";
    }
  }

  // When the user clicks the button, open the modal 
  btn3.onclick = function () {
    modal3.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span3.onclick = function () {
    modal3.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }

