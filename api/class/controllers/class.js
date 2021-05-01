const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async update(ctx) {
        const { id } = ctx.params;

        let entity;
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.class.update({ id }, {
                $set: { "lecturers": req.body._id }
            });
            console.log(entity)
        } else {
            entity = await strapi.services.class.update({ id }, ctx.request.body);
        }

        return sanitizeEntity(entity, { model: strapi.models.class });
    },
};
