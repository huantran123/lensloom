import { Schema, model, models } from 'mongoose'

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  description: {
    type: String,
    required: [true, 'Please write something for your post']
  },
  tags: {
    type: [String],
    required: [true, 'Please add at least 1 tag'],
  },
  image: {
    type: String,
    required: [true, 'Please upload your image']
  },
}, { timestamps: true })  // auto generate createdAt and updatedAt field

const Post = models.Post || model('Post', PostSchema)

export default Post