import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.json());

import Fikir from './models/Fikir';
import Admin from './models/Admin';

mongoose.connect(
  'mongodb://localhost:27017/fikirIlet',
  {useNewUrlParser: true},
  (err) => {
    if (err) throw err;
    console.log('Başarılı mongoose bağlantısı');
  }
);

/* app.get('/adminolustur', (req, res) => {
  Admin.create(
    {
      username: 'ahmet',
      password: '123',
    },
    (err) => {
      if (err) res.sendStatus(400);
      res.sendStatus(200);
    }
  );
}); */

app.get('/fikirler', (req, res) => {
  Fikir.find().then((docs) => res.send(docs));
});

app.post('/giris', (req, res) => {
  const {username, password} = req.body;
  Admin.find({username}).then((doc) => {
    if (doc[0].password == password) {
      res.send('basarili');
    }
  });
});

app.post('/fikirkaydet', (req, res) => {
  const {tamIsim, emailAdres, fikirTuru, fikir} = req.body;
  Fikir.create(
    {
      gonderenIsim: tamIsim,
      emailAdres,
      fikirTuru,
      fikir,
    },
    (err) => {
      if (err) res.sendStatus(400);
      res.sendStatus(200);
    }
  );
});

app.listen(5555);
