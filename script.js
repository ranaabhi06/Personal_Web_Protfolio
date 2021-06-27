$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // toggle menubar, navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing animation script 
    var typed = new Typed(".typing",{
        strings:["Software Developer","Programmer","Solver","Traveler","Learner","Teacher"],
        typedSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2",{
        strings:["Software Developer","Programmer","Solver","Traveler","Learner","Teacher"],
        typedSpeed:100,
        backSpeed:60,
        loop:true
    });


});