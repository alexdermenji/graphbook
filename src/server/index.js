import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import compress from 'compression';

const root = path.join(__dirname, '../../');
const app = express();

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', '*.amazonaws.com'],
    },
  })
);
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
app.use(compress());
app.use(cors());

app.use('/', express.static(path.join(root, 'dist/client')));
app.use('/uploads', express.static(path.join(root, 'uploads')));

app.get('/', (req, res) => {
  console.log(req);
  console.log(req.url);
  res.sendFile(path.join(root, 'dist/client/index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.log('There is a problem', err);
  }
  console.log('Listening on port 3000');
});
