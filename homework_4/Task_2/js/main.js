
let app = new Vue({
    el:'#app',
    data:{
    news:[],
    title: 'Новости кино.', 
    },


    created: function() {                
         this.news = window.arrNews;
    },   
                   
});
