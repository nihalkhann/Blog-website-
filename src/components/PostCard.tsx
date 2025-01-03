import { IPost } from '../app/types/Post'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/sanity/lib/utils'
import { urlFor } from '@/sanity/lib/image'

export function PostCard({ post }: { post: IPost }) {
  return (
    <article className="rounded-lg overflow-hidden shadow-lg bg-white">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative h-48 w-full">
          {post.image && (
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          {/* <p className="text-gray-600 mb-4">{post.summary}</p> */}
          <div className="flex items-center">
            {urlFor(post.image).url()} && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">
                {formatDate(post._createdAt)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}