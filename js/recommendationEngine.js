import { products }
from '../data/products.js';

export function filterProducts(filters){

return products
.map(product=>{

let score=0;

if(
filters.application &&
product.application.includes(
filters.application
)
){
score+=40;
}

if(
filters.subApplication &&
product.subApplication.includes(
filters.subApplication
)
){
score+=25;
}

if(
filters.voltage &&
product.voltageClass ===
filters.voltage
){
score+=20;
}

if(
filters.installation &&
product.installation.includes(
filters.installation
)
){
score+=15;
}

if(
filters.environment &&
product.environment.includes(
filters.environment
)
){
score+=10;
}

filters.features.forEach(feature=>{

if(
product.specialFeatures.includes(
feature
)
){
score+=10;
}

});

return {
product,
score
};

})
.filter(x=>x.score>0)
.sort((a,b)=>b.score-a.score);

}
