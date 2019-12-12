$(document).ready(function(){
	var waypoint = new Waypoint({
     element: document.getElementById('discription'),
     handler: function(direction) {
       if(direction == "down"){
          $("nav").attr("id", "sticky-nav");
       } else {
          $("nav").removeAttr("id");
    }
  },
  offset: 70 
});


$(".mobile-nav-icon").click(function(){	
   var icon = $(".mobile-nav-icon i");

   if(icon.hasClass ("fa-bars")){
       icon.removeClass("fa-bars");
       icon.addClass("fa-times");
       $("nav").animate({height:"300px"}, 500);
   } else {
       icon.removeClass("fa-times");
       icon.addClass("fa-bars");
       $("nav").animate({height:"70px"}, 500);
   }
    $("#main-nav").slideToggle(500);
    
  });
 $('.carousel').on('slide.bs.carousel', function(e) {
  $(this).find('.carousel-inner').animate({
    height: $(e.relatedTarget).height()
  }, 300);
});

 var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// $(document).ready(function(){
//   $("#toi").click(function(){
//     $("#you").load("http://dbkcues.ru/articles/research/, #content");
//   });
// });
 
})














