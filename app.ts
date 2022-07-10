import express, { Express, Request, Response } from 'express';
import sequelize from './database/sequelize';;
import bodyParser from 'body-parser'

import films from './api/controllers/FilmController';

const app: Express = express();
const port: number = 3332;

app.use(bodyParser.json());

app.use('/films', films);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World Express + TypeScript")
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

sequelize();