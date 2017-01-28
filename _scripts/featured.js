$(function(){

    var body = $('body'),
    btn = $('[data-featured]'),
    target  = $(btn.data('featured')),
    sidebar = $('#sidebar'),
    ani     = 'bounceIn',
    dance   = function(){
        target.addClass('animated ' + ani);

        setTimeout(function(){
            target.removeClass('animated ' + ani);
        }, 750);
    };

    btn.on('click hover', dance);

    var openMenu = function(){
        sidebar.addClass('mobile-opened');
    };

    var closeMenu = function(e){
        if( $(e.target).hasClass('mobile-opened') ){
            sidebar.removeClass('mobile-opened');
        }
    };

    //Responsive Menu
    enquire.register("screen and (max-width: 640px)", {

        match: function(){

            body.addClass('is_mobile');
            btn.on('click', openMenu);
            sidebar.on('click', closeMenu);
        },

        unmatch: function(){

            body.removeClass('is_mobile');
            btn.off('click', openMenu);

            sidebar
                .off('click', closeMenu)
                .removeClass('mobile-opened');
        },

        setup: function(){
            if( sidebar.hasClass('opened') ){
                openMenu();
            }
        },

        deferSetup: false
    });

});
