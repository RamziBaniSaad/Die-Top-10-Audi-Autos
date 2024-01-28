// JavaScipt zum Projekt: Die Top 10 Audi-Modelle

// document.ready funktion, um JavaScript erst nach Auslesung meines HTMLs anzuwenden. 
$(document).ready(function() {

// Navbar Toggler Icon Wechsel
i = 1;

$("#navbarToggler").click( function() {
  if (i == 1) {
    $("#navbarTogglerIcon").html("close");
    i++;
  }
  else if (i == 2) {
    $("#navbarTogglerIcon").html("menu");
    i--;
  }
  
})



});


