import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicGhpZXVkdTg0IiwiYSI6ImNra2R0d2M2cDEwZXgycG8wank2cmg0d3oifQ.0Cqku_sRw4ZH7YjlPMmjCg'


const map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-99.29011, 39.39172],
            zoom: 3,
        });
    });

    return (
        <Wrapper id='map'></Wrapper>
    )
}

export default map

const Wrapper = tw.div`
flex-1`