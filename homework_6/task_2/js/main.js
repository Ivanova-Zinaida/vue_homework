const Header = {
      template: `<header class='header'>
                <router-link to="/" exact tag='h1' class='link-title'>{{sitename}}</router-link>
              </header>`,
       props:[ 'sitename'],
    };

const Home = {
   template:`
    <main class='main-wrap'>
        <div class="wrap-product"  v-for="product in products" :key="product.id">
            <div>
                <figure>
                    <img v-bind:src="product.url"> 
                </figure>
            </div>
            <div>
                <h2 class='card-title'>{{product.title}}</h2>
                <p>Стоимость: {{product.price }}</p>	
                <router-link :to="{name:'detailsProd', params:{id:product.id}}" class='btn-card'>Подробнее</router-link>

            </div>
         </div>    
    </main>
`  ,
	data:function(){
		return {
			products:[]
		}
	},
	created(){
		this.products = window.products;
	   }
    }

const DetailsProd = {
    template: ` <div>
                <div 
                  v-for="product in products"
                 :key="product.id">
                    
                    <div v-if="$route.params.id == product.id" class='single-card'>
                        <div>
                            <figure>
                                <img v-bind:src="product.url"> 
                            </figure>
                        </div>
                        <div class='card-description'>
                            <h2 class='card-title'>{{product.title}}</h2>
                            <p class='card-text'>Автор: {{product.author }}</p>
                            <p class='card-text'>Стоимость: {{product.price }}</p>  
                            <p class='card-text'>Тип обложки: {{product.coverType }}</p> 
                            <p class='card-text'>Количество страниц: {{product.numberOfPages }}</p>  
                            <p class='card-text'>год издания: {{product.years }}</p> 
                            <p class='card-text'>Описание: {{product.fulldiscription }}</p>
                        </div>
                    </div>
                </div>
            </div>`,
	data:function(){
		return {
			products:[]
		}
	},
	created(){
		this.products = window.products;
	}
};

const routes = [
  { 
    path: '/', 
    component: Home,
    },
  { 
    path: '/detailsProd/:id', 
    component: DetailsProd,
    name:'detailsProd'
    },

];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const book = new Vue({
    el:'#app',
    router: router,
    data:{
        products:[],
        siteName: 'Магазин книг'
    },

    components: {
        'header-books': Header,
        'detailsProd':DetailsProd,
        'home':Home
                },
    created: function(){
        this.products = window.products;
    }
})
/* */
