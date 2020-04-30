import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.json());

import Fikir from './models/Fikir';

mongoose.connect(
    'mongodb://localhost:27017/fikirIlet', { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log('Başarılı mongoose bağlantısı');
    }
);

app.get('/kullanici', (req, res) => {
    res.send({
        ad: 'Ahmet',
        soyad: 'Cakici',
    });
});


app.post('/fikirkaydet', (req, res) => {
    const { tamIsim, emailAdres, fikirTuru, fikir } = req.body;
    Fikir.create({
        gonderenIsim: tamIsim,
        emailAdres,
        fikirTuru,
        fikir
    }, err => {
        if (err) res.sendStatus(400);
        res.sendStatus(200);
    })
});

app.listen(5555);