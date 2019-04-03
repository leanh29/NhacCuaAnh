$(document).ready(function(){
//    alert('a')
    $('.hinhnho>ul>li').hover(function () {
            // over
            var imgSrc=$(this).find('img').attr('src')
            var newSrc=imgSrc.replace('_145','_org')
            $('.hinhbu>img').attr('src',newSrc)
        }, function () {
            // out
        }
    );
    $('.list-bxh ul li').click(function(e){
        e.preventDefault();
        $('.list-bxh ul li a').removeClass('active')
        $(this).find('a').addClass('active')
        // console.log($(this).index())
        // index lấy vị trí của li
        var index = $(this).index();
        $('.tab-content .tab').fadeOut();
        // $('tab-content .tab').removeClass('active');
        $('.tab-content .tab').eq(index).fadeIn();
        //eq láy phần tử của mảng tại vị trí index
    });
});