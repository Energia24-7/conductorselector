import { products }
from '../data/products.js';

export function filterProducts(filters) {

    return products
        .map(product => {

            let score = 0;

            const application =
                product.application || [];

            const subApplication =
                product.subApplication || [];

            const installation =
                product.installation || [];

            const environment =
                product.environment || [];

            const specialFeatures =
                product.specialFeatures || [];

            if (
                filters.application &&
                application.includes(
                    filters.application
                )
            ) {
                score += 40;
            }

            if (
                filters.subApplication &&
                subApplication.includes(
                    filters.subApplication
                )
            ) {
                score += 25;
            }

            if (
                filters.voltage &&
                product.voltageClass ===
                filters.voltage
            ) {
                score += 20;
            }

            if (
                filters.installation &&
                installation.includes(
                    filters.installation
                )
            ) {
                score += 15;
            }

            if (
                filters.environment &&
                environment.includes(
                    filters.environment
                )
            ) {
                score += 10;
            }

            filters.features.forEach(feature => {

                if (
                    specialFeatures.includes(
                        feature
                    )
                ) {
                    score += 10;
                }

            });

            return {
                product,
                score
            };

        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);

}
