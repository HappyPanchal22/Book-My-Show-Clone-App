import { useState } from 'react'
//Routers
import {Routes, Route} from "react-router-dom";
import './App.css'
//React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.page';
import PlaysPage from './pages/Plays.page';

function App() {
  return (
      /*<div>Hello Welcome to my world.</div>*/
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/movie/:id" element={<MoviePage/>}/>
        <Route path = "/plays" element={<PlaysPage/>}/>
      </Routes>
      
  )
}

export default App
