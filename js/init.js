$(function() {
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.5,
        "fg_width": 0.022,
        "circle_bg_color": "#e2e2e2",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#ffa005",
                "show": false
            },
            "Hours": {
                "text": "ore",
                "color": "#ffa005",
                "show": true
            },
            "Minutes": {
                "text": "minuti ",
                "color": "#ffa005",
                "show": true
            },
            "Seconds": {
                "text": "secondi",
                "color": "#ffa005",
                "show": true
            }
        }
    });  
});  