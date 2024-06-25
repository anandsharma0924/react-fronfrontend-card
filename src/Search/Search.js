import React, { useState } from 'react'
const Search = () => {
    const[search,setSearch]=useState('')
    console.log(search)
    return (
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" onChange={(e) => setSearch(e.target.value)} aria-describedby="basic-addon2" />
  
        </div> 
    )
}
export default Search
