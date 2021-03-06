var $head = $("#ha-header");
$(".ha-waypoint").each(function (b) {
    var a = $(this), c = a.data("animateDown"), d = a.data("animateUp");
    a.waypoint(function (e) {
        if (e === "down" && c) {
            $head.attr("class", "ha-header " + c)
        } else {
            if (e === "up" && d) {
                $head.attr("class", "ha-header " + d)
            }
        }
    }, {offset: "100%"})
});
$(function () {
    var b = $("#filter_container");
    b.isotope({itemSelector: ".element"});
    var a = $("#filter_header .option-set"), c = a.find("a");
    c.click(function () {
        var h = $(this);
        if (h.hasClass("selected")) {
            return false
        }
        var f = h.parents(".option-set");
        f.find(".selected").removeClass("selected");
        h.addClass("selected");
        var d = {}, e = f.attr("data-option-key"), g = h.attr("data-option-value");
        g = g === "false" ? false : g;
        d[e] = g;
        if (e === "layoutMode" && typeof changeLayoutMode === "function") {
            changeLayoutMode(h, d)
        } else {
            b.isotope(d)
        }
        return false
    })
});
$(document).ready(function () {
    $("html").niceScroll();
    $(".scroller").getNiceScroll().resize();
    $(".flexslider").flexslider({
        animation: "fade", start: function (b) {
            $("body").removeClass("loading")
        }
    });
    $("span.mask").hover(function () {
        $(this).siblings("a img").addClass("hovering");
        $(this).parent().siblings(".portfolio-title").children("h4").stop().animate({top: -20}, 350)
    }, function () {
        $(this).siblings("a img").removeClass("hovering");
        $(this).parent().siblings(".portfolio-title").children("h4").stop().animate({top: 0}, 350)
    });
    $("a[href*=#]:not([href=#])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({scrollTop: b.offset().top}, 500);
                return false
            }
        }
    });
    $("#passion_form").validate();
    var a;
    a = new GMaps({
        el: "#map",
        lat: -12.043333,
        lng: -77.028333,
        zoomControl: true,
        zoomControlOpt: {style: "SMALL", position: "TOP_LEFT"},
        panControl: true,
        streetViewControl: false,
        mapTypeControl: true,
        overviewMapControl: false
    })
});

// When the DOM is ready, run this function
$(document).ready(function() {
    //Set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });
});