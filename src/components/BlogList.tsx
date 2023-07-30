import React, { useEffect, useState } from 'react';
import { getBlogs } from './../../api/blogApi';

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Array<any>>([]); // Specify the type as Array<any>

  useEffect(() => {
    // Fetch blogs from the backend API when the component mounts
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      // Call the API function to fetch blogs
      const blogsData = await getBlogs();
      setBlogs(blogsData);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch blogs. Please try again.');
    }
  };

  return (
    <div>
      <h2>View Blogs</h2>
      {blogs.map((blog: { id: number; content: string }) => (
        <div key={blog.id}>
          <strong>Blog ID: {blog.id}</strong>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
