const Home = { template: `<div><div class="container"><h1 class='title'>This is Homе</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.</p>
                        </div></div>` };
const Shop = { template: ` <div><div class="container">
                            <h1 class='title'>This is Shop</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.</p>    
                         </div> </div>` };
const Blog = { template: `<div class="container">
                            <h1 class='title'>This is Blog</h1>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.</p>
                        </div>`};
const Portfolio = { template: `<div>
                            <div class="container">
                            <h1 class='title'>This is Portfolio</h1>
                            <p  class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.</p>
                            <p  class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis voluptas rerum quia ex eveniet veritatis, impedit delectus illum dolore facere, qui ad velit, nihil eaque aut ut vel iste.</p>
                        </div>
                        </div>`}

const routes = [
    { path: '/', component: Home},
    { path: '/shop', component: Shop},
    { path: '/blog', component: Blog},
    { path: '/portfolio', component: Portfolio},
]

const router =new VueRouter({
    routes: routes
});
let app = new Vue({
    router: router
}).$mount('#app')

