import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import BlogEditor from './components/BlogEditor';
import BlogList from './components/BlogList';
import './App.css';
enum Page {
  Create = 'Create',
  View = 'View',
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Create);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header className='header-class'>
        <button className='button-class' onClick={() => handlePageChange(Page.Create)}>Create Blogs</button>
        <button className='button-class' onClick={() => handlePageChange(Page.View)}>View Blogs</button>
      </header>
      {currentPage === Page.Create ? <BlogEditor /> : <BlogList />}
    </div>
  );
};

export default App;
