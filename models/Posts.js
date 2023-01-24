import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  //   createdDate: {
  //   }
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Authors',
    required: true,
  },
  imageURL: {
    type: String,
  },
})

export default mongoose.models.Post || mongoose.model('Posts', PostSchema)
