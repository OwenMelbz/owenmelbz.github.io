$(function(){

    var btn = $('[data-featured]'),
    target  = $(btn.data('featured')),
    ani     = 'bounceIn',
    dance   = function(){
        target.addClass('animated ' + ani);

        setTimeout(function(){
            target.removeClass('animated ' + ani);
        }, 750);
    };

    btn.on('click hover', dance);

});