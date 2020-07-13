$(document).ready(function(){
    //opera mini
    if (navigator.userAgent.indexOf('Opera Mini') != -1) {
        $(".callback-btn").hide();
    }
    var b4_headers = $('.block-4 .item');
    $(window).scroll(function() {
        for(var i = 0; i < b4_headers.length; i++) {
            if (b4_headers[i].getBoundingClientRect().top < 300) {
               $(b4_headers[i]).addClass('dynamic')
            } else {
                $(b4_headers[i]).removeClass('dynamic')
            }
        }
    });

    var elems = $('.block-1 .main ul li span');
    $(window).scroll(function() {
        for(var i = 0; i < elems.length; i++) {
            if (elems[i].getBoundingClientRect().top < 300) {
               $(elems[i]).addClass('dynamic')
            } else {
                $(elems[i]).removeClass('dynamic')
            }
        }
    });

    elems2 = $('.block-3 .for-dynamic');
    $(window).scroll(function() {
        for(var i = 0; i < elems2.length; i++) {
            if (elems2[i].getBoundingClientRect().top < 300) {
               $(elems2[i]).addClass('dynamic')
            } else {
                $(elems2[i]).removeClass('dynamic')
            }
        }
    });
    // таймер
    var timer = $(".timer");
    var numbers = timer.children(".number");
    var semicolons = timer.children(".semicolon");
    setInterval(function(){
        semicolons.toggleClass("hidden");
    }, 1000);

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var time = 1000 * (5 * 60 * 60 - 735);

    updateTimer(time);

    setInterval(function(){
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        // var time = 1000 * (24 * 60 * 60 - hours * 60 * 60 - minutes * 60 - seconds);
        updateTimer(time -= 1000);
    }, 1000);


    function updateTimer(time) {
        var days = (time / (24 * 60 * 60 * 1000)).toString().split(".")[0];
        var hours = ((time - days * 24 * 60 * 60 * 1000)/ (60 * 60 * 1000)).toString().split(".")[0];
        var minutes = ((time - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 ) / 60000).toString().split(".")[0];
        var seconds = ((time - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000).toString().split(".")[0];
        var numbersNew = [
            Math.floor(days / 10),
            days % 10,
            Math.floor(hours / 10),
            hours % 10,
            Math.floor(minutes / 10),
            minutes % 10,
            Math.floor(seconds / 10),
            seconds % 10
        ];
        for(var i = 2; i < 8; i++) {
            for (var j = 0; j < timer.length; j++){
                $(numbers[i - 2 + j * 6]).text(numbersNew[i]);
            }
        }

    }

    // обработка кликов для активации фиксированного окна с формой
    $(".callback-btn").click(function() {
        $(".callback-form").toggleClass("hide");
    });

    $(".show-callback").click(function() {
        $(".callback-form").removeClass("hide");
    });

    $(document).click(function(e){
        if( $(e.target).closest($(".callback-form, .callback-btn, .show-callback")).length > 0 ) {
            return;
        }
        $(".callback-form").addClass("hide");
    });

    $('img[src="i_files/i-cross.svg"]').click(function(){
        $(".callback-form").addClass("hide");
    });

    //переход к форме заказа снизу
    $(".btn").click(function() {
        $('body, html').animate({
            scrollTop: $("#form-section").offset().top - 300
        }, 2000);
    });
    //
    //


    //слайдер
    var slides = $(".block-6 .slider li");
    var active = $(".block-6 .slider li").first();
    var checkers = $(".block-6 .checkers div");
    var activeChecker = checkers.first();
    activeChecker.css("backgroundColor", "#90e800");
    // я вообще хуй знает, как работает этот сраный jq
    checkers.each(function(index, elem) {
        $(elem).on("click", function() {
            active.fadeOut();
            active = $(slides[index]);
            setTimeout(function(){
                active.fadeIn();
            }, 400)
            activeChecker.css("backgroundColor", "#acacac");
            activeChecker = $(elem);
            activeChecker.css("backgroundColor", "#90e800");
        });
    });
    // var hammertime = new Hammer(document.querySelector('.block-6'));
    // hammertime.on('swipeleft', function(ev) {
    //     active.fadeOut();
    //     $(active).removeClass('active');
    //     setTimeout(function(){
    //         var next = active.next(".block-6 .slider li");
    //         if(next.length) {
    //             active = next;
    //             active.fadeIn();
    //             activeChecker.css("backgroundColor", "#acacac");
    //             activeChecker = activeChecker.next();
    //             activeChecker.css("backgroundColor", "#90e800");
    //         } else {
    //             active = $(".block-6 .slider li").first();
    //             active.fadeIn();
    //             activeChecker.css("backgroundColor", "#acacac");
    //             activeChecker = checkers.first();
    //             activeChecker.css("backgroundColor", "#90e800");
    //         }
    //     }, 400);
    // });
    // hammertime.on('swiperight', function(ev) {
    //     active.fadeOut();
    //     $(active).removeClass('active');
    //     setTimeout(function(){
    //         var prev = active.prev(".block-6 .slider li");
    //         if(prev.length) {
    //             active = prev;
    //             active.fadeIn();
    //             activeChecker.css("backgroundColor", "#acacac");
    //             activeChecker = activeChecker.prev();
    //             activeChecker.css("backgroundColor", "#90e800");
    //         } else {
    //             active = $(".block-6 .slider li").last();
    //             active.fadeIn();
    //             activeChecker.css("backgroundColor", "#acacac");
    //             activeChecker = checkers.last();
    //             activeChecker.css("backgroundColor", "#90e800");
    //         }
    //     }, 400);
    // });
    // $(".block-6 ").on('swipeleft', function(){
    //     active.fadeOut();
    //     setTimeout(function(){
    //         var next = active.next(".block-6 .slider li");
    //         if(next.length) {
    //             active = next;
    //             active.fadeIn();
    //             activeChecker.css("backgroundColor", "#acacac");
    //             activeChecker = activeChecker.next();
    //             activeChecker.css("backgroundColor", "#90e800");
    //         } else {
    //             active = $(".block-6 .slider li").first();
    //             active.fadeIn();
    //             activeChecker.css("backgroundColor", "#acacac");
    //             activeChecker = checkers.first();
    //             activeChecker.css("backgroundColor", "#90e800");
    //         }
    //     }, 400);

    // });

    // $(".block-6 ").on('swiperight', function(){
    //     active.fadeOut();
    //     setTimeout(function(){
    //         var prev = active.prev(".block-6 .slider li");
    //         if(prev.length) {
    //             active = prev;
    //             active.fadeIn();
    //             activeChecker.css("backgroundColor", "#acacac");
    //             activeChecker = activeChecker.prev();
    //             activeChecker.css("backgroundColor", "#90e800");
    //         } else {
    //             active = $(".block-6 .slider li").last();
    //             active.fadeIn();
    //             activeChecker.css("backgroundColor", "#acacac");
    //             activeChecker = checkers.last();
    //             activeChecker.css("backgroundColor", "#90e800");
    //         }
    //     }, 400);

    // });

});