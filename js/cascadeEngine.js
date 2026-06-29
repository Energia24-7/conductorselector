import { products }
from '../data/products.js';

export const selected = {

application:"",
subApplication:"",
voltage:"",
installation:"",
environment:""

};

export function getFilteredProducts(){

return products.filter(product=>{

if(
selected.application &&
!product.application?.includes(
selected.application
)
){
return false;
}

if(
selected.subApplication &&
!product.subApplication?.includes(
selected.subApplication
)
){
return false;
}

if(
selected.voltage &&
product.voltageClass !==
selected.voltage
){
return false;
}

if(
selected.installation &&
!product.installation?.includes(
selected.installation
)
){
return false;
}

if(
selected.environment &&
!product.environment?.includes(
selected.environment
)
){
return false;
}

return true;

});

}

export function getOptions(field){

const productsFiltered =
getFilteredProducts();

const values =
new Set();

productsFiltered.forEach(p=>{

if(field==="subApplication"){

(p.subApplication||[])
.forEach(v=>values.add(v));

}

if(field==="voltage"){

values.add(
p.voltageClass
);

}

if(field==="installation"){

(p.installation||[])
.forEach(v=>values.add(v));

}

if(field==="environment"){

(p.environment||[])
.forEach(v=>values.add(v));

}

});

return [...values]
.sort();

}
