
let product = new Vue({
    el:'#product',
    data:{
        product:{
            id:'0x34fe',
            url:'img/product-big.png',
            title: 'Double-faced Wool Cape Jacket',
            color: 'Черный',
            size: 'L',
            priceSale: 47.00,
            price: 65.00,
            discription: 'Красивый и очень удобный жакет из коллекции Bodyflirt в свободном стиле оверсайз. Прекрасная модель как в офис, так и на каждый день. V-образный вырез. Застежка на пуговицу.'
        }
    },
    filters: {
       returnPrice: function(value){
           return '$' + ' ' + value;
       } 
    }
    
})