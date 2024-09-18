import mongoose from 'mongoose';

// mongoose.connect('mongodb+srv://SalvadorDelaT:G3rard0@modulo2.zxhef.mongodb.net/?retryWrites=true&w=majority&appName=Modulo2');
mongoose.connect('mongodb+srv://SalvadorDelaT:G3rard0@modulo2.zxhef.mongodb.net/entrega2?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error!!! :'));
db.once('open', () => {
    console.log('Connectado a MongoDB');
});

export default db;