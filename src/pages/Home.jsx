import React from 'react'
import Header from '../components/Header'
import Quote from '../components/Quote'
import Biography from '../components/Biography'
import Details from "../components/Details";

const Home = () => {
  return (
    <div className='bg-black p-10'>
      <div className='border-b-2'>
        <Header/>
      </div>
      <div>
        <Quote/>
      </div>
      <div>
        <Biography/>
      </div>
      <div className='border-b-2'>
        <Details/>
      </div>
      <div className='text-white font-Barrieci font-semibold text-center text-xl pt-7'>
        Made by Mayank Mishra
      </div>
    </div>
  )
}

export default Home
