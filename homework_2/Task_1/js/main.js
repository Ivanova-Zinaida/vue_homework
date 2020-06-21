
let app = new Vue({
    el:'#app',
    data:{
        title:'Ведьмаки',
        show: false,

    },
    methods:{
        showText: function(){
             this.show = !this.show
        },
        
    },  
})
