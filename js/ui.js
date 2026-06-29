export function renderProducts(products){

    const results =
        document.getElementById(
            'results'
        );

    results.innerHTML = '';

    if(
        !products ||
        products.length === 0
    ){

        results.innerHTML =
            '<h2>No existen coincidencias</h2>';

        return;

    }

    products.forEach(product=>{

        const installations =
            Array.isArray(
                product.installation
            )
            ? product.installation.join(', ')
            : '-';

        const environments =
            Array.isArray(
                product.environment
            )
            ? product.environment.join(', ')
            : '-';

        results.innerHTML += `

        <div class="product-card">

            <h2>${product.name || ''}</h2>

            <p>${product.description || ''}</p>

            <p>
                <strong>Voltaje:</strong>
                ${product.voltageClass || '-'}
            </p>

            <p>
                <strong>Conductor:</strong>
                ${product.conductor || '-'}
            </p>

            <p>
                <strong>Aislamiento:</strong>
                ${product.insulation || '-'}
            </p>

            <p>
                <strong>Instalación:</strong>
                ${installations}
            </p>

            <p>
                <strong>Ambiente:</strong>
                ${environments}
            </p>

        </div>

        `;

    });

}
