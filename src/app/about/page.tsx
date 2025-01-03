// pages/about.tsx
import Head from 'next/head';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About | MyBlog</title>
        <meta name="description" content="Learn more about MyBlog and its creator" />
      </Head>

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About MyBlog</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to MyBlog!</h2>
          <p className="text-gray-700 mb-4">
            MyBlog is a platform where I share my thoughts, experiences, and stories on various topics including technology, lifestyle, and personal growth. As a writer and avid reader, I am passionate about creating engaging and informative content that will inspire and motivate my readers.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you’re here to read my latest posts or learn more about my journey, I hope you find something valuable that resonates with you. My aim is to create a community of like-minded individuals who appreciate insightful articles and engaging discussions.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">About the Author</h3>
          <p className="text-gray-700 mb-4">
            Hello! I’m Nihal Khan Ghouri, the creator and writer behind MyBlog. I’ve been passionate about writing for over 10 years, and this blog is my way of sharing my thoughts with the world. I hope to continue growing this platform and connecting with people who share similar interests. When I’m not writing, I enjoy traveling, reading, and learning new skills.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            The mission of MyBlog is to provide meaningful and thought-provoking content that educates and entertains. Our goal is to inspire our readers to think critically, embrace creativity, and live their best lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
