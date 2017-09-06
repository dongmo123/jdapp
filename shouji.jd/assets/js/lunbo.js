require(['jquery'], function($) {
    /*轮播图*/
    /*carousel 轮播图>>>>>>>*/
    $('#prev').hide();
    $('#next').hide();
    $('#carimgs li').css('opacity', 0);
    $('#carimgs li').eq(0).css('opacity', 1);
    carousel();

    function carousel() {
        var i = 0;
        var run = null;
        autoplay();
        var index = $('#carimgs li').length;

        function autoplay() {
            run = setInterval(function() {
                i++;
                move();
            }, 4000);
        }

        function move() {
            if (i == index) {
                i = 0;

            }
            $('#carimgs li').eq(i).stop().animate({
                opacity: 1
            }, 500).siblings().animate({
                opacity: 0
            }, 200);
            $('#diet li').removeClass('selected').eq(i).addClass('selected');
        }

        //鼠标移入div之后，停止计时器
        $('.p-slider').hover(function() {
            clearInterval(run);
            $('#prev').show();
            $('#next').show();
        }, function() {
            autoplay();
            $('#prev').hide();
            $('#next').hide();
        });
        $('#prev').click(function() {
            if (i == 0) {
                i = index;
            }
            i--;
            move();
        });
        $('#next').click(function() {
            i++;
            move();
        });
        $('#diet li').mouseover(function() {
            i = $(this).index();
            move();
        });
        $('#diet li').click(function() {
            i = $(this).index();
            move();
        });
    }
    /* /<<<<<carousel 轮播图*/
})