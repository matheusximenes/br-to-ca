// api/users.js

import dbConnect from '../../../lib/dbConnection'
import authors from '../../../models/Authors'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  if (method === 'GET') {
    try {
      const users = await authors.find()
      res.status(200).json({ success: true, data: users })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  } else {
    res.status(400).json({ success: false })
  }
}
