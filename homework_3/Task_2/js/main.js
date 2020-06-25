
let app = new Vue({
    el:'#app',
    data:{
        inputText: 'Измени моё содержимое', 
        flag: false
    },
    methods:{
        showInput: function(){
             this.flag = !this.flag
        }
        
    }, 

 
})
