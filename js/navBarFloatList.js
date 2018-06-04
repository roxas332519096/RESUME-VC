!function(){
    var view = document.querySelector('#topNavBar');
    var controller = {
        view: null,
        init: function(view){
            this.view = view;
            this.bindEvents()
        },
        bindEvents: function(){
            var view = this.view;
            let liTags = view.querySelectorAll('nav ul li');
            for(let i=0; i<liTags.length; i++){
              liTags[i].onmouseenter = (x) => {
               this.active();
              }
              liTags[i].onmouseleave = (x) => {
                this.deactive();
              }
            }
        },
        active: function(){
            this.view.classList.add('active');
        },
        deactive:function(){
            this.view.classList.remove('active');
        }
    }
    controller.init(view);
}.call();