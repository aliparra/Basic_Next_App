import 'bootstrap/dist/css/bootstrap.min.css';
import { SupNavBar } from '../components/SupNavBar';
import '../styles/globals.css'
import MovieWrapper from '../context/movies/moviesContext';

const MyApp = ({ Component, pageProps }) => {
  return(
  <div className='main__content'> 
    <SupNavBar/>
    <Component {...pageProps} />
    <MovieWrapper/>
  </div>
  )
  
}

export default MyApp
