import { products } from "../data/products.js";

export const selected = {

    application: "",
    subApplication: "",
    voltageClass: "",
    installation: "",
    environment: "",
    conductor: "",
    insulation: ""

};

/* =======================================
   FILTRO PRINCIPAL
======================================= */

export function getFilteredProducts() {

    return products.filter(product => {

        if (
            selected.application &&
            !(product.application || []).includes(selected.application)
        ) return false;

        if (
            selected.subApplication &&
            !(product.subApplication || []).includes(selected.subApplication)
        ) return false;

        if (
            selected.voltageClass &&
            product.voltageClass !== selected.voltageClass
        ) return false;

        if (
            selected.installation &&
            !(product.installation || []).includes(selected.installation)
        ) return false;

        if (
            selected.environment &&
            !(product.environment || []).includes(selected.environment)
        ) return false;

        if (
            selected.conductor &&
            product.conductor !== selected.conductor
        ) return false;

        if (
            selected.insulation &&
            product.insulation !== selected.insulation
        ) return false;

        return true;

    });

}

/* =======================================
   OPCIONES DINÁMICAS
======================================= */

export function getOptions(field) {

    const values = new Set();

    getFilteredProducts().forEach(product => {

        switch(field){

            case "subApplication":

                (product.subApplication || [])
                    .forEach(v=>values.add(v));

                break;

            case "voltageClass":

                if(product.voltageClass)
                    values.add(product.voltageClass);

                break;

            case "installation":

                (product.installation || [])
                    .forEach(v=>values.add(v));

                break;

            case "environment":

                (product.environment || [])
                    .forEach(v=>values.add(v));

                break;

            case "conductor":

                if(product.conductor)
                    values.add(product.conductor);

                break;

            case "insulation":

                if(product.insulation)
                    values.add(product.insulation);

                break;

        }

    });

    return [...values].sort();

}

/* =======================================
   RESET
======================================= */

export function resetFilters(){

    selected.application = "";
    selected.subApplication = "";
    selected.voltageClass = "";
    selected.installation = "";
    selected.environment = "";
    selected.conductor = "";
    selected.insulation = "";

}

/* =======================================
   CONTADOR
======================================= */

export function getProductCount(){

    return getFilteredProducts().length;

}

/* =======================================
   PRODUCTOS RECOMENDADOS
======================================= */

export function getRecommendedProducts(limit = 4){

    return getFilteredProducts()
        .sort((a,b)=>{

            const aScore =
                (a.specialFeatures?.length || 0);

            const bScore =
                (b.specialFeatures?.length || 0);

            return bScore-aScore;

        })
        .slice(0,limit);

}
