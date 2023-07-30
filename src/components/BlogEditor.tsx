import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';

const BlogEditor: React.FC = () => {
  const [blogContent, setBlogContent] = useState('');

  const handleEditorChange = (content: string) => {
    setBlogContent(content);
  };

  const handleSaveBlog = () => {
    // Retrieve existing blogs from local storage (if any)
    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');

    // Create a new blog object
    const newBlog = {
      id: Date.now(), // Use a unique ID (in this example, timestamp)
      content: blogContent,
    };

    // Add the new blog to the existing blogs array
    const updatedBlogs = [...existingBlogs, newBlog];

    // Save the updated blogs array to local storage
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    alert('Blog saved successfully!');
  };

  return (
    <div>
      <h2>Create Blogs</h2>
      <ReactQuill value={blogContent} onChange={handleEditorChange} />
      <button onClick={handleSaveBlog}>Save Blog</button>
    </div>
  );
};

export default BlogEditor;
