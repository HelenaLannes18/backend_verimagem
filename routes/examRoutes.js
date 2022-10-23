import express from 'express';
import Exam from '../models/examModel.js';

const examRouter = express.Router();

examRouter.get('/', async (req, res) => {
  const exams = await Exam.find();
  res.send(exams);
});

examRouter.get('/slug/:slug', async (req, res) => {
  const exam = await Exam.findOne((x) => x.slug === req.params.slug);
  if (exam) {
    res.send(exam);
  } else {
    res.status(404).send({ message: 'exam Not Found' });
  }
});
examRouter.get('/:id', async (req, res) => {
  const exam = await Exam.findById(req.params.id);
  if (exam) {
    res.send(exam);
  } else {
    res.status(404).send({ message: 'exam Not Found' });
  }
});

export default examRouter;
