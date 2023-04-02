import React from "react";
import "./details.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/Fetch";
import DetailsBanner from "../detailsBanner/DetailsBanner";
import Cast from "../cast/Cast";
import VideosSection from "../videosection/VideoSection";
import Similar from "../similar/Similar";
import Recommendation from "./Recommendation";
const Details = () => {
    const React_API = "1eb0e956201c1188e31827c7ab2857b2"
    const { type, id } = useParams();
    const { data, loading } = useFetch(`/${type}/${id}/videos?api_key=1eb0e956201c1188e31827c7ab2857b2`);
    const { data: credits, loading: creditsLoading } = useFetch(`/${type}/${id}/credits?api_key=1eb0e956201c1188e31827c7ab2857b2`);
      
         
    return (

        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={type} id={id} />
            <Recommendation mediaType={type} id={id} />
        </div>
    );
};

export default Details;