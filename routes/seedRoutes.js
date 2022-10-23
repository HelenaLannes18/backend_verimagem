import express from 'express';
import Product from '../models/productModel.js';
import Exam from '../models/examModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
import Plano from '../models/planoModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  await Exam.remove({});
  const createdExams = await Exam.insertMany(data.exams);
  await Plano.remove({});
  const createdPlanos = await Plano.insertMany(data.planos);
  res.send({ createdPlanos, createdExams, createdUsers, createdProducts });
});
export default seedRouter;
