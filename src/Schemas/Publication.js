import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

},
{
  timestamps: true,
  versionKey: false
}
);

export default mongoose.model("Publication", publicationSchema);
