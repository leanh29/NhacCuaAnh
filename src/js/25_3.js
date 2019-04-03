$(document).ready(function(){
    $(".main1>ul>li>a").click(function(e){
        e.preventDefault();
        $(this).siblings(".dropdown").slideToggle();
        if ($(this).find('.rotate').hasClass('rotate1')){
            $(this).find('.rotate').removeClass('rotate1');
        }else
            $(this).find(".rotate").addClass('rotate1');
    });
});
