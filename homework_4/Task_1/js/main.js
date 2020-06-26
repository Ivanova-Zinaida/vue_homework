
let app = new Vue({
    el:'#app',
    data:{
        services:[
            {price: 2000,
            title:'Маникюр + покрытие Beautix',
            },
            {price: 1720,
            title:'Педикюр',
            },
            {price: 2350,
            title:'Маникюр + педикюр в 4 руки',
            },
            {price: 900,
            title:'Классический/аппаратный (с покрытием)',
            },
            {price: 1600,
            title:'SPA-маникюр без покрытия',
            },
            {price: 160,
            title:'Ремонт натуральных ногтей на руках',
            },
        ],
        totalPrice: [],
    },
    computed:{
        sunTotalPrice: function(){
            let finelPrice = 0;
            for(let i = 0; i < this.totalPrice.length; i++){
                finelPrice += this.totalPrice[i];
            }
            return finelPrice;
        }
    }


 
})
