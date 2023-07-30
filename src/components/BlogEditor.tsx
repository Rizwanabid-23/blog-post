import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import { createBlog } from './../../api/blogApi';

const BlogEditor: React.FC = () => {
  const [blogContent, setBlogContent] = useState('');

  const handleEditorChange = (content: string) => {
    setBlogContent(content);
  };

  const handleSaveBlog = async () => {
    try {
      // Call the API function to create a new blog
      await createBlog(blogContent);
      alert('Blog saved successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to save the blog. Please try again.');
    }
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
