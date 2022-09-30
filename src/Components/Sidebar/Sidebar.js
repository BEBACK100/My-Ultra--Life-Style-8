import React from 'react';
import myimg from './mypic.jpg'
const Sidebar = ({ work }) => {

    let totalTime = 0
    for (const time of work) {
        totalTime = parseInt(totalTime + time.duration)

    }
    return (
        <div>
            <h1 className='text-3xl pt-5'>Calculatin section for</h1>
            <div className='profile bg-green-200 pl-3'>
                <h2 className=' text-2xl font-bold text-red-200 py-4'>Profile Part</h2>
                <div>
                    <div className="card w-full  shadow-xl">
                        <div className="flex gap-3">
                            <div className='w-10 h-10 rounded-full'> <img src={myimg} alt="" /></div>

                            <div>
                                <h2 className="card-title text-blue-500 text-3xl">BIBEK BAIN</h2>
                                <p className=''>Barishal, Wazirpur</p>

                            </div>

                        </div>
                        <div className='flex gap-4 font-bold py-3'>
                            <div><h1>Weight:<br /> <span className='text-5xl font-bold '>70</span>kg</h1>
                            </div>
                            <div><h2>Height:<br /><span className='text-5xl font-bold '>5.6</span>ft</h2></div>
                            <div><h2>Age:<br /><span className='text-5xl font-bold '>30</span>Years</h2></div>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <h2 className='text-4xl mt-3'>Add A Break</h2>
                <div className='w-full h-20 bg-zinc-400 mt-8 flex gap-6 justify-center align-middle'>
                    <div className='bg-white w-12 h-10 text-black rounded-full mt-5 text-xl font-bold p-1 text-center'><h2>10m</h2></div>
                    <div className='bg-white w-12 h-10 text-black rounded-full mt-5 text-xl font-bold p-1 text-center'><h2>15m</h2></div>
                    <div className='bg-white w-12 h-10 text-black rounded-full mt-5 text-xl font-bold p-1 text-center'><h2>20m</h2></div>
                    <div className='bg-white w-12 h-10 text-black rounded-full mt-5 text-xl font-bold p-1 text-center'><h2>25m</h2></div>

                </div>
            </div>

            <div className='h-60 bg-slate-200 pt-5 mt-5'>
                <p className='text-4xl pt-3 text-black font-bold'>Working Details</p>
                <div className=' mt-5'>
                    <div className=' font-bold text-3xl'><h2>Working Time : {totalTime}
                        Min.</h2></div>
                    <div className='text-3xl font-bold'><h2>Breaking Time:</h2></div>

                </div>
            </div>
            {/* <p>Total Work:{work.length}</p> */}
        </div>
    );
};

export default Sidebar;