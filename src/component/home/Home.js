import React, { useEffect, useState } from 'react';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h1 className='text-center'>Curious Resturent</h1>
            <div className='container text-center'>
                <input onChange={searchFood} type="text" /> <button>Search</button><br /><h1>Result Found:{meals.length}</h1>
            </div>
        </div>
    );
};

export default Home;