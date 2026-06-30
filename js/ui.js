const compareList = [];

export function renderProducts(products){

    const results =
        document.getElementById(
            'results'
        );

    results.innerHTML = '';

    if(products.length === 0){

        results.innerHTML = `

        <div class="empty-results">

            <h2>
                No existen coincidencias
            </h2>

            <p>
                Modifique los filtros para ampliar
                la búsqueda.
            </p>

        </div>

        `;

        return;
    }

    products.forEach(product=>{

        const features =
            (product.specialFeatures || [])
            .map(feature=>`

                <span class="feature-tag">
                    ${feature}
                </span>

            `)
            .join('');

        results.innerHTML += `

        <div class="product-card">

            <div class="product-header">

                <h3>
                    ${product.name}
                </h3>

                <small>
                    ${product.application.join(', ')}
                </small>

            </div>

            <div class="product-body">

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
                    <strong>Temperatura:</strong>
                    ${product.temperatureClass}
                </p>

                <p>
                    <strong>Instalación:</strong>
                    ${(product.installation || []).join(', ')}
                </p>

                <p>
                    <strong>Ambiente:</strong>
                    ${(product.environment || []).join(', ')}
                </p>

                <div class="product-features">

                    ${features}

                </div>

                <div class="product-actions">

                    <a
                    href="${product.datasheet}"
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

    const checks =
        document.querySelectorAll(
            '.compare-product'
        );

    checks.forEach(check=>{

        check.addEventListener(
            'change',
            event=>{

                const id =
                    event.target.value;

                const product =
                    products.find(
                        p=>p.id===id
                    );

                if(
                    event.target.checked
                ){

                    if(
                        !compareList.find(
                            p=>p.id===id
                        )
                    ){

                        compareList.push(
                            product
                        );

                    }

                }else{

                    const index =
                        compareList.findIndex(
                            p=>p.id===id
                        );

                    if(index>-1){

                        compareList.splice(
                            index,
                            1
                        );

                    }

                }

            }
        );

    });

}

export function setupCompareButton(){

    const button =
        document.getElementById(
            'compareBtn'
        );

    button.addEventListener(
        'click',
        renderComparison
    );

}

function renderComparison(){

    const container =
        document.getElementById(
            'comparisonTable'
        );

    if(compareList.length < 2){

        container.innerHTML = `

        <p>

            Seleccione al menos
            dos productos.

        </p>

        `;

        return;
    }

    let html = `

    <table>

        <thead>

            <tr>

                <th>
                    Característica
                </th>

    `;

    compareList.forEach(product=>{

        html += `

        <th>

            ${product.name}

        </th>

        `;

    });

    html += `

            </tr>

        </thead>

        <tbody>

    `;

    const fields = [

        {
            label:'Aplicación',
            key:'application'
        },

        {
            label:'Voltaje',
            key:'voltageClass'
        },

        {
            label:'Conductor',
            key:'conductor'
        },

        {
            label:'Aislamiento',
            key:'insulation'
        },

        {
            label:'Temperatura',
            key:'temperatureClass'
        },

        {
            label:'Instalación',
            key:'installation'
        },

        {
            label:'Ambiente',
            key:'environment'
        }

    ];

    fields.forEach(field=>{

        html += `

        <tr>

            <td>

                ${field.label}

            </td>

        `;

        compareList.forEach(product=>{

            let value =
                product[field.key];

            if(
                Array.isArray(
                    value
                )
            ){

                value =
                    value.join(', ');

            }

            html += `

            <td>

                ${value || '-'}

            </td>

            `;

        });

        html += `

        </tr>

        `;

    });

    html += `

        </tbody>

    </table>

    `;

    container.innerHTML = html;

}

export function updateSummary(filters){

    const summary =
        document.getElementById(
            'selectionText'
        );

    summary.innerHTML = `

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
