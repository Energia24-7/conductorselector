import { applications }
from '../data/applications.js';

import {
    selected,
    getFilteredProducts,
    getOptions
}
from './cascadeEngine.js';

import {
    renderProducts,
    setupCompareButton,
    updateSummary
}
from './ui.js';


document.addEventListener(
    'DOMContentLoaded',
    init
);


function init(){

    buildApplicationButtons();

    setupCompareButton();

    setupResetButton();

    setupSelectors();

    updateUI();

}


/* =====================================
   APPLICATION BUTTONS
===================================== */

function buildApplicationButtons(){

    const container =
        document.getElementById(
            'applicationButtons'
        );

    container.innerHTML = '';

    applications.forEach(app=>{

        const button =
            document.createElement(
                'button'
            );

        button.className =
            'app-btn';

        button.textContent =
            app;

        button.onclick = ()=>{

            document
            .querySelectorAll(
                '.app-btn'
            )
            .forEach(btn=>
                btn.classList.remove(
                    'active'
                )
            );

            if(
                selected.application === app
            ){

                selected.application = '';

                button.classList.remove(
                    'active'
                );

            }else{

                selected.application = app;

                button.classList.add(
                    'active'
                );

            }

            selected.subApplication = '';
            selected.voltage = '';
            selected.installation = '';
            selected.environment = '';

            updateUI();

        };

        container.appendChild(
            button
        );

    });

}


/* =====================================
   SELECTORS
===================================== */

function setupSelectors(){

    document
    .getElementById(
        'subApplicationFilter'
    )
    .addEventListener(
        'change',
        event=>{

            selected.subApplication =
                event.target.value;

            selected.voltage = '';
            selected.installation = '';
            selected.environment = '';

            updateUI();

        }
    );

    document
    .getElementById(
        'voltageFilter'
    )
    .addEventListener(
        'change',
        event=>{

            selected.voltage =
                event.target.value;

            selected.installation = '';
            selected.environment = '';

            updateUI();

        }
    );

    document
    .getElementById(
        'installationFilter'
    )
    .addEventListener(
        'change',
        event=>{

            selected.installation =
                event.target.value;

            selected.environment = '';

            updateUI();

        }
    );

    document
    .getElementById(
        'environmentFilter'
    )
    .addEventListener(
        'change',
        event=>{

            selected.environment =
                event.target.value;

            updateUI();

        }
    );

}


/* =====================================
   RESET
===================================== */

function setupResetButton(){

    document
    .getElementById(
        'resetFilters'
    )
    .addEventListener(
        'click',
        ()=>{

            selected.application = '';
            selected.subApplication = '';
            selected.voltage = '';
            selected.installation = '';
            selected.environment = '';

            document
            .querySelectorAll(
                '.app-btn'
            )
            .forEach(btn=>
                btn.classList.remove(
                    'active'
                )
            );

            updateUI();

        }
    );

}


/* =====================================
   UI UPDATE
===================================== */

function updateUI(){

    populateSelect(
        'subApplicationFilter',
        getOptions(
            'subApplication'
        ),
        selected.subApplication
    );

    populateSelect(
        'voltageFilter',
        getOptions(
            'voltage'
        ),
        selected.voltage
    );

    populateSelect(
        'installationFilter',
        getOptions(
            'installation'
        ),
        selected.installation
    );

    populateSelect(
        'environmentFilter',
        getOptions(
            'environment'
        ),
        selected.environment
    );

    const filtered =
        getFilteredProducts();

    renderProducts(
        filtered
    );

    updateSummary(
        selected
    );

}


/* =====================================
   SELECT POPULATION
===================================== */

function populateSelect(
    id,
    options,
    currentValue
){

    const select =
        document.getElementById(
            id
        );

    select.innerHTML = '';

    const first =
        document.createElement(
            'option'
        );

    first.value = '';

    first.textContent =
        'Todos';

    select.appendChild(
        first
    );

    options.forEach(option=>{

        const item =
            document.createElement(
                'option'
            );

        item.value =
            option;

        item.textContent =
            option;

        if(
            option === currentValue
        ){
            item.selected = true;
        }

        select.appendChild(
            item
        );

    });

}
