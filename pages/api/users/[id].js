// api/users.js

import dbConnect from '../../../lib/dbConnection'
import Author from '../../../models/Authors'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req
  const { name, email, imageUrl } = req.body

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await Author.find({ sid: id })
        console.log('there')
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      console.log('there')
      try {
        const createdAuthor = new AuthorModel({
          name: name,
          email: email,
          imageUrl: imageUrl,
        })
        const user = await createdAuthor.save()
        console.log('there')
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
