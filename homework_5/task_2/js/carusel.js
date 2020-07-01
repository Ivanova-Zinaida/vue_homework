Vue.component('v-slider', {
    props: {
        items:{
            type: Array,
            default: function(){
                return []
            }
        },
        itemActive: 'item-active',
    },               
    template:`
            <div class='wrap' >
                <transition-group name="slide-fade" tag="div">
                    <div class="slider-item"
                        v-for='(item, index) in items'
                        v-show="item.isActive"
                        v-bind:key="index"
                        >
                        <p class = 'slider-text' > {{ item.text }} </p>
                    </div>
                </transition-group>
            </div>`,
    methods:{
        changeSlide:function(){
            let i = 0;
            let that = this;
            setInterval(function(){
                that.items[i].isActive = false;
                i++;
                if(i ==that.items.length){
                    i=0;
                }
                that.items[i].isActive = true;  
            },4000)
            }
        },
     mounted () {
        this.changeSlide()
     }
    
})


new Vue ({
    el:'#app',
    data:{
        items: [
            {
            text:'Всё смешалось в доме Облонских',
            isActive: true}, 
            {
            text:'Всё это было бы смешно,Когда бы не было так грустно',
            isActive: false},
            {
            text:'Да был ли мальчик-то?',
            isActive: false}, 
            {
            text:'И скучно, и грустно, и некому руку подать',
            isActive: false},    
            {
            text:'Смеяться, право, не грешно Над всем, что кажется смешно',
            isActive: false},
            ]

    }
})
