import React from 'react'

function MovieDisplay({movie}) {

    const loaded=()=>{
        return (
          <>
          <div className="title"> {movie.Title}</div>

<div  style={{display:'flex'}} className="flexer">
<div className="poster">
    <img src={movie.Poster} alt="" />
</div>
<div className="info">
    Genre : {movie.Genre}
   <hr />
    Year : {movie.Year}
    <hr />
    Awards : {movie.Awards}
    <hr />
    Description :{movie.Plot}
</div>
</div>
          
          </>
        )
      }
      
      const loading  = ()=>{
        return(
          <>
          <h1>...still loading Movie</h1>
          </>
        )
      }


  return movie? loaded() :loading();
}

export default MovieDisplay