import {React,useState,useEffect} from 'react'

function Form({movieSearch}) {

    const[formData,setFormData]=useState({
        searchTerm:""
    });

    const handleChange = (event)=>{
        setFormData({
            ...formData,
           [ event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event)=>{
event.preventDefault();
movieSearch(formData.searchTerm)
    }
    
  return (
   <>
<form onSubmit={handleSubmit}>
<input type="text" className="searchbar" onChange={handleChange} name ="searchTerm" value={formData.searchTerm} />
<input type="submit" value="submit" className="sunmitBtn" />
</form>


   </>
  )
}

export default Form