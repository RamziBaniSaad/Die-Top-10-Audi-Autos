// JavaScipt zum Projekt: Die Top 10 Audi-Modelle

// document.ready funktion, um JavaScript erst nach Auslesung meines HTMLs anzuwenden. 
$(document).ready(function() {

// Navbar Toggler Icon Wechsel
let i = 1;

$("#navbarToggler").click( function() {
  if (i == 1) {
    $("#navbarToggler").attr("disabled", "");
    setTimeout(() => {
      $("#navbarTogglerIcon").html("close");
      i++;
      $("#navbarToggler").removeAttr("disabled", "");
    }, 400);
  }
  else if (i == 2) {
    $("#navbarToggler").attr("disabled", "");
    setTimeout(() => {
    $("#navbarTogglerIcon").html("menu");
      i--; 
      $("#navbarToggler").removeAttr("disabled", "");
    }, 400);
  }
})



});


