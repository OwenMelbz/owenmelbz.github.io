$(function(){
    $('#services-link').on('click', function(evt){
        evt.preventDefault();
        $('.services-and-freelance').trigger('click');
    });
});
