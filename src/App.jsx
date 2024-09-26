import { useEffect, useState } from 'react'
import './App.css'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'

function App() {

//  const apiKey="881215b7"
//  const [apiKey,setApiKey] = useState('881215b7');
const API_KEY= import.meta.env.VITE_API_KEY
const [movie,setMovie]= useState(null)

const getMovie = async(searchTerm)=>{
  try{
const response = await fetch( `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`)

const data = await response.json();
console.log(data)
setMovie(data)
  }catch(error){
    console.log(error);
    
  }

}




useEffect(()=>{
  getMovie("Godzilla");
},[])


  return (
    <>
    <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </>
  )
}

export default App
