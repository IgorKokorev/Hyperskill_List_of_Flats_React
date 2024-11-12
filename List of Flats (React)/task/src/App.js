import React, {useRef, useState} from 'react';
import './App.css';

function App() {
    const [flats, setFlats] = useState([
        {
            id: 1,
            name: 'Cozy Apartment',
            location: 'Downtown',
            price: '$1500/month',
            available: true,
            image: 'https://example.com/cozy-apartment.jpg',
        },
        {
            id: 2,
            name: 'Modern Loft',
            location: 'Midtown',
            price: '$1800/month',
            available: false,
            image: 'https://example.com/modern-loft.jpg',
        },
        {
            id: 3,
            name: 'Charming Studio',
            location: 'Uptown',
            price: '$1200/month',
            available: true,
            image: 'https://example.com/charming-studio.jpg',
        },
    ]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [available, setAvailable] = useState(false);
    const lastIndex = useRef(3);

    const changeFormVisibility = () => {
        setShowForm(!showForm);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    const handleAvailableChange = (event) => {
        setAvailable(!available);
    }

    function dropForm() {
        setName('');
        setLocation('');
        setPrice('');
        setAvailable(false);
        setImage('');
        setShowForm(false);
    }

    const handleSubmitFlat = (event) => {

        lastIndex.current = lastIndex.current + 1;
        const newFlat = {
            id: lastIndex.current,
            name: name,
            location: location,
            price: price,
            available: available,
            image: image
        }

        setFlats([...flats, newFlat]);
        dropForm();
        event.preventDefault();
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>SuperFlats</h1>
            </header>
            <main className="App-main">
                <button id="addFlatButton" onClick={changeFormVisibility}>Add Flat</button>
                <form style={{visibility: showForm ? 'visible' : 'hidden'}}>
                    <label>Name</label>
                    <input name={"name"} value={name} onChange={handleNameChange}></input>
                    <label>Location</label>
                    <input name={"location"} value={location} onChange={handleLocationChange}></input>
                    <label>Price</label>
                    <input name={"price"} value={price} onChange={handlePriceChange}></input>
                    <label>Image</label>
                    <input name={"image"} value={image} onChange={handleImageChange}></input>
                    <label>Available</label>
                    <input name={"available"} type={"checkbox"} checked={available}
                           onChange={handleAvailableChange}></input>
                    <button type="submit" onClick={handleSubmitFlat}>Add flat</button>
                </form>
                <h2>Flat List</h2>
                <ul>
                    {
                        flats.map(flat => (
                            <li key={flat.id}>
                                <h3>{flat.name}</h3>
                                <p>Location: {flat.location}</p>
                                <p>Price: {flat.price}</p>
                                <p>Availability: {flat.available ? 'Available' : 'Not Available'}</p>
                                <img src={flat.image} alt={flat.name}/>
                            </li>
                        ))
                    }
                </ul>
            </main>
        </div>
    );
}

export default App;