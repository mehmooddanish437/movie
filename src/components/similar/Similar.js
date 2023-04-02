import React from "react";

import Carousel from "../carousel/Carousel";
import useFetch from "../../hooks/Fetch";
const Similar = ({ mediaType, id }) => {
    const React_API = "1eb0e956201c1188e31827c7ab2857b2"
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar?api_key=${React_API}`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;