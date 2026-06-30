import { products }
from '../data/products.js';

export const selected = {

    application:"",
    subApplication:"",
    voltage:"",
    installation:"",
    environment:""

};


/* ===================================
   FILTRO GENERAL
=================================== */

export function getFilteredProducts(){

    return products.filter(product=>{

        if(
            selected.application &&
            !(product.application||[])
            .includes(
                selected.application
            )
        ){
            return false;
        }

        if(
            selected.subApplication &&
            !(product.subApplication||[])
            .includes(
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
            !(product.installation||[])
            .includes(
                selected.installation
            )
        ){
            return false;
        }

        if(
            selected.environment &&
            !(product.environment||[])
            .includes(
                selected.environment
            )
        ){
            return false;
        }

        return true;

    });

}


/* ===================================
   FILTROS PROGRESIVOS
=================================== */

function getProductsForLevel(level){

    return products.filter(product=>{

        if(
            selected.application &&
            level !== "application" &&
            !(product.application||[])
            .includes(
                selected.application
            )
        ){
            return false;
        }

        if(
            selected.subApplication &&
            (
                level==="voltage" ||
                level==="installation" ||
                level==="environment"
            ) &&
            !(product.subApplication||[])
            .includes(
                selected.subApplication
            )
        ){
            return false;
        }

        if(
            selected.voltage &&
            (
                level==="installation" ||
                level==="environment"
            ) &&
            product.voltageClass !==
            selected.voltage
        ){
            return false;
        }

        if(
            selected.installation &&
            level==="environment" &&
            !(product.installation||[])
            .includes(
                selected.installation
            )
        ){
            return false;
        }

        return true;

    });

}


/* ===================================
   OPCIONES DINÁMICAS
=================================== */

export function getOptions(field){

    let productsForLevel=[];

    switch(field){

        case "subApplication":

            productsForLevel =
                getProductsForLevel(
                    "subApplication"
                );

            break;

        case "voltage":

            productsForLevel =
                getProductsForLevel(
                    "voltage"
                );

            break;

        case "installation":

            productsForLevel =
                getProductsForLevel(
                    "installation"
                );

            break;

        case "environment":

            productsForLevel =
                getProductsForLevel(
                    "environment"
                );

            break;

        default:

            productsForLevel =
                products;

    }

    const values =
        new Set();

    productsForLevel.forEach(product=>{

        if(
            field==="subApplication"
        ){

            (
                product.subApplication||[]
            ).forEach(
                value=>
                values.add(value)
            );

        }

        if(
            field==="voltage"
        ){

            values.add(
                product.voltageClass
            );

        }

        if(
            field==="installation"
        ){

            (
                product.installation||[]
            ).forEach(
                value=>
                values.add(value)
            );

        }

        if(
            field==="environment"
        ){

            (
                product.environment||[]
            ).forEach(
                value=>
                values.add(value)
            );

        }

    });

    return [...values]
        .filter(Boolean)
        .sort();

}


/* ===================================
   RESET
=================================== */

export function resetSelection(){

    selected.application="";

    selected.subApplication="";

    selected.voltage="";

    selected.installation="";

    selected.environment="";

}
