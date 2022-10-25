import express from 'express';
import Plano from '../models/planoModel.js';
import expressAsyncHandler from 'express-async-handler';
import { isAuth, isAdmin } from '../utils.js';

const planoRouter = express.Router();

planoRouter.get('/', async (req, res) => {
  const planos = await Plano.find();
  res.send(planos);
});

planoRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newPlano = new Plano({
      name: 'nome plano',
      image: '/bralogo.png',
    });
    const plano = await newPlano.save();
    res.send({ message: 'Plano Created', plano });
  })
);

planoRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const planoId = req.params.id;
    const plano = await Plano.findById(planoId);
    if (plano) {
      plano.name = req.body.name;
      plano.featuredImage = req.body.featuredImage;
      plano.isFeatured = req.body.isFeatured;
      plano.image = req.body.image;
      await plano.save();
      res.send({ message: 'Plano Updated' });
    } else {
      res.status(404).send({ message: 'Plano Not Found' });
    }
  })
);

planoRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const plano = await Plano.findById(req.params.id);
    if (plano) {
      await plano.remove();
      res.send({ message: 'Plano Deleted' });
    } else {
      res.status(404).send({ message: 'Plano Not Found' });
    }
  })
);

planoRouter.get('/:id', async (req, res) => {
  const plano = await Plano.findById(req.params.id);
  if (plano) {
    res.send(plano);
  } else {
    res.status(404).send({ message: 'Plano Not Found' });
  }
});

export default planoRouter;
