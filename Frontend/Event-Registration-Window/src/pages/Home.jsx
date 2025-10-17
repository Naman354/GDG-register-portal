import React from 'react'
import HomeCorporate from '../assets/home-coroprate.jpg'
import  { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate() ;
  return (

    <>
    <div className='px-[2rem]'>
        <div style={{ backgroundImage: `url(${HomeCorporate})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className='text-white  w-full
         h-[746px]'>
            <div className="flex flex-col  items-center  justify-center bg-black/50 backdrop-blur-md  w-full
         h-[746px] ">

            <h4 className='text-1xl my-[1rem]'>Source,Share,Shhynthesis</h4>
            <h1 className='text-5xl my-[1rem] '>EventName</h1>
            <h2 className='text-1xl my-[1rem]'>Ignite Your Open Souces</h2>
            <button className='bg-blue-500  rounded-2xl px-5 py-2' onClick={() => navigate('/login')}>Know More</button>
        
</div>
        </div>
    </div>
    </>
  )
}

export default Home
