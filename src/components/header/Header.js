import React , {useEffect, useState}from 'react'
import {GoSearch} from "react-icons/go"
import {ImMenu} from "react-icons/im"
import {RxCross1} from "react-icons/rx"
import ContentWrapper from '../contentwraper/ContentWraper';
import { useNavigate, useLocation } from 'react-router-dom';
import "./header.scss"
const Header = () => {

  const [show, setShow] = useState("show");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    
    const navigate = useNavigate();
    const location = useLocation();

const controlNavbar = ()=>{
if(window.scrollY > lastScrollY && !mobileMenu){
  setShow("hide")
}else{
  setShow("show")
}
setLastScrollY(window.scrollY)
}


useEffect(()=>{
  window.scrollTo(0, 0);
},[location])
 

    useEffect(()=>{
      window.addEventListener("scroll", controlNavbar)
      return ()=>{
      window.removeEventListener("scroll", controlNavbar)}
        
    },[lastScrollY])

    const openMobileMenu = ()=>{
      setMobileMenu(true)
      setShowSearch(false)
    }
    const openSearch = ()=>{
      setMobileMenu(false)
      setShowSearch(true)
    }
    const searchQueryHandler = (event) => {
      if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`)
        setTimeout(() => {
          setShowSearch(false)
        }, 1000)
      }
    }
    const navigateHandler = (type)=>{
     if(type === "movies"){
      navigate('/explore/movie')
     }else{
      navigate('/explore/tv')
     }
     setMobileMenu(false)
    }
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
       <div className='logo'>
        <img src="/logo.png" alt='' onClick={()=>navigate("/")}/>
       </div>  
       <ul className='menuItems'>
        <li className='menuItem' onClick={()=>navigateHandler("movies")}>MOVIES</li>
        <li className='menuItem'onClick={()=>navigateHandler("tv")}>TV Shows</li>
        <li className='menuItem'><GoSearch onClick={openSearch  }/></li>
       </ul>

       <div className='mobileMenuItems'>
         <GoSearch onClick={openSearch}/>
         {mobileMenu ? <RxCross1 onClick={()=>setMobileMenu(false)}/> : <ImMenu onClick={openMobileMenu}/>}
        
       </div>
      </ContentWrapper>
      {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for a movie or tv show...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <RxCross1
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                    </div>)}
                  
    </header>
  )
}

export default Header