Vue.component('v-painting', {
    props: ['item','index','removefn'],               
    template:`
      
       <div class="gallery">
           <img :src="item.url" :alt="item.title" class='gallery-img'>
           <a :href="item.url" class="gallery-link">{{ item.title }}</a>
           <a href = '#' class='delete'  v-on:click="removefn(index)">-</a>
       </div>`,   
})

Vue.component('v-gallery', {
    props: ['paintings','addfn', 'remove'],
    data: function (){
        return {
            item: {title:'', url:''}
        }
    },
    template: `<div class='container'>
                <div class='form'>
				    <input type="text" v-model="paintings.title" placeholder="Введите название картины" />
				    <input type="text" v-model="paintings.url" placeholder="Введите url"/>
				    <button  v-on:click="addfn({title:paintings.title, url:paintings.url})">Добавить</button>
				</div>
               <div class='wrap-gallery'>
                 <v-painting v-for="(item, index) in paintings" :key="index"
                    :index="index"
                    :removefn="remove"
                    :item='item'></v-painting>
               </div>
            </div>`
    
});

new Vue ({
    el:'#app',
    data:{
        paintings: [
            {
                title:'Американские купальщицы',
                url:'https://www.baskiloji.com/ArsivGorsel/86484/500.jpg'
            },
            {
                title:'Бетховенский фриз',
                url:'https://i.pinimg.com/736x/22/5b/bb/225bbb8b5de5ab6ea503c9792ef98ddb--klimt-art-gustav-klimt.jpg'
            },
            {
                title:'Питер брейгель младший',
                url:'https://cdn1.jigidi.com/thumbs/S0ZYN665/l'
            },
            {
                title:'Отчаяние',
                url:'https://gsud.cdn-immedia.net/2018/10/Pomella--500x350.jpeg'
            },
            {
                title:'Падший ангел',
                url:'https://bk55.ru/fileadmin/bkinform/bk_info_66997_big_1453973524.jpg'
            },

            ],
        nameSite: 'Галерея',
        
    },
		methods:{
			remove: function(index){
				this.paintings.splice(index, 1);
			},
			add: function(item){
				this.paintings.push(item);
			}
		}
})
