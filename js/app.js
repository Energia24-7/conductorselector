import { applications }
from '../data/applications.js';

import { criteria }
from '../data/criteria.js';

import { filterProducts }
from './recommendationEngine.js';

import { renderResults }
from './ui.js';

populateFilters();

document
.getElementById(
'applyFilters'
)
.addEventListener(
'click',
applyFilters
);

function populateFilters(){

fillSelect(
'applicationFilter',
applications
);

fillSelect(
'subApplicationFilter',
criteria.subApplications
);

fillSelect(
'voltageFilter',
criteria.voltages
);

fillSelect(
'installationFilter',
criteria.installations
);

fillSelect(
'environmentFilter',
criteria.environments
);

const featureContainer =
document.getElementById(
'featureContainer'
);

criteria.features.forEach(
feature=>{

featureContainer.innerHTML += `

<div class="feature-item">

<label>

<input
type="checkbox"
class="featureFilter"
value="${feature}">

${feature}

</label>

</div>

`;

});

}

function fillSelect(id,data){

const select =
document.getElementById(id);

select.innerHTML =
'<option value="">Todos</option>';

data.forEach(item=>{

select.innerHTML +=
`<option value="${item}">
${item}
</option>`;

});

}

function applyFilters(){

const features =
[
...document.querySelectorAll(
'.featureFilter:checked'
)
].map(x=>x.value);

const filters={

application:
document.getElementById(
'applicationFilter'
).value,

subApplication:
document.getElementById(
'subApplicationFilter'
).value,

voltage:
document.getElementById(
'voltageFilter'
).value,

installation:
document.getElementById(
'installationFilter'
).value,

environment:
document.getElementById(
'environmentFilter'
).value,

features

};

const results =
filterProducts(filters);

renderResults(results);

}
