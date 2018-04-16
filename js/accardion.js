// accardion starts
$(".head").click(function(ev){
    $(this).parent().find(".body").slideToggle();
    $(this).find("i").toggleClass("fa-angle-up");
    $(this).find("i").toggleClass("fa-angle-down");
    
       $(".head").not($(this)).parent().find(".body").slideUp();
       $(".head").not($(this)).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
})
// accardion ends