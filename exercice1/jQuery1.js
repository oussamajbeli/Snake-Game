$(document).ready(function(){

  $("#btn").on("click",function(){
    alert("vous aver cliqué!");
  });
  $("#btn").mouseleave(function(){
    alert("vous avez relachée le clique !");
  });
});
