
// import MoviesPage from 'pages/MoviesPage';
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './../Layout';
// import HomePage from 'pages/HomePage';
// import MovieDetailsPage from 'pages/MoviesPage/MovieDetailsPage';
// import ReviewsPage from 'pages/MoviesPage/MovieDetailsPage/ReviewsPage';
// import CastPage from 'pages/MoviesPage/MovieDetailsPage/CastPage';


const HomePage = lazy(() => import('../pages/HomePage/index'))
const MoviesPage = lazy(() => import('../pages/MoviesPage/index'))
const ReviewsPage = lazy(() => import('../pages/MoviesPage/MovieDetailsPage/ReviewsPage'))
const CastPage = lazy(() => import('../pages/MoviesPage/MovieDetailsPage/CastPage'))
const MovieDetailsPage = lazy(() => import('../pages/MoviesPage/MovieDetailsPage/index'))


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
      <Suspense fallback={<p>loading...</p>}>
<Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />}/>
            <Route path='movies/:movieId' element={<MovieDetailsPage />}>
                <Route path='reviews' element={<ReviewsPage />} />
                <Route path='cast' element={<CastPage/> } />
            </Route>
           
        </Route>
        
      </Routes>
      </Suspense>
      
    </div>
  );
};

export default App
