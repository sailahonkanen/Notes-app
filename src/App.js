import React from 'react';
import './App.css';
import { NotesTable } from './components/NotesTable';

const App = () => {
  return (
    <div className='App'>
      <h1>My Notes</h1>
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <NotesTable />
      </div>
    </div>
  );
};

export default App;
