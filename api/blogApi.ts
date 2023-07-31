import axios from 'axios';

const baseURL = 'https://stone-workable-kale.glitch.me/database'; // Replace with your Glitch project's live URL

export const createBlog = async (content: string): Promise<void> => {
  try {
    await axios.post(`${baseURL}/blogs`, { content });
  } catch (error) {
    throw new Error('Failed to create blog');
  }
};

export const getBlogs = async (): Promise<any[]> => {
  try {
    const response = await axios.get(`${baseURL}/blogs`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch blogs');
  }
};
