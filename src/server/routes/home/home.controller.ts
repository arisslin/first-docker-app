import { Response, Request } from 'express';

export function getHome(request: Request, response: Response): void {
  response.type('text/html');
  response.status(200);
  response.send('Hello World');
}
