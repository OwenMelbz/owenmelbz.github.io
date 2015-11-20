var Sidebar = function( elem ){

    this.open = function(e){
        e.preventDefault();
        elem.removeClass('loaded').addClass('opened loading');
        elem.find('.post-container').load( this.href + ' header', function(){
            elem.removeClass('loading').addClass('loaded');
        });

    };

    this.close = function(){
        elem.removeClass('opened loaded');
    };

    /* Main Init */
    elem = $(elem);
    elem.find('nav a').click(this.open);
    elem.find('.close').click(this.close);
};

$(function(){
    new Sidebar('#sidebar');
});