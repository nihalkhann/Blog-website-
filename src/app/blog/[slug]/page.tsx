import { client } from '@/sanity/lib/client'
import { IPost } from '../../types/Post'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { CornerDownLeft } from 'lucide-react';

// Add this type for params
type Props = {
  params: {
    slug: string
  }
}

async function getPost(slug: string): Promise<IPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
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

  return client.fetch(query, { slug })
}

export async function generateStaticParams() {
  const query = `*[_type == "post"] {
    slug {
      current
    }
  }`
  const posts = await client.fetch<{ slug: { current: string } }[]>(query)
  
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPost({ params }: Props) {
  // Properly await the params.slug
  const { slug } = params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-md md:text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-8">
        {urlFor(post.image).url() && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={urlFor(post.author.image).url()}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-medium">{post.author.name}</p>
          <p className="text-gray-500">
            {new Date(post._createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
      {urlFor(post.author.image).url() && (
        <div className="relative w-full mb-8 aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6] xl:aspect-[16/5] overflow-hidden">
  <Image
    src={urlFor(post.image).url()}
    alt={post.title}
    fill
    className="object-cover rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
    sizes="(max-width: 640px) 90vw,
           (max-width: 768px) 80vw,
           (max-width: 1024px) 70vw,
           (max-width: 1280px) 60vw,
           50vw"
    priority
  />
</div>
      )}
      <div className="prose max-w-none">
        <PortableText value={post.content} />
      <h2>{post.summary}</h2>
        <Link href={"/"}>
          <button className='text-gray-800  hover:text-gray-600   font-bold md:ml-[600px]'
          >
            <CornerDownLeft className='ml-56 mt-5'/>
        </button>
        </Link>
      </div>
    </article>
  )
}
