import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../prisma";

export default async function getPosts(author,req:NextApiRequest,res:NextApiResponse) {
    const posts = await prisma.post.findMany({
        where:{
            authorId:author.id
        },
        select: {
            id: true,
            count:true,
            authorId:true,
            postData: false,
            title: true,
            tags: true,
            excerpt: false,
            status:true,
            createdAt: true,
          },
          orderBy: { createdAt: "desc" }}
    ) 
  return res.status(200).json(posts);
}
