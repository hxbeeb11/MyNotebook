import React from 'react';
import Editor from './Editor/Editor';
import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <h1>My Notebook</h1>
      </header>
      <main className='main'>
        <Editor />
      </main>
    </div>
  );
}

export default App;

