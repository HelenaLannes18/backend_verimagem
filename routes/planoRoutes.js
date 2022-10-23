import express from 'express';
import Plano from '../models/planoModel.js';

const planoRouter = express.Router();

planoRouter.get('/', async (req, res) => {
  const planos = await Plano.find();
  res.send(planos);
});

planoRouter.get('/:id', async (req, res) => {
  const plano = await Plano.findById(req.params.id);
  if (plano) {
    res.send(plano);
  } else {
    res.status(404).send({ message: 'plano Not Found' });
  }
});

export default planoRouter;
