const compareList = [];

export function renderProducts(products){

const results =
document.getElementById(
'results'
);

const counter =
document.getElementById(
'resultCounter'
);

counter.innerHTML =
`${products.length} producto(s) encontrado(s)`;

results.innerHTML='';

if(products.length===0){

results.innerHTML=`
<h2>No existen coincidencias</h2>
`;

return;
}

products.forEach(product=>{

const features =
(product.specialFeatures||[])
.map(feature=>`
<span class="feature-tag">
${feature}
</span>
`)
.join('');

results.innerHTML += `

<div class="product-card">

<div class="product-header">

<h3>${product.name}</h3>

<small>
${(product.application||[]).join(', ')}
</small>

</div>

<div class="product-body">

<p>
${product.description || ''}
</p>

<div class="product-specs">

<div class="spec">
<div class="spec-title">Voltaje</div>
<div class="spec-value">
${product.voltageClass || '-'}
</div>
</div>

<div class="spec">
<div class="spec-title">Temperatura</div>
<div class="spec-value">
${product.temperatureClass || '-'}
</div>
</div>

<div class="spec">
<div class="spec-title">Conductor</div>
<div class="spec-value">
${product.conductor || '-'}
</div>
</div>

<div class="spec">
<div class="spec-title">Aislamiento</div>
<div class="spec-value">
${product.insulation || '-'}
</div>
</div>

</div>

<div class="product-features">

${features}

</div>

<div class="product-actions">

<a
href="${product.datasheet || '#'}"
target="_blank"
class="datasheet-btn">

Ficha Técnica

</a>

<label
class="compare-checkbox">

<input
type="checkbox"
class="compare-product"
value="${product.id}">

Comparar

</label>

</div>

</div>

</div>

`;

});

setupCompareEvents(products);

}

function setupCompareEvents(products){

document
.querySelectorAll(
'.compare-product'
)
.forEach(check=>{

check.addEventListener(
'change',
event=>{

const id =
event.target.value;

const product =
products.find(
p=>p.id===id
);

if(event.target.checked){

if(
!compareList.find(
p=>p.id===id
)
){
compareList.push(product);
}

}else{

const index =
compareList.findIndex(
p=>p.id===id
);

if(index>-1){
compareList.splice(index,1);
}

}

}
);

});

}

export function setupCompareButton(){

document
.getElementById(
'compareBtn'
)
.addEventListener(
'click',
renderComparison
);

}

function renderComparison(){

const container =
document.getElementById(
'comparisonTable'
);

if(compareList.length<2){

container.innerHTML=
'Seleccione al menos dos productos';

return;
}

let html =
'<table><thead><tr><th>Característica</th>';

compareList.forEach(product=>{

html += `<th>${product.name}</th>`;

});

html += '</tr></thead><tbody>';

const fields=[

['Voltaje','voltageClass'],
['Conductor','conductor'],
['Aislamiento','insulation'],
['Temperatura','temperatureClass']

];

fields.forEach(field=>{

html += `<tr><td>${field[0]}</td>`;

compareList.forEach(product=>{

html += `
<td>
${product[field[1]] || '-'}
</td>
`;

});

html += '</tr>';

});

html += '</tbody></table>';

container.innerHTML = html;

}

export function updateSummary(filters){

document.getElementById(
'selectionText'
).innerHTML = `

<strong>Aplicación:</strong>
${filters.application || 'Todas'}

<br>

<strong>Uso:</strong>
${filters.subApplication || 'Todos'}

<br>

<strong>Voltaje:</strong>
${filters.voltage || 'Todos'}

<br>

<strong>Instalación:</strong>
${filters.installation || 'Todas'}

<br>

<strong>Ambiente:</strong>
${filters.environment || 'Todos'}

`;

}
