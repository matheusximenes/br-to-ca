import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this Author.'],
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

export default mongoose.models.authors ||
  mongoose.model('authors', AuthorSchema)
