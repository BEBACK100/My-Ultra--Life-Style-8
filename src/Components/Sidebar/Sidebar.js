
import myimg from './mypic.jpg'
const Sidebar = ({ work }) => {

    let totalTime = 0
    for (const time of work) {
        totalTime = parseInt(totalTime + time.duration)



    }
    return (
        <div>
            <h1 className='text-5xl py-5 mb-8 '>Calculatin section</h1>
            <div className='profile bg-green-200 pt-4 mt-6'>
                <h2 className=' text-4xl font-bold  py-4'>Profile Part</h2>
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
                    <div className='bg-white w-12 h-10 text-black rounded-full mt-5 text-xl font-bold p-1 text-center'>
                        <button>10m</button></div>
                    <div className='bg-white w-12 h-10 text-black rounded-full mt-5 text-xl font-bold p-1 text-center'>
                        <button>15m</button></div>
                    <div className='bg-white w-12 h-10 text-black rounded-full mt-5 text-xl font-bold p-1 text-center'>
                        <button>20m</button></div>
                    <div className='bg-white w-12 h-10 text-black rounded-full mt-5 text-xl font-bold p-1 text-center'>
                        <button>25m</button></div>

                </div>
            </div>

            <div className='h-60  pt-5 mt-5'>
                <p className='text-4xl pt-3 text-black font-bold'>Working Details</p>
                <div className=' mt-5'>
                    <div className=' font-bold text-3xl h-20 bg-lime-300'><h2>Working Time :{totalTime}
                        Min.</h2></div>
                    <div className='h-20 text-3xl font-bold bg-lime-300 mt-5 pt-3'><h2>Breaking Time:</h2></div>

                </div>
            </div>
            <div>
                <button className='bg-lime-300 h-20 w-full text-5xl py-4 mt-10 rounded-lg'>Activity Over</button>
            </div>
        </div>
    );
};

export default Sidebar;