$(window).on("load", function () {

    $("#loading").fadeOut(1000)
})
$(document).ready(function () {
    $(window).on('load resize', function () {
        var win = $(this); 
        var count=false;

        if(win.width()<=483){
            $(".fa-bars").click(function(){
                if(count==false){
                    $(".menu ul").css({"top":"28px"})
                    count=true;
                }else{
                    $(".menu ul").css({"top":"-470px"})
                    count=false;
                }
            })
        }else if (win.width() <= 770) { 
            console.log("1")
            $(".menu a.active").parent().css({"background":"#f64102"})
            $(".about-i").click(function(){
                $(".drop-list").toggle("slow");
            });
            $(".dropdown-2 i").click(function(){
                $(".drop-list1").toggle("slow");
            });
            $(".fa-bars").click(function(){
                if(count==false){
                    $(".menu ul").css({"top":"0px"})
                    count=true;
                }else{
                    $(".menu ul").css({"top":"-470px"})
                    count=false;
                }
            })
        }
    })
    
})