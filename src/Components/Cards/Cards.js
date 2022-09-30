import React from 'react';

const Cards = ({ card, handletocard }) => {
    const { name, Image, id, duration, descripation } = card;

    return (
        <div className='card '>
            <div className="card w-80 h-90 shadow-xl bg-slate-400">
                <img className='w-30 h-30' src={Image} alt="" />
                <div className="card-body items-center text-center ">
                    <h2 className="card-title text-3xl text-blue-500">{name}</h2>
                    <h2 className='text-4xl'>ID Number:{id}</h2>
                    <p>{descripation}</p>
                    <h1 className='text-3xl'>Time Duration:{duration}</h1>
                    <div className="card-actions">
                        <button onClick={() => handletocard(card)} className="btn btn-primary">Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;