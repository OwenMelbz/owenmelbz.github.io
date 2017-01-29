$(function(){
    $('#services-link').on('click', function(evt){
        evt.preventDefault();

        $('#sidebar').addClass('skip-featured');
        $('.services-and-freelance').trigger('click');

        setTimeout(function(){
            $('#sidebar').removeClass('skip-featured');
        }, 2000);
    });
});
