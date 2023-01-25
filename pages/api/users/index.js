import dbConnect from '../../../lib/dbConnection'
import authors from '../../../models/Authors'

export default async function handler(req, res) {
  const {
    method,
    body: { name, sid, picture, email },
  } = req
  await dbConnect()

  if (method === 'POST' && name && sid && picture && email) {
    const user = await authors.findOne({ sid: sid })
    if (user) {
      return res.status(200).json(user)
    } else {
      const newUser = await authors.create({
        sid: sid,
        email: email,
        picture: picture,
        name: name,
      })
      return res.json(newUser)
    }
  } else {
    return res.status(422).json({ message: 'Missing Data' })
  }
}
