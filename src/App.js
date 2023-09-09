import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/:id' Component={ProjectsPage} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
