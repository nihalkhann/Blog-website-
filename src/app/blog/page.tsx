import { client } from '@/sanity/lib/client'
import { allPostsQuery } from '@/sanity/lib/queries'
import { IPost } from '../types/Post'
import { PostCard } from '@/components/PostCard'

async function getPosts(): Promise<IPost[]> {
  return client.fetch(allPostsQuery)
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}