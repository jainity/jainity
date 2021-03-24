(function($) {

    "use strict";
    $.fn.angularFunction = function() {
      
        $(document).on('click', '.link', function(e) {
            e.preventDefault();
            console.log('click ',this.text);
            window.open(this.text,'_blank');
        });

        

        $(document).on('click', '#icons_click', function(e) {
            e.preventDefault();
            $("#contact_forms").toggleClass('open'); 
            console.log('click  icons_click');   
        });

        $(document).on('click', '.contactusmenu', function(e) {
            e.preventDefault();
            $("#contact_forms").addClass('open'); 
            console.log('click  icons_click');   
        });

        // $(document).on('click', '.mapopen', function(e) {
        //     $("ion-app").css({'display': 'none'}); 
        // });
        $(document).on('click', '.close-box', function(e) {
             $("ion-app").removeClass('_gmaps_cdv_'); 
        });


      

        $(document).ready(function() {
            $(document).on('click', '#uparrow', function() {
                console.log('Move to topsss');
                $("#page").animate({scrollTop: 0}, 400);                
        });                
        });
    };
})(jQuery);
$(window).angularFunction();

 function removeMenu() {
    $("#contact_forms").toggleClass('open'); 
  }