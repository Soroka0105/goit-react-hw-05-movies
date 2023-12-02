
import MoviesPage from 'pages/MoviesPage';
import { Routes, Route } from 'react-router-dom'
import Layout from './../Layout';
import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<HomePage/> } />
          <Route path='/movies' element={<MoviesPage/> } />
        </Route>
        
      </Routes>
    </div>
  );
};

export default App
