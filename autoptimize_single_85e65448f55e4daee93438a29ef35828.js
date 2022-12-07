(function($) {
    $(document).ready(function() {
        $('#main-footer .searchform input[type=text]').attr("placeholder", "Help me find something");

        function setup_collapsible_submenus() {
            var $menu = $('#mobile_menu'),
                top_level_link = '#mobile_menu .menu-item-has-children > a';
            $menu.find('a').each(function() {
                $(this).off('click');
                if ($(this).is(top_level_link)) {
                    $(this).attr('href', '#');
                }
                if (!$(this).siblings('.sub-menu').length) {
                    $(this).on('click', function(event) {
                        $(this).parents('.mobile_nav').trigger('click');
                    });
                } else {
                    $(this).on('click', function(event) {
                        event.preventDefault();
                        $(this).parent().toggleClass('visible');
                    });
                }
            });
        }
        $(window).load(function() {
            setTimeout(function() {
                setup_collapsible_submenus();
            }, 700);
        });
        $('.swiper-container .et_pb_post .more-link').prepend("<span class='arrow_right'></span>");
        $(".readmore").click(function(e) {
            var idName = $(this).children().attr('class');
            $('#' + idName).slideToggle("slow", function() {
                if ($(".readmore span" + "." + idName).text() == 'Read more') {
                    $(".readmore span" + "." + idName).text('Collapse');
                } else {
                    $(".readmore span" + "." + idName).text('Read more');
                }
            });
        });
        var subNavExists = $('.subNav');
        if (subNavExists.length) {
            var subNav = $('.subNav').offset().top;
            $(window).scroll(function() {
                if ($(window).scrollTop() > subNav) {
                    $('.subNav').addClass('fixed');
                    $('.subNav').next('div').css("padding-top", "136px");
                } else {
                    $('.subNav').removeClass('fixed');
                    $('.subNav').next('div').css("padding-top", "54px");
                }
            });
        }
        if (window.location.hash) {
            var hash = window.location.hash;
            console.log(hash);
            if (hash.length && hash == '#contx') {} else if (hash.length) {
                $('.senseiTabs .et_pb_mini_menu .cwp_et_pb_mini_menu_items .et_pb_minimenu_item a').removeClass('active');
                $('.senseiTabs .et_pb_mini_menu .cwp_et_pb_mini_menu_items .et_pb_minimenu_item a[href="' + hash + '"]').addClass('active');
            } else {}
        } else {}
    });
})(jQuery)