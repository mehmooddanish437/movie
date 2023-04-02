import React, { useEffect, useState } from "react";
import "./trending.scss"
import ContentWrapper from "../contentwraper/ContentWraper";
import SwitchTabs from "../switchtab/SwitchTab";
import useFetch from "../../hooks/Fetch";
import Carousel from "../carousel/Carousel";
const Trending = () => {
    const React_API = "1eb0e956201c1188e31827c7ab2857b2"

const [endPoint, setEndPoint] = useState("day")

const {data, loading} = useFetch(`/trending/all/${endPoint}?api_key=${React_API}`)


const onTabChange = (tab)=>{
  setEndPoint(tab === "Day" ? "day" : "week")
}
   

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;