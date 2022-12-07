document.addEventListener('DOMContentLoaded', function(event) {
    if (window.location.hash && !(window.location.hash.includes('targetText='))) {
        setTimeout(function() {
            if (window.hasOwnProperty('et_location_hash_style')) {
                window.db_location_hash_style = window.et_location_hash_style;
            } else {
                window.scrollTo(0, 0);
                var db_hash_elem = document.getElementById(window.location.hash.substring(1));
                if (db_hash_elem) {
                    window.db_location_hash_style = db_hash_elem.style.display;
                    db_hash_elem.style.display = 'none';
                }
            }
            setTimeout(function() {
                var elem = jQuery(window.location.hash);
                elem.css('display', window.db_location_hash_style);
                et_pb_smooth_scroll(elem, false, 800);
            }, 700);
        }, 0);
    }
});
jQuery(function($) {});