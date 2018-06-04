!function(){
    var view = document.querySelector('#siteWorks');
    var container = {
        view: null,
        siwper:null,
        swiperOptions:{
            direction: 'horizontal',
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
           }        
        },
        init: function(view){
            this.view = view;
            this.initSwiper();
        },
        initSwiper: function(){
            this.swiper = new Swiper (
                view.querySelector('.swiper-container'),
                this.swiperOptions
           )
        }
    }
    container.init(view);
}.call();