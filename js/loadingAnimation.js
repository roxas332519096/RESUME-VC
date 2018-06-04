!function(){
    var view = document.querySelector('#stieWelcome');
    var controller = function(){
        setTimeout(function(){
            view.classList.remove('active')    
        },1000)
    }
    controller(view);
}.call();