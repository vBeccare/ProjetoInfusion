(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');


    var $btnMenu = document.querySelector('.header__btnMenu');
    
    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024
    })

    var carousel = new Carousel ({
        container: '.notebook-slide .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var quotes = new Carousel ({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

})()