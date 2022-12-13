import express, { Request, Response } from 'express';

const app: express.Application = express();

const port = 4004;

app.get('/healthcheck', (req: Request, res: Response) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
