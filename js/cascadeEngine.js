import { products }
from '../data/products.js';

export const selected = {

    application:"",
    subApplication:"",
    voltage:"",
    installation:"",
    environment:""

};

export function getFilteredProducts(){

    console.log(
        "Seleccion actual:",
        selected
    );

    return products.filter(product=>{

        const application =
            Array.isArray(product.application)
                ? product.application
                : [];

        const subApplication =
            Array.isArray(product.subApplication)
                ? product.subApplication
                : [];

        const installation =
            Array.isArray(product.installation)
                ? product.installation
                : [];

        const environment =
            Array.isArray(product.environment)
                ? product.environment
                : [];

        if(
            selected.application &&
            !application.includes(
                selected.application
            )
        ){
            return false;
        }

        if(
            selected.subApplication &&
            !subApplication.includes(
                selected.subApplication
            )
        ){
            return false;
        }

        if(
            selected.voltage &&
            product.voltageClass !==
            selected.voltage
        ){
            return false;
        }

        if(
            selected.installation &&
            !installation.includes(
                selected.installation
            )
        ){
            return false;
        }

        if(
            selected.environment &&
            !environment.includes(
                selected.environment
            )
        ){
            return false;
        }

        return true;

    });

}

export function getOptions(field){

    const productsFiltered =
        getFilteredProducts();

    const values =
        new Set();

    productsFiltered.forEach(p=>{

        if(field === "subApplication"){

            (p.subApplication || [])
                .forEach(v=>values.add(v));

        }

        if(field === "voltage"){

            if(p.voltageClass){

                values.add(
                    p.voltageClass
                );

            }

        }

        if(field === "installation"){

            (p.installation || [])
                .forEach(v=>values.add(v));

        }

        if(field === "environment"){

            (p.environment || [])
                .forEach(v=>values.add(v));

        }

    });

    return [...values]
        .filter(Boolean)
        .sort();

}
