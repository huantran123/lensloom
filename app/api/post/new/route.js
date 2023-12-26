import { connectToDB } from '@utils/database'
import { Post } from '@models/post'

export const POST = async (req) => {
  const { userId, description, tags } = await req.json()

  try {
    await connectToDB()
  } catch (err) {
    return new Response('Failed to create a new post', { status: 500 })
  }
}