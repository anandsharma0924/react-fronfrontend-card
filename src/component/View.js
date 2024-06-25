import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
const View = () => {
  const { id } = useParams()
  const [item, setItem] = useState([])
  // console.log(id)
  async function data() {
    await axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res.data, 'data')
        setItem(res.data)
      }, [])
      .catch(error => console.log(`Error : ${error}`));
  }
  useEffect(() => {
    data()
  }, [])
  return (
    <React.Fragment>
      <div className='card' key={item.id}>
        {item?.images?.length && item?.images?.map((e) => { return (<img src={e} alt='' />) })}
        <p> title:- {item.description}</p>
        <p> title:- {item.title}</p>
        <p> brand:- {item.brand}</p>
        <p>price:- {item.price}</p>
        <p>rating:- {item.rating}</p>
        <p>stock: {item.stock}</p>
      </div>
    </React.Fragment>
  )
}
export default View
