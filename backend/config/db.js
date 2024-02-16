const mognoose = require('mongoose');

const connectDB = async () => {
    try {
        await mognoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error: Connecting to MongoDB');
    }
}
module.exports = connectDB;