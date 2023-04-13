import express from 'express';
import dotenv from 'dotenv';
import {DBUtil} from "./db/DBUtil";
import cors from 'cors';
import userRouter from "./routers/userRouter"
import cookieParser from 'cookie-parser';

const app: express.Application = express(); // initialize the express js

// configure cors policy
app.use(cors());
app.use(cookieParser());
// configure dot-env
dotenv.config({
    path: "./.env"
})
// configure express to read form data
app.use(express.json());

const port: number | undefined = Number(process.env.PORT) || 9000;
const dbUrl: string | undefined = process.env.EXPRESS_APP_MONGO_DB_CLOUD_URL;
const dbName: string | undefined = process.env.EXPRESS_APP_MONGO_DB_DATABASE_NAME;

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200);
    response.json({
        msg: 'Welcome to Express Server'
    });
})

// Router configuration
 app.use('/users', userRouter);


if (port ) {
    app.listen(port, () => {
        if (dbUrl && dbName) {
            DBUtil.connectToDB(dbUrl, dbName).then((dbResponse) => {
                console.log(dbResponse);
            }).catch((error) => {
                console.error(error);
                process.exit(0); // stops the node js process
            });
        }
        console.log(`Server started at ${port}`);
    })
}