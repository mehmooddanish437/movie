import React from "react";
import Carousel from "../carousel/Carousel";
import useFetch from "../../hooks/Fetch";
const Recommendation = ({ mediaType, id }) => {
    const React_API = "1eb0e956201c1188e31827c7ab2857b2"
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations?api_key=${React_API}`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;