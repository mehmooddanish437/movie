import React, { useRef } from "react";
import "./carousel.scss"
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentwraper/ContentWraper";
import Img from "../LazyLoadImage/Img";
// import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circlerating/CircleRating";
import Genres from "../geners/Genres";
const Carousel = ({data, loading, endPoint, title}) => {
    const navigate = useNavigate();
    const refcontainer = useRef()
   const {url} = useSelector((state)=>state.home)
   const navigation = (dir) =>{
        const container = refcontainer.current;
       const scrollAmount = 
       dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);

       container.scrollTo({
        left : scrollAmount,
        behavior: "smooth"
       })
    }
    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

  return (
    <div className="carousel">
<ContentWrapper>
{title && <div className="carouselTitle">{title}</div>}
    <BsFillArrowLeftCircleFill
    className="carouselLeftNav arrow"
    onClick={() => navigation("left")}/>
    <BsFillArrowRightCircleFill
     className="carouselRighttNav arrow"
     onClick={() => navigation("right")}/>
    
{!loading ? (
    <div className="carouselItems" ref={refcontainer} >
        {
            data?.map((item)=>{
                const posterURL = item.poster_path ? url.poster  + item.poster_path : "https://www.freeiconspng.com/thumbs/error-icon/error-icon-12.png"
                return(
                <div className="carouselItem" key={item.id} onClick={()=>navigate(`/${item.media_type || endPoint}/${item.id}`)}>
                    <div className="posterBlock">
                        <Img src={posterURL} alt=''/>
                        <CircleRating rating ={item.vote_average.toFixed(1)}/>
                        <Genres data={item.genre_ids.slice(0, 2)}  />
                                      
                    </div>
                    <div className="textBlock">
                       <span className="title">{item.title || item.name}</span> 
                       <span className="date">{dayjs(item.release_date).format("MMM D, YYYY")}</span> 
                    </div>
                </div>
            )
            })
        }
         </div>
): (
    <div className="loadingSkeleton">
    {skItem()}
    {skItem()}
    {skItem()}
    {skItem()}
    {skItem()}
</div>
)}
</ContentWrapper>
    </div>
  )
}

export default Carousel