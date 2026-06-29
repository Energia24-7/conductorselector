export function renderResults(results){

const container =
document.getElementById(
'results'
);

container.innerHTML='';

if(results.length===0){

container.innerHTML=
'<h3>No se encontraron resultados</h3>';

return;
}

results.forEach(item=>{

const p =
item.product;

container.innerHTML += `

<div class="result-card">

<h3>
${p.name}
</h3>

<p>
${p.description}
</p>

<p class="score">
Compatibilidad:
${item.score}
%
</p>

<div class="tags">

<span class="tag">
${p.voltageClass}
</span>

<span class="tag">
${p.conductor}
</span>

<span class="tag">
${p.insulation}
</span>

</div>

<a
class="brochure"
target="_blank"
href="${p.brochure}">
Ver Folleto
</a>

</div>

`;

});

}
