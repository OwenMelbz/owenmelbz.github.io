var Sidebar = function( elem ){

    var self     = this,
    author       = $('meta[name="author"]').attr('content'),
    description  = $('meta[name="notice"]').attr('content'),
    title_suffix = author + ' - ' + description;

    this.load_project = function( url, title, back_btn ){

        elem.removeClass('loaded').addClass('opened loading');

        elem.find('.post-container').load( url + ' .post-container .wrapper', function(){
            elem.removeClass('loading').addClass('loaded');

            if( !back_btn ){

                history.pushState({
                    url: url,
                    title: title + ' - ' + title_suffix
                }, title, url);
            }

            document.title = history.state.title;
        });
    };

    this.open = function(e){
        e.preventDefault();
        self.load_project( this.href, this.title );
    };

    this.close = function(){

        elem.removeClass('opened loaded');

        history.pushState({
            url: '/',
            title: title_suffix
        }, title_suffix, '/');

        document.title = history.state.title;
    };

    this.browser_click = function(){
        if( history.state && history.state.url ){
            self.load_project( history.state.url, history.state.title, true);
        }
    };

    /* Main Init */
    elem = $(elem);
    elem.find('nav a').click(this.open);
    elem.find('.close').click(this.close);
    window.onpopstate = this.browser_click;
};

$(function(){
    new Sidebar('#sidebar');
});