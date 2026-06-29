import { applications }
from '../data/applications.js';

import { criteria }
from '../data/criteria.js';

import { filterProducts }
from './recommendationEngine.js';

import { renderResults }
from './ui.js';

populate();

document
.getElementById('applyFilters')
.addEventListener(
'click',
applyFilters
);

function populate(){

fillSelect(
'applicationFilter',
applications
);

fillSelect(
'installationFilter',
criteria.installations
);

fillSelect(
'voltageFilter',
criteria.voltages
);

fillSelect(
'temperatureFilter',
criteria.temperatures
);

}

function fillSelect(id,data){

const select=
document.getElementById(id);

select.innerHTML=
'<option value="">Todos</option>';

data.forEach(item=>{

select.innerHTML+=
`<option>${item}</option>`;

});

}

function applyFilters(){

const features=
[
...document.querySelectorAll(
'.featureFilter:checked'
)
]
.map(x=>x.value);

const filters={

application:
document.getElementById(
'applicationFilter'
).value,

installation:
document.getElementById(
'installationFilter'
).value,

voltage:
document.getElementById(
'voltageFilter'
).value,

features

};

const results=
filterProducts(filters);

renderResults(results);

}
