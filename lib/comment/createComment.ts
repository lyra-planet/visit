import type { NextApiRequest, NextApiResponse } from 'next'
import type { Comment } from '../../interfaces'

import getUser from './getCommentUser'
import prisma from '../prisma'
export default async function createComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { replyToId, text } = req.body
  const { authorization } = req.headers

  if (!replyToId || !text || !authorization) {
    return res.status(400).json({ message: 'Missing parameter.' })
  }

  // try {
    // verify user token
    const user = await getUser(authorization)
    if (!user) return res.status(400).json({ message: 'Need authorization.' })

    const { name, picture, sub, email } = user

    const comment: Comment = {
      replyToId,
      text,
      userName: name,
      userPicture: picture,
      userSub: sub,
      userEmail: email,
    }

    // write data
    await prisma.comment.create({
      data:comment
    })
    console.log(user)
    return res.status(200).json(comment)
  // } catch (_) {
  //   return res.status(400).json({ message: 'Unexpected error occurred.' })
  // }
}
