var Product=require('../models/product');
var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping",{useNewUrlParser:true,useUnifiedTopology:true});

var products=[
    new Product({
        imagePath: 'images/toy1.jpg',
        title: 'All Toys',
        description: 'All toys available!!!',
        price:10
    }),

    new Product({
        imagePath: 'images/toy2.jpg',
        title: 'Taddybear',
        description: 'A cute Taddybear!!!',
        price:10
    }),

    new Product({
        imagePath: 'images/toy3.jpg',
        title: 'Robotoy',
        description: 'A handsome robot toy!!!',
        price:10
    }),

    new Product({
        imagePath: 'images/toy4.jpeg',
        title: 'Pencil Jumper',
        description: 'Awesome jumping toy!!!',
        price:10
    }),

    new Product({
        imagePath: 'images/toy5.jpg',
        title: 'Soft Elephent',
        description: 'Soft toy for your children!!!',
        price:10
    }),

    new Product({
        imagePath: 'images/toy6.jpg',
        title: 'Barbie and yoda',
        description: 'Combo of Barbies and baby yoda!!!',
        price:10
    }),
];

var done=0;
for(var i=0; i<products.length; i++)
{
    products[i].save(function(err,result){
        done++;
        if(done==products.length)
        {
            exit();
        }
    });
}

function exit()
{
    mongoose.disconnect(); 
}