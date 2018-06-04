!function(){
    var view = document.querySelector('nav.menu');
    var controller = {
        view: null,
        init: function(view){
            this.view = view;
            this.initAnimation();
            this.bindEvents();
        },
        initAnimation: function(){
            function animate(time){
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate); 
        },
        scrollToElement:function(element){
            let top = element.offsetTop;
            let currentTop = window.scrollY;
            let targetTop = top -84;
            var coords = {y: currentTop }; 
            var s = targetTop - currentTop;
            var t = Math.abs((s / 100))*300;
            if(t > 500) {t = 500};
            var tween = new TWEEN.Tween(coords)
                    .to({y: targetTop }, t)
                    .easing(TWEEN.Easing.Quadratic.InOut) 
                    .onUpdate(function() {
                    window.scrollTo(0,coords.y) 
                    })
                    .start();
        },
        bindEvents: function(){
            let aTags = this.view.querySelectorAll('nav.menu > ul > li > a');
            for(let i=0; i<aTags.length; i++){
                aTags[i].onclick = (x) => {
                    x.preventDefault();
                    let a = x.currentTarget;
                    let href = a.getAttribute('href'); //'#siteAbout'
                    let element = document.querySelector(href);
                    this.scrollToElement(element);
                }
            }
        }
    }
    controller.init(view);
}.call();


