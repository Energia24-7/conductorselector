import { products }
from '../data/products.js';


export const selected = {

    application: "",
    subApplication: "",
    voltage: "",
    installation: "",
    environment: ""

};


/* =====================================
   FILTRADO PRINCIPAL
===================================== */

export function getFilteredProducts() {

    return products.filter(product => {

        if (
            selected.application &&
            !(product.application || [])
                .includes(selected.application)
        ) {
            return false;
        }

        if (
            selected.subApplication &&
            !(product.subApplication || [])
                .includes(selected.subApplication)
        ) {
            return false;
        }

        if (
            selected.voltage &&
            product.voltageClass !==
            selected.voltage
        ) {
            return false;
        }

        if (
            selected.installation &&
            !(product.installation || [])
                .includes(selected.installation)
        ) {
            return false;
        }

        if (
            selected.environment &&
            !(product.environment || [])
                .includes(selected.environment)
        ) {
            return false;
        }

        return true;

    });

}


/* =====================================
   OPCIONES DINÁMICAS
===================================== */

export function getOptions(field) {

    const filtered =
        getFilteredProducts();

    const values =
        new Set();

    filtered.forEach(product => {

        switch (field) {

            case "subApplication":

                (product.subApplication || [])
                    .forEach(value =>
                        values.add(value)
                    );

                break;

            case "voltage":

                if (
                    product.voltageClass
                ) {

                    values.add(
                        product.voltageClass
                    );

                }

                break;

            case "installation":

                (product.installation || [])
                    .forEach(value =>
                        values.add(value)
                    );

                break;

            case "environment":

                (product.environment || [])
                    .forEach(value =>
                        values.add(value)
                    );

                break;

        }

    });

    return [...values]
        .sort();

}


/* =====================================
   RESET
===================================== */

export function resetSelection() {

    selected.application = "";

    selected.subApplication = "";

    selected.voltage = "";

    selected.installation = "";

    selected.environment = "";

}
