import { products }
from '../data/products.js';

export function filterProducts(filters){

return products
.map(product=>{

let score=0;

if(product.application.includes(filters.application))
score+=40;

if(product.installation.includes(filters.installation))
score+=30;

if(product.voltage.includes(filters.voltage))
score+=20;

filters.features.forEach(feature=>{

if(product.features.includes(feature))
score+=10;

});

return{
product,
score
};

})
.filter(x=>x.score>0)
.sort((a,b)=>b.score-a.score);

}
