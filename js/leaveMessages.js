!function(){
    var view = document.querySelector('#leaveMessages');

    var model = {
        init:function(){
            var APP_ID = '6lvWkua1rf93YuTrlvBN8GVR-gzGzoHsz';
            var APP_KEY = 'uPlBTdzbkh8JANXfgEN8j0Lv';
            AV.init({
            appId: APP_ID,
            appKey: APP_KEY})
        },
        fetch:function(){
            var query = new AV.Query('Messages');
            return query.find();
        },
        save:function(username,content){
            var Messages = AV.Object.extend('Messages');
            var messages = new Messages();
            return messages.save({
                'content': content,
                'username':username
            })
        }
    }

    var controller = {
        view:null,
        model:null,
        messageList: null,
        init: function(view,model){
            this.view = view;
            this.model = model;

            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.model.init();
            this.loadMessages();
            this.bindEvents();
        },
        loadMessages: function(){
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes);
                    array.forEach((item) => {
                        let li = document.createElement('li');
                        li.innerText = `${item.name} : ${item.content}`;
                        this.messageList.appendChild(li);
                    })
                }
            )
        },
        bindEvents: function(){
            this.form.addEventListener('submit',(e) => {
                e.preventDefault();
                this.saveMessage();
            })
        },
        saveMessage: function(){
            let myForm = this.form;
            let content = myForm.querySelector('input[name=content]').value;
            let username = myForm.querySelector('input[name=username]').value;
            this.model.save(username,content).then(function(object){
                  let li = document.createElement('li');
                  li.innerText = `${object.attributes.name} : ${object.attributes.content}`;
                  let messagesList = document.querySelector('#messageList');
                  messagesList.appendChild(li);
                  myForm.querySelector('input[name=content]').value = '';
              })
        }
    }
    controller.init(view,model);
}.call();
