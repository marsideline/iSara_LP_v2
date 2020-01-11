$(function() {
    /**
     * スクロールしたときにページ先頭へ移動するボタンを出現させる
     **/
    $(window).scroll(function() {
        var pos = $(window).scrollTop();
        if (pos > 50) {
            $(".pagetop").fadeIn(500);
        } else {
            $(".pagetop").fadeOut(500);
        }
    });

    /**
     * ページ先頭へ移動するボタンがクリックされたときの処理
     **/
    $(".pagetop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    /**
     * スマホ版 受講の流れフロー矢印アイコン制御
     **/
    $(".panel-title a").click(function() {
        var $accordion = $(this);
        var $downArrow = $(this).find(".fa-chevron-down");
        var $upArrow = $(this).find(".fa-chevron-up");

        if ($accordion.attr("aria-expanded") === "true") {
            $downArrow.show();
            $upArrow.hide();
        } else if ($accordion.attr("aria-expanded") === "false") {
            $downArrow.hide();
            $upArrow.show();
        }
    });

    /**
     * よくある質問リスト矢印アイコン制御
     **/
    $(".questionstoggle a").click(function() {
        var $accordion = $(this);
        var $downArrow = $(this).find(".fa-chevron-down");
        var $upArrow = $(this).find(".fa-chevron-up");

        if ($accordion.attr("aria-expanded") === "true") {
            $downArrow.show();
            $upArrow.hide();
        } else if ($accordion.attr("aria-expanded") === "false") {
            $downArrow.hide();
            $upArrow.show();
        }
    });
});
