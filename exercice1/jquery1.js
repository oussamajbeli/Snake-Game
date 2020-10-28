$(document).ready(function(){

    $("table tr>td").on("mouseover",function(){$(".Pg").addClass("style_Pg")});
    $("table tr>td").on("mouseout",function(){$(".Pg").removeClass("style_Pg")});

    $("table tr>td").on("mouseover",function(){$(".Ct").addClass("style_Ct")});
    $("table tr>td").on("mouseout",function(){$(".Ct").removeClass("style_Ct")});

});
