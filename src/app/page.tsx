import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import { IPost } from '../app/types/Post'
import { urlFor } from '@/sanity/lib/image'

async function getPosts(): Promise<IPost[]> {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    summary,
    image {
      asset-> {
        _ref,
        url
      }
    },
    content,
    author-> {
      _id,
      name,
      bio,
      image {
        asset-> {
          _ref,
          url
        }
      }
    },
    _createdAt
  }`

  return client.fetch(query)
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link 
            href={`/blog/${post.slug.current}`} 
            key={post._id}
            className="group"
          >
            <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {urlFor(post.image).url() && (
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={urlFor(post.image).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-gray-800 ">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.summary}
                </p>
                <div className="flex items-center">
                  
                    <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src={urlFor(post.author.image).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  
                  <div>
                    <p className="text-sm font-medium">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
