import React from 'react'

const Nav = () => {
  return (
    <nav className=' flex  text-white justify-between items-center text-[1rem] m-4'>
      <div className='text-4xl'>EventName</div>
      <ul className='lg:flex justify-center gap-20 hidden '>
        <li className='hover:text-green-500 drop-shadow-xl'>Home</li>
        <li className='hover:text-green-500 drop-shadow-xl'>About</li>
        <li className='hover:text-green-500 drop-shadow-xl'>Speakers</li>
      </ul>
      <button className='bg-blue-500  rounded-2xl px-5 py-2'>Register</button>
   
    </nav>
  )
}

export default Nav
