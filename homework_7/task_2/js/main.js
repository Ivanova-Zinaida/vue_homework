
let app = new Vue({
    el:'#app',
    data:{
        items:[],
        color:[],
        background:'white',
        count:1,
        startNumber:50,
        show: true
    },
    methods:{
        createElem: function (){
            this.color = [];
            
            for(let i = 1; i<=this.startNumber; i++){
               this.items.push(i)
               this.color.push("rgb(" + this.getRandom(0,255) + "," + this.getRandom(0,255) + "," + this.getRandom(0,255) + ")")
            }
            this.show = !this.show
            this.items.sort(function(){
				return Math.random()*2 - 1;
			}); 
            
        },
        getRandom:function (min, max){
		      return Math.random()*(max - min) + min;
	       },
        shuffle: function(){
			this.items.sort(function(){
				return Math.random()*2 - 1;
			});  
        },
        checkNumber: function(e){
            if(this.count == e.target.innerText){
                e.target.style.backgroundColor = 'green';
                this.count++;
            }
            if(this.count==this.startNumber+1){
                e.target.style.backgroundColor = 'green';
                alert('игра завершена')
                this.count = 1; 
                this.items = []
                this.show = !this.show
                
            }
     
        }
    },


   
})

