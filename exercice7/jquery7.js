$(document).ready(function(){
  $("ul#liste >li").hover(function(){
    $(this).addClass("li_hover");

    $("#l1").on("mouseover",function(){$("div#zone1").css("visibility","visible");});
        $("#l1").on("mouseout",function(){$("div#zone1").css("visibility","hidden");});
        $("#l2").on("mouseover",function(){$("div#zone2").css("visibility","visible");});
            $("#l2").on("mouseout",function(){$("div#zone2").css("visibility","hidden");});
            $("#l3").on("mouseover",function(){$("div#zone3").css("visibility","visible");});
                $("#l3").on("mouseout",function(){$("div#zone3").css("visibility","hidden");});
  },
  function(){
  $(this).removeClass("li_hover");
  });

});
