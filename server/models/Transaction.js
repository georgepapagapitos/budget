import mongoose from 'mongoose';

const TransactionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: String,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

TransactionSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export const Transaction = mongoose.model('Transaction', TransactionSchema);
