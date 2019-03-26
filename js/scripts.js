$(function() {
  $(".click-to-hide").click(function(){
    $(this).find("p").toggleClass("hidden");
  });
});

$(function() {
  $(".click-to-hide").click(function(){
    $.not(this).find("p").toggleClass("hidden");
  });
});
