import { applications }
from '../data/applications.js';

import {
selected,
getFilteredProducts,
getOptions
}
from './cascadeEngine.js';

import {
renderProducts
}
from './ui.js';

const appContainer =
document.getElementById(
'applications'
);

applications.forEach(app=>{

const button =
document.createElement(
'button'
);

button.className =
'app-card';

button.textContent =
app;

button.onclick = ()=>{

selected.application =
app;

updateUI();

};

appContainer.appendChild(
button
);

});

document
.getElementById(
'subApplication'
)
.addEventListener(
'change',
e=>{

selected.subApplication =
e.target.value;

updateUI();

}
);

document
.getElementById(
'voltage'
)
.addEventListener(
'change',
e=>{

selected.voltage =
e.target.value;

updateUI();

}
);

document
.getElementById(
'installation'
)
.addEventListener(
'change',
e=>{

selected.installation =
e.target.value;

updateUI();

}
);

document
.getElementById(
'environment'
)
.addEventListener(
'change',
e=>{

selected.environment =
e.target.value;

updateUI();

}
);

function populateSelect(
id,
options
){

const select =
document.getElementById(
id
);

const current =
select.value;

select.innerHTML =
'<option value="">Todos</option>';

options.forEach(v=>{

select.innerHTML +=

`<option value="${v}">
${v}
</option>`;

});

select.value =
current;

}

function updateUI(){

populateSelect(
'subApplication',
getOptions(
'subApplication'
)
);

populateSelect(
'voltage',
getOptions(
'voltage'
)
);

populateSelect(
'installation',
getOptions(
'installation'
)
);

populateSelect(
'environment',
getOptions(
'environment'
)
);

renderProducts(
getFilteredProducts()
);

}

updateUI();
