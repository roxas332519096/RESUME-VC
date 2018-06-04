 !function(){
    let specialTags = document.querySelectorAll('[data-x]');
    for (let i = 0;i < specialTags.length;i++){
      specialTags[i].classList.add('offSet');
    }

    setTimeout(() => {
        fineCloset();
    },1100)

    window.addEventListener('scroll',function(x){
        fineCloset();
    });

    function fineCloset(){
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for (let i = 0;i < specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i;
            }
        }
        specialTags[minIndex].classList.remove('offSet')
        let id  =  specialTags[minIndex].id
        let a = document.querySelector('a[href ="#'+ id +'"]')
        let li = a.parentNode;
        let lis = li.parentNode.children;
        for(let i = 0;i < lis.length;i++){
            lis[i].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }               
 }.call();
    