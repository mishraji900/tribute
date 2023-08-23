import React from 'react'
import Header from '../components/Header'
import Quote from '../components/Quote'
import Biography from '../components/Biography'
import Details from "../components/Details";

const Home = () => {
  return (
    <div className='bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 to-zinc-800 p-10'>
      <div>
        <Header/>
      </div>
      <div>
        <Quote/>
      </div>
      <div>
        <Biography/>
      </div>
      <div>
        <Details/>
      </div>
    </div>
  )
}

export default Home
