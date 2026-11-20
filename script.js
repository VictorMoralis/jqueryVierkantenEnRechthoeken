$(".vierkant").click(function(){
    $(this).hide();
});

$("#showAll").click(function(){
    $(".vierkant,.cirkel").show();
});

$(".rechthoek").dblclick(function(){
    $(this).removeClass("w3-yellow w3-green").addClass("w3-purple");
});

$(".cirkel").click(function(){
    $(this).hide();
});