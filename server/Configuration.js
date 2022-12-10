import dotenv from 'dotenv';
dotenv.config();

const Configuration = {
    port: process.env.port || 3000,
    MONGO_USER_NAME: process.env.MONGO_USER_NAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_CLUSTER: process.env.MONGO_CLUSTER,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME
}

export default Configuration;