
let app = new Vue({
    el:'#app',
    data:{
        news:[
        {
        title:'Мир кино после Мстителей',
        description: `Мир вряд ли будет прежним. Во всяком случае, мир кино так точно. Трудно представить, что после всех потрясений первой половины 2020 года прокат сможет вновь выйти на уровень, когда кассовые сборы отдельных кинопроектов превышали два миллиарда долларов, а общее число "миллиардеров" за год могло оказаться больше пяти.`,
        url:'https://www.kinonews.ru/article_93883/',
        img:'https://www.kinonews.ru/insimgs/2020/artimg/artimg93883.jpg'  
        },
        {
        title:`Новый "Крик" запущен в производство`,
        description: `Студии Spyglass Media Group и Paramount Pictures запускают в производство очередной фильм ужасов из серии крик. Об этом со ссылкой на свои источники сообщает издание Variety. Постановщиками назначены Мэттью Беттинелли и Тайлер Джиллетт, создатели фильма "Я иду искать" 2019 года выпуска`,
        url:'https://www.kinonews.ru/news_93935/',
        img:'https://www.kinonews.ru/insimgs/2020/newsimg/newsimg93935.jpg'  
        },
        {
        title:`Киану Ривз вернулся на съемки "Матрицы 4"`,
        description: 'Создатели фантастического боевика "Матрица 4" вновь приступают к съемкам. Как свидетельствуют корреспонденты издания TMZ, к работе вернулись исполнители ключевых ролей - Киану Ривз, Кэрри-Энн Мосс и Нил Патрик Харрис. Все они были замечены в Берлине во время подготовки к новому этапу работы над картиной.',
        url:'https://www.kinonews.ru/news_93937/',
        img:'https://www.kinonews.ru/insimgs/2020/newsimg/newsimg93937.jpg'  
        },
        {
        title:`Четвертый сезон «Рассказа служанки» перенесли на следующий год`,
        description: `Hulu решил отложить выход четвёртого сезона «Рассказа служанки», так как из-за пандемии съёмочный процесс стоит на паузе. Пока неизвестно, когда конкретно возобновится производство и выйдут новые серии.`,
        url:'https://www.film.ru/news/zaderzhka-sluzhanki',
        img:'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/5d128f389c510112de7ff8c3.jpg'  
        },
        {
        title:`Режиссер «Мира Юрского периода» готовит фильм об Атлантиде`,
        description: `Universal запустила в разработку новый проект под названием «Атлантида». Режиссёром картины выступит Колин Треворроу, известный по трилогии «Мир Юрского периода».`,
        url:'https://www.film.ru/news/novaya-atlantida',
        img:'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/colin-trevorrow.jpg'  
        },
    ],
    inputSerch: '',
    title: 'Новости кино.', 
    number: 0
        
    },

    computed: {
        findNews: function() {
            let arrNews = [];
            for(let i = 0; i < this.news.length; i++){
                let regular = new RegExp(`^.*${this.inputSerch}.*$`,'i');
                let name = this.news[i].title
                if(regular.test(name) && this.inputSerch != '') {
                    arrNews.push(this.news[i]);
                    
                }
            }
            this.number = arrNews.length;
            return arrNews;  
        }
 
    },   
 
})
