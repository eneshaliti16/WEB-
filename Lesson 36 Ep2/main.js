$("#btn2").click(function(){
    $(".hidden").hide('slow');
});

$("#btn1").click(function(){
    $(".hidden").show('200');
});

$("#mySquare").click(function(){
    $("#mySquare").animate({
        width : 200,
        height : 200
    });
});

$("#mySquare").dblclick(function(){
    $("#mySquare").animate({
        width : 100,
        height : 100
    });
});


$(".testing").click(function(){
    $(this).animate({
       left : '+=50px',
       opacity : 0.25,
       fontsize : '30px'
    },
    300,
    function(){
       console.log("Animation is complete")
    }
);
});
