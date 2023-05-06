import { useState } from 'react';
import './App.css';
import DataTable from './Components/DataTable';
import Users from './Components/Users';

function App() {

  return (
    <div className="App">
      {
      // <DataTable/>
      <Users/>
      }
    </div>
  );
}

export default App;
