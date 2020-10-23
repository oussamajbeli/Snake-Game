$(document).ready(function(){
  $("ul#liste > li").hover(function(){
    $(this).addClass("li_hover");
  },
  function(){
    $(this).removeClass("li_hover");
  });
});
