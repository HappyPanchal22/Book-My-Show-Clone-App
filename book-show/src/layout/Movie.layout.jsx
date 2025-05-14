import React from 'react'
import MovieNavbar from "../Components/Navigation bar/MovieNavbar.Component";

const MovieLayoutHoc = (Component) => ({...props}) => {
  return (
    <div>
        <MovieNavbar/>
        <Component {...props}/>
        <div>Footer</div>
    </div>
  )
}

export default MovieLayoutHoc;