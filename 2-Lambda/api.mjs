// Show that you cannot have stateful functions.
let x = 0;

const incrementX = () => x++;
const getX = () => x;

export const handler = async (event) => {
  if (event.requestContext.http.path != '/increment')
  {
    const response = {
      statusCode: 404,
      body: JSON.stringify("Use /increment"),
    };
    return response;
  }

  if (event.requestContext.http.method == 'POST')
  {
    const response = {
      statusCode: 200,
      body: JSON.stringify({x: incrementX()})
    };
    return response;
  } else if (event.requestContext.http.method == 'GET')
  {
    const response = {
      statusCode: 200,
      body: JSON.stringify({x: getX()})
    };
    return response;
  }

  const response = {
    statusCode: 415,
    body: JSON.stringify("Method not supported."),
  };
  return response;
};
