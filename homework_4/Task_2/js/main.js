
let app = new Vue({
    el:'#app',
    data:{
    news:[],
    title: 'Новости кино.', 
    flag: true,
    },
    
    methods: {
      chengeFlag: function(){
          this.flag = !this.flag;
          console.log(this.flag)
      }  
    },

    created: function() {                
         this.news = window.arrNews
    },   
                   
});
