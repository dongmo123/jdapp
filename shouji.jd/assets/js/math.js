require(['jquery'], function($) {

    /*头部切换地点坐标*/

    $('.header-top .dropdown-item li').click(function() {
        $('.header-top .dropdown .ui').text($(this).children('a').text());
        $(this).children('a').addClass('selected').end().siblings().children('a').removeClass('selected');
    });

    /*点击关闭热点图header*/

    $('.hotlogo .iconfont').click(function() {
            $('.hotlogo').hide();
            return false;
        })
        /*左侧导航栏*/

    $('.p-category .title .item').hover(function() {
        $(this).addClass('hover').siblings().removeClass('hover');
        $('.p-category .content').show();
        $('.p-category .content .c-layer').removeClass('show').eq($(this).index()).addClass('show');
    });
    $('.p-category').mouseleave(function() {
        $('.p-category .content').hide();
        $('.p-category .title .item').removeClass('hover');
    })

    /*今日热门选项卡*/
    $('.today .tab-list li').mouseover(function() {
        $(this).addClass('selected').siblings().removeClass('selected')
        $('.today .tab-cont ul').eq($(this).index()).addClass('selected').siblings().removeClass('selected')
    });

})