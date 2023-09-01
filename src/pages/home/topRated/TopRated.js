import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Crousel from '../../../components/carousel/Carousel';

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    }


    return <div className="carouselSection">
        <ContentWrapper>
            <span className="crouselTitle" >Top Rated</span>
            <SwitchTabs data={["Movies", 'TV Shows']} onTabChange={onTabChange} />
        </ContentWrapper>
        <Crousel data={data?.results} loading={loading}
            endpoint={endpoint} />
    </div>
}

export default TopRated;