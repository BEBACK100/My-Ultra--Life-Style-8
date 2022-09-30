import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css'
const Main = () => {



    const [cards, setCards] = useState([]);
    const [work, setWork] = useState([]);
    useEffect(() => {
        fetch('mydata.json')
            .then(res => res.json())
            .then(data => setCards(data));

    }, [])
    const handletocard = (card) => {

        const totalwork = [...work, card]
        setWork(totalwork)

    }

    return (
        <div className='main-container'>
            <div className='display-container pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex pt-4 bg-yellow-100 p-3'>
                {
                    cards.map(card => <Cards
                        key={card.id}
                        card={card}
                        handletocard={handletocard}
                    ></Cards>)
                }
            </div>
            <div className='profile-container bg-amber-50'>

                <Sidebar work={work}></Sidebar>
            </div>

        </div>
    );
};

export default Main;