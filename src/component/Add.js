import axios from 'axios';
import React, { useState } from 'react'
const Add = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');
    const [low, setLow] = useState('');
    let man = {
        title,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        images,
    }
    const handalSubmit = (e) => {
        e.preventDefault()
        axios.post('https://dummyjson.com/products/add', man)
            .then((res) => {
                console.log(res, 'res')
            }, [])
            .catch(error => console.log(`Error  : ${error}`));
    }
    return (
        <React.Fragment>
            <form onSubmit={handalSubmit}>
                <h1 className='header'>Add Card</h1><br />
                <div>
                    <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem' }}>Title:</label>
                    <input type="text" id="title" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="price" style={{ display: 'block', marginBottom: '0.5rem' }}>price:</label>
                    <input type="number" id="price" placeholder='price' value={price} onChange={e => setPrice(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="discountPercentage" style={{ display: 'block', marginBottom: '0.5rem' }}>discountPercentage:</label>
                    <input type="number" id="discountPercentage" placeholder='discountPercentage' value={discountPercentage} onChange={e => setDiscountPercentage(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="rating" style={{ display: 'block', marginBottom: '0.5rem' }}>rating:</label>
                    <input type="number" id="rating" value={rating} placeholder='rating' onChange={e => setRating(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="stock" style={{ display: 'block', marginBottom: '0.5rem' }}>stock:</label>
                    <input type="number" id="stock" placeholder='stock' value={stock} onChange={e => setStock(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="brand" style={{ display: 'block', marginBottom: '0.5rem' }}>brand:</label>
                    <input type="text" id="brand" placeholder='brand' value={brand} onChange={e => setBrand(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label htmlFor="bcategoryrand" style={{ display: 'block', marginBottom: '0.5rem' }}>category:</label>
                    <input type="text" id="category" placeholder='bcategoryrand' value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
                </div>
                <div>
                    <label for="exampleInputPassword1">image Uplode</label>
                    <input type="file" onChange={(e) => { setImages(e.target.files) }} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} /><br /><br />
                </div><br />
                <button className='btn' typeof='submit'>Add</button>
            </form>
        </React.Fragment>
    )
}
export default Add
