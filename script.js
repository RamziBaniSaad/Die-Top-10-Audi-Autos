// JavaScipt zum Projekt: Die Top 10 Audi-Modelle

// document.ready funktion, um JavaScript erst nach Auslesung meines HTMLs anzuwenden. 
$(document).ready(function() {


// Tolltips inialisieren
document.querySelectorAll('[data-bs-toggle="tooltip"]')
.forEach(tooltip => {
  new bootstrap.Tooltip(tooltip);
});

// Popovers inialisieren
document.querySelectorAll('[data-bs-toggle="popover"]')
.forEach(popover => {
  new bootstrap.Popover(popover);
});


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
  };
});

// Intro Button
$("#introButton").click(function() {
  window.scrollBy(0, document.getElementById("intro").offsetHeight);
});

// Zurück Button
$("#zurueckButton").click(function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$(window).scroll(function() {
  if ($(document).scrollTop() >= document.getElementById("intro").offsetHeight) {
    $("#zurueckButton").css("display", "inline-block");
  }
else  {
    $("#zurueckButton").css("display", "none");
  };
});

});


