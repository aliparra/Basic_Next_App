import { createContext } from "react";

export const movieContext = createContext();

const MovieWrapper = ({ children }) => {
  const initialState = {
    movies: [],
    movie: {},
  };

  return (
    <movieContext.Provider
      value={{
        movies: initialState.movies,
        movie: initialState.movie,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default MovieWrapper;
