!function(){
    var view = document.querySelector('nav.menu');
    var controller = function(){
        let aTags = view.querySelectorAll('nav.menu > ul > li > a')
        for(let i=0; i<aTags.length; i++){
            aTags[i].onclick = function(x){
                x.preventDefault();
                let a = x.currentTarget;
                let href = a.getAttribute('href'); //'#siteAbout'
                let element = document.querySelector(href);
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
            }
        }
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate); 
    }
    controller(view);
}.call();
