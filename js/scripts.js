$(function() {
  $(".click-to-hide").click(function(){
    $(this).find("p").toggleClass("hidden");
  });
});
