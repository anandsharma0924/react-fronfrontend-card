import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router'
const Update = () => {
    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');
    const [low, setLow] = useState('');
    let state = {
        title,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        images,
    }
    console.log(id, 'id')
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            // console.log(data,'data')
            // console.log(state,'state')
            setTitle(data.title)
            setPrice(data.price)
            setDiscountPercentage(data.discountPercentage)
            setRating(data.rating)
            setStock(data.stock)
            setBrand(data.title)
            setCategory(data.category)
            setImages(data.images)
            // console.log(data,'ffffffffffffff')
        }
        fetchProducts()
    }, [])
    const handalSubmit = (e) => {
        e.preventDefault()
        axios.put(`https://dummyjson.com/products/${id}`, state).then((res) => {
            //  setItem(res.data.data)
            console.log('----res--------->', res)
        }, [])
            .catch(error => error);
    }
    return (
        <React.Fragment>
            <form onSubmit={handalSubmit}>
                <h1 className='header'>Update Card</h1><br />
                <div>
                    <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem' }}>Title:</label>
                    <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor=",price" style={{ display: 'block', marginBottom: '0.5rem' }}>,price:</label>
                    <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="discountPercentage" style={{ display: 'block', marginBottom: '0.5rem' }}>discountPercentage:</label>
                    <input type="number" id="discountPercentage" value={discountPercentage} onChange={e => setDiscountPercentage(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="rating" style={{ display: 'block', marginBottom: '0.5rem' }}>rating:</label>
                    <input type="number" id="rating" value={rating} onChange={e => setRating(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="stock" style={{ display: 'block', marginBottom: '0.5rem' }}>stock:</label>
                    <input type="number" id="stock" value={stock} onChange={e => setStock(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="brand" style={{ display: 'block', marginBottom: '0.5rem' }}>brand:</label>
                    <input type="text" id="brand" value={brand} onChange={e => setBrand(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="bcategoryrand" style={{ display: 'block', marginBottom: '0.5rem' }}>category:</label>
                    <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label for="exampleInputPassword1">image Uplode</label>
                    <input type="file" onChange={(e) => { setImages(e.target.files) }} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} /><br /><br />
                </div><br />
                <button className='btn' typeof='submit'>Update</button>
            </form>
        </React.Fragment>
    )
}
export default Update ;
