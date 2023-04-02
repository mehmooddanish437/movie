import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import useFetch from '../../hooks/Fetch'
import Img from '../LazyLoadImage/Img';
import ContentWrapper from '../contentwraper/ContentWraper';
import { useSelector } from 'react-redux';
import "./herobanner.scss"
const HeroBanner = () => {
  const React_API = "1eb0e956201c1188e31827c7ab2857b2"

  const { url } = useSelector((state) => state.home)
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  const searchQueryHandlerForButton = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  const { data, loading } = useFetch(`/movie/upcoming?api_key=${React_API}`);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data, url]);


  return (
    <>

    
        <div className="heroBanner">
       {!loading && (
        <div className="backdrop-img">
         <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover.
            Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={searchQueryHandlerForButton}>Search</button>
          </div>
        </div>
      </ContentWrapper>

    
    
       </div>

      
     
  
    </>
  )
}

export default HeroBanner