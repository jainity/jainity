(function($) {

    "use strict";
    $.fn.angularFunction = function() {
      
    $(document).on('click', '.search_btn', function(e) {
            e.preventDefault();
            $("#header .search_block").toggleClass('open'); 
            console.log('click  icons_click');   
        });
    };
})(jQuery);

$(window).angularFunction();

