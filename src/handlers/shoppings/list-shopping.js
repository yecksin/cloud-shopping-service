const { getAllShoppings } = require('../../controllers/shoppingsController');
const { getShoppingByid } = require('../../controllers/shoppingsController');
const { headers } = require('../../utils/http-utils');

module.exports.handler = async (event, _context, _callback) => {

    // console.log("[DEBUG - List Shippings]", event);

    const shoppingId = event?.pathParameters?.shoppingId;
    const response = shoppingId ? await getShoppingByid(shoppingId) : await getAllShoppings();

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            error: false,
            body: response
        })
    }

}
