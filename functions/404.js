exports.handler = async (event, context) => {
  return {
    statusCode: 404,
    body: JSON.stringify({
      message: "Not Found",
      path: event.path
    })
  };
}; 