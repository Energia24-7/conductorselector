export function renderResults(results){

const container=
document.getElementById('results');

container.innerHTML='';

results.forEach(item=>{

container.innerHTML+=`

<div class="result-card">

<h3>
${item.product.name}
</h3>

<p>
${item.product.description}
</p>

<p class="score">
Compatibilidad:
${item.score}
%
</p>

<a
class="brochure"
target="_blank"
href="${item.product.brochure}">
Ver Folleto
</a>

</div>

`;

});

}
