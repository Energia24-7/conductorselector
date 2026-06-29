export function renderProducts(products){

const results =
document.getElementById(
'results'
);

results.innerHTML='';

if(products.length===0){

results.innerHTML=
'<h2>No existen coincidencias</h2>';

return;
}

products.forEach(product=>{

results.innerHTML += `

<div class="product-card">

<h2>
${product.name}
</h2>

<p>
${product.description}
</p>

<p>

<strong>Voltaje:</strong>
${product.voltageClass}

</p>

<p>

<strong>Conductor:</strong>
${product.conductor}

</p>

<p>

<strong>Aislamiento:</strong>
${product.insulation}

</p>

<p>

<strong>Instalación:</strong>
${product.installation.join(', ')}

</p>

<p>

<strong>Ambiente:</strong>
${product.environment.join(', ')}

</p>

</div>

`;

});

}
