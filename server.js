import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser());

app.get('/kullanici', (req, res) => {
    res.send({
        ad: 'Ahmet',
        soyad: 'Cakici'
    });
})

app.post('/fikirkaydet', (req, res) => {
    console.log(req.body)
})

app.listen(5555);