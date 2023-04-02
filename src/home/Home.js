import React from 'react'
import HeroBanner from '../components/home/HeroBanner'
import Popular from '../components/popular/Popular'
import TopRated from '../components/toprated/ToRated'
import Trending from '../components/trending/Trending'

const Home = () => {
  return (
    <>
    <HeroBanner/>
    <Trending/>
    <Popular/>
    <TopRated/>
    </>
  )
}

export default Home