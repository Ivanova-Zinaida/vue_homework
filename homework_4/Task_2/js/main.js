
let app = new Vue({
    el:'#app',
    data:{
    news:[],
    title: 'Новости кино.', 
    flag: true,
    curentPage: [],
    },
 
   methods: {
       showActivePage: function(e){
             let page = e.target.getAttribute('data-news')
             for(let i = 0; i < this.news.length; i++){
                 if(this.news[i].id == page){
                     this.curentPage.push(this.news[i]);
                     
                 }
             }
           this.flag = false;
        },
        returnPage: function(){
            this.curentPage.length = 0;
            this.flag = true
            return this.curentPage;
        } 

    },

    created: function() {                
         this.news = window.arrNews;
    },   
                   
});
