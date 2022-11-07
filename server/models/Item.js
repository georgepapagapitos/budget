import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema({
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

ItemSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export const Item = mongoose.model('Item', ItemSchema);
