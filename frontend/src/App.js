import React from 'react';
import ImageUpload from './components/ImageUpload';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Description Generator</h1>
      </header>
      <main>
        <ImageUpload />
      </main>
      <footer>
        <p>Image Description Generator © 2024</p>
      </footer>
    </div>
  );
}

export default App; 