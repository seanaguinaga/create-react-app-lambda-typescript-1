import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}

const handler: Handler = (
  event: APIGatewayEvent,
  _context: Context,
  callback: Callback
) => {
  const params = event.queryStringParameters;
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello world ${Math.floor(Math.random() * 10)}`,
      params,
    }),
  };

  callback(undefined, response);
};

export { handler };
