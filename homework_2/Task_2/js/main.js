
let menu = new Vue({
    el:'#menu',
    data:{
        menu:{
            home: 'home',
            shop: 'shop',
            blog: 'blog',
            portfolio: 'portfolio',
        },

        curentPage: 'home',
    },
    methods:{
        showActivePage: function(e){
             let page = e.target.getAttribute('data-menu')
             return this.curentPage = page
        }
    },
    components:{
        home:{
            template: `<div>
                        <h1 class='title'>This is Homе</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.
                        </p>
                      </div>`,
        },
            shop:{
            template: `<div>
                            <h1 class='title'>This is Shop</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.</p>
                            
                        </div>`,
        },
            blog:{
            template: `<div>
                            <h1 class='title'>This is Blog</h1>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.</p>
                        </div>`,
        },
            portfolio:{
            template: `<div>
                            <h1 class='title'>This is Portfolio</h1>
                            <p  class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.</p>
                            <p  class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.</p>
                        </div>`,
        }
        
    },
   
})

