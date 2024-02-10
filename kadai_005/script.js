$(function(){
    //アニメーションボタン
    $('.button-more').on('mouseover',function(){
        $(this).animate({
            //右に移動し余白を20pxにする
            marginLeft:20,
            //半透明にする
            opacity:0.5,
            //アニメーション再生スピード0.1秒(100m秒)
        },100);
    })

    //元に戻す
    $('.button-more').on('mouseout',function(){
        $(thes).animate({
            //ボタンの位置を戻す
            marginLeft:0,
            //半透明を戻す
            opacity:1,
            //アニメーション再生スピード0.1秒(100m秒)
        },100);
    })

    //カルーセルの設定
    $('.carousel').slick({
        //画像を自動的に切り替える
        autoplay: true,
        //カルーセルの下に現在地を示すUI（ドット）を表示する
        dots: true,
        //画像をループさせる
        infinite: true,
        //5秒ごとに画像を切り替える
        autoplaySpeed: 5000,
        //カルーセルの左右の矢印を非表示にする
        arrows: false,
    });
});


