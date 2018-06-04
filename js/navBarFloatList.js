!function(){
    var view = document.querySelector('#topNavBar');
    var controller = {
        view: null,
        init: function(view){
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function(){
            var view = this.view;
            let liTags = view.querySelectorAll('nav ul li');
            for(let i=0; i<liTags.length; i++){
              liTags[i].onmouseenter = (x) => {
               x.currentTarget.classList.add('active');
              }
              liTags[i].onmouseleave = (x) => {
                x.currentTarget.classList.remove('active');
              }
            }
        }
    }
    controller.init(view);
}.call();