import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello world from express - Home');
});

router.get('/about', (req, res) => {
  res.send('Hello world from express - About');
});

router.get('/contact', (req, res) => {
  res.send('Hello world from express - Contact');
});

export default router;
