import React from 'react';

const BlogList: React.FC = () => {
  // Retrieve blogs from local storage
  const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');

  return (
    <div>
      <h2>View Blogs</h2>
      {blogs.map((blog: { id: number; content: string }) => (
        <div key={blog.id}>
          <strong>Blog ID: {blog.id}</strong>
          <p dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
