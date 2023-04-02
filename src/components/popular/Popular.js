import React, {  useState } from "react";
import "../trending/trending.scss"
import ContentWrapper from "../contentwraper/ContentWraper";
import SwitchTabs from "../switchtab/SwitchTab";
import useFetch from "../../hooks/Fetch";
import Carousel from "../carousel/Carousel";
const Popular = () => {
    const React_API = "1eb0e956201c1188e31827c7ab2857b2"

const [endPoint, setEndPoint] = useState("movie")

const {data, loading} = useFetch(`/${endPoint}/popular?api_key=${React_API}`)



   
    const onTabChange = (tab)=>{
      setEndPoint(tab === "Movies" ? "movie" : "tv")
    }

   

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTabs data={["Movies", "TV Series"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel endPoint={endPoint} data={data?.results} loading={loading} />
        </div>
    );
};

export default Popular;