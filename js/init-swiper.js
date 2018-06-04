!function(){
    var view = document.querySelector('#siteWorks');
    var container = function(view){
        var mySwiper = new Swiper (view.querySelector('.swiper-container'), {
            direction: 'horizontal',
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
           },
        })
    }
    container(view);
}.call();