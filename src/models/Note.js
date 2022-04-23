import { Schema, model } from 'mongoose';

const noteSchema = new Schema({
      title: {
            type: String,
            required: true
      },
      description: {
            type: String
      },
      start_date: {
            type: Number
      },
      end_date: {
            type: Number
      }
}, {
      timestamps: true
});

export default model('Notes', noteSchema);
