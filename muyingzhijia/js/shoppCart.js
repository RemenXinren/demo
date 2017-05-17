 var vm = new Vue({
            el: 'body',
            data: {
                item: [
                {
                    img: '../img/car1.jpg',
                    txt: '美素佳儿金裝3段幼儿配方奶粉900g',
                    amount: 1,
                    price: 169.00,
                    check:false
                },
                {
                    img: '../img/car2.jpg',
                    txt: '皇家美素佳儿3段幼儿配方奶粉800g',
                    amount: 2,
                    price: 358.00,
                    check:false
                },
                {
                    img: '../img/car3.jpg',
                    txt: '美素佳儿金装4段儿童配方奶粉900g',
                    amount: 1,
                    price: 157.00,
                    check:false
                }
                ]
            },

            methods:{
                add: function(index){
                   this.item[index].amount = parseInt(this.item[index].amount) + 1;
                },
                reduce: function(index){
                    if(parseInt(this.item[index].amount) >= 1){
                    	this.item[index].amount = parseInt(this.item[index].amount) - 1;
                    }
                },
                checkAll: function(){
                    var cont = 0;
                    for(var i in this.item){
                        if( this.item[i].check == true ){
                            cont++;
                        }
                        if (cont != this.item.length){
                            this.item[i].check = true;
                        }else {
                            for(var j in this.item){
                                this.item[j].check = false;
                            }
                        }
                    }
                }



            },
             computed: {
                 price: function () {
                     var price = 0;
                     for (var i = 0; i < this.item.length; i++) {
                         if (this.item[i].check == true) {
                             var self = this.item[i];
                             price += self.amount * self.price;
                         }
                     }
                     return price;
                 },


                 toggleAll: function () {
                     var cont = 0;
                     for (var i in this.item) {
                         if (this.item[i].check == true) {
                             cont++;
                         }
                         if (cont == this.item.length) {
                             return true;
                         }
                     }
                 }
             }
            
           
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        })