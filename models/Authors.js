import mongoose from 'mongoose'

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  sid: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Author || mongoose.model('authors', AuthorSchema)
