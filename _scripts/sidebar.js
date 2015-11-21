var Sidebar = function( elem ){

    var author  = $('meta[name="author"]').attr('content'),
    description = $('meta[name="notice"]').attr('content'),
    title = author + ' - ' + description;

    this.open = function(e){
        e.preventDefault();

        var proj = this;

        elem.removeClass('loaded').addClass('opened loading');
        elem.find('.post-container').load( proj.href + ' .post-container .wrapper', function(){
            elem.removeClass('loading').addClass('loaded');

            history.pushState({
                url: proj.href,
                title: proj.title + ' - ' + title
            }, proj.title, proj.href);

            document.title = history.state.title;
        });

    };

    this.close = function(){

        elem.removeClass('opened loaded');

        history.pushState({
            url: '/',
            title: title
        }, title, '/');

        document.title = history.state.title;
    };

    /* Main Init */
    elem = $(elem);
    elem.find('nav a').click(this.open);
    elem.find('.close').click(this.close);
};

$(function(){
    new Sidebar('#sidebar');
});