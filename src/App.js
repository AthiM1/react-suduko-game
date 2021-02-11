
import React from 'react';
import './App.css';
import Grid from './grid';

function App() {
  return (
    <div className="App">
      <header>
        <h2>SUDOKU</h2>
      </header>
      <main>
        <Grid></Grid>
        <div className='navbar-light p-3 mt-4'>
          Source code on <a href='https://github.com'>GitHub</a>
        </div>
      </main>
    </div>
  );
}

export default App;