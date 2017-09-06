require(['jquery'], function($) {

    /*遍历json数据到购物车中*/

    $.get('../../assets/js/cart.json', function(data) {
        var cartul = '',
            cartstr = '',
            total = 0;
        //console.log(data);
        if (data.length == 0) {
            $('.prompt').show();
            $('.settleup').hide();
        } else {
            $('.settleup').show();
            $('.prompt').hide();
        }
        for (var i = 0; i < data.length; i++) {
            total += Number(data[i].productPrice);
            cartstr += '<li class="item" data-id="' + data[i].productId + '">';
            cartstr += '    <div class="p-img">';
            cartstr += '        <a href=""><img src="' + data[i].imgPath + '" alt="" width="50" height="50"></a>';
            cartstr += '    </div>';
            cartstr += '    <div class="p-name f1">';
            cartstr += '        <a href="">' + data[i].productName + '</a>';
            cartstr += '    </div>';
            cartstr += '    <div class="p-detail fr ar">';
            cartstr += '        <span class="p-price"><strong>￥' + data[i].productPrice + '</strong>×1</span><br>';
            cartstr += '        <a class="delete">删除</a>';
            cartstr += '    </div>';
            cartstr += '    <div class="gift"><a href="" target="_blank">[赠品] 手机六个月碎屏保</a></div>';
            cartstr += '</li>';
        }
        cartul += '<li class="dt"><div class="fl"><span class="hl-orange">满赠</span>已购满19元，您可领赠品</div><div class="fr"><em>小计：￥' + total.toFixed(2) + '</em></div></li>' + cartstr;
        $('.settleup .mcart-mz').append(cartul);
        $('.settleup .p-total b,#carttypenum').text(data.length);
        $('.settleup .p-total strong').text(total.toFixed(2));
    });
})