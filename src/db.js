import { connect } from 'mongoose';

export const connectDB = async () => {
    try {
        const connection = await connect('mongodb://docker-mongo:27017/test')
        console.log('DB Connected successfully')
        return connection;
    } catch(error) {
        console.error(error);
    }
}
