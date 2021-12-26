$('.nav-toggle').click(function(expand) {
  
    expand.preventDefault();
    $("html").toggleClass("openNav");
    $(".nav-toggle").toggleClass("active");
  
  });