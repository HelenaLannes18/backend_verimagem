import mongoose from 'mongoose';

const planoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Plano = mongoose.models.Plano || mongoose.model('Plano', planoSchema);
export default Plano;
