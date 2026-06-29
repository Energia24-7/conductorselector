import { products } from '../data/products.js';

export function filterProducts(filters) {

    const features =
        Array.isArray(filters.features)
            ? filters.features
            : [];

    return products
        .map(product => {

            let score = 0;

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

            const specialFeatures =
                Array.isArray(product.specialFeatures)
                    ? product.specialFeatures
                    : [];

            if (
                filters.application &&
                application.includes(filters.application)
            ) {
                score += 40;
            }

            if (
                filters.subApplication &&
                subApplication.includes(filters.subApplication)
            ) {
                score += 25;
            }

            if (
                filters.voltage &&
                product.voltageClass === filters.voltage
            ) {
                score += 20;
            }

            if (
                filters.installation &&
                installation.includes(filters.installation)
            ) {
                score += 15;
            }

            if (
                filters.environment &&
                environment.includes(filters.environment)
            ) {
                score += 10;
            }

            features.forEach(feature => {

                if (
                    specialFeatures.includes(feature)
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
