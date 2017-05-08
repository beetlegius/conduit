import { User } from './user'
import { Comment } from './comment'
import { Tag } from './tag'

export class Article {
  id: number
  slug: string
  created_at: string
  updated_at: string
  title: string
  content: string
  favorites_count: number
  comments_count: number
  user: User
  favorite_users: User[]
  comments: Comment[]
  tags: Tag[]
}
