function generateRandomColor(){return"#"+Math.floor("0xFFFFFF"*Math.random()).toString(16)}function generateComplimentColor(a){return 0==a.indexOf("#")?"#"+("0xffffff"^"0x"+a.substring(1)).toString(16):"#"+("0xffffff"^"0x"+a).toString(16)}function rgbToHex(a){return"#"+intToHex(a[0])+intToHex(a[1])+intToHex(a[2])}function intToHex(a){var b=a.toString(16);return 1==b.length?"0"+b:b}$(document).ready(function(){particlesJS.load("welcome-header-container","scripts/particlesjs-config.json"),$(".card").addClass("wow pulse card-hover"),$(".fa-heart, .fa-code").bind("mouseenter mouseleave click",function(){$(this).toggleClass("animated rubberBand")});var a=(new WOW({}).init(),Please.make_color({colors_returned:4})),b="#E5E5E5";$("body").css({background:a[0],color:b}),$("#about-section-container").css({background:a[1],color:b}),$("#project-section-container").css({background:a[2],color:b}),$("#footer-section-container").css({color:b}),$.each($(".card img"),function(a,b){var c=new ColorThief,d=rgbToHex(c.getColor(b)),e=generateComplimentColor(d);$(this).next(".project-desc").css({background:d,color:e})}),$(window).scroll(function(){if($(window).scrollTop()+$(window).height()==$(document).height()?($("#scroll #Layer_1").css({display:"none"}),$("#scroll #Layer_2").css({display:"block"})):$(window).scrollTop()==$("#welcome-header-container").offset().top&&($("#scroll #Layer_1").css({display:"block"}),$("#scroll #Layer_2").css({display:"none"}),$("#welcome-header-container").append($("#scroll"))),$(window).scrollTop()>=705&&$(window).scrollTop()<=730){var a=Please.make_color(),b=generateComplimentColor(a);$("body").css({background:a,color:"#"+b})}}),$("#scroll").click(function(){var a=$(this).parent(),b=a.next();"welcome-header-container"===a.attr("id")&&$(window).scrollTop()+$(window).height()>=$("#footer-section-container").offset().top?$.scrollTo($("#welcome-header-container"),400):b.attr("id")?($.scrollTo($(b),400),b.append($("#scroll"))):$.scrollTo($("#welcome-header-container"),400)})});