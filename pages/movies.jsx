import styles from '../styles/Movies.module.css'
import MovieList from '../components/MovieList'

function Movies() {
    return(
        <div >
            <h1 className={styles.title}>Movies</h1>
            <MovieList/>
        </div>
        
    ) 
  }
  
  export default Movies