'use client';
import { BrowserRouter as Router,Route,Routes, HashRouter} from 'react-router-dom';
import ShowMovieDetail from '../pages/showMovieDetailPage/ShowMovieDetail';
import ShowFavoritesMovies from '../pages/showFavoriteMoviePage/ShowFavoritesMovies';
import MoviesHome from '../pages/showMovieHomePage/MoviesHome';
import { Provider } from 'react-redux';
import configureStore from './GlobalRedux/stores/ConfigureStore';


export default function Home() {
  const store = configureStore();
  return (
  
    <Provider store={store} >
        <HashRouter>
    <Routes>
     
      <Route path="" element={<MoviesHome />} />
      <Route path="/movie/:id"element={<ShowMovieDetail/>} />
      <Route path="/favorites"element={<ShowFavoritesMovies/>} />
     
    </Routes>

        </HashRouter>
        </Provider>
 
  )
}
