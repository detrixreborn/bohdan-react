import React, { useEffect, useState } from 'react'
import * as mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export const Home = () => {

  const [ startPoint, setStartPoint ] = useState(null);
  const [ destinationPoint, setDestinationPoint ] = useState(null);
  
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGltYWRldHJpeCIsImEiOiJja2J1b2IyOHgwM292Mnpxbmx5aTdhenExIn0.WyxB3sEAiD9hiSKjHJNRlA';
    
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    });
    
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });

    map.addControl(directions);
    
    


    // map.addControl(
    //     new MapboxGeocoder({
    //       accessToken: mapboxgl.accessToken,
    //       mapboxgl,
    //
    //       zoom: 8,
    //       countries: 'RU',
    //       language: 'ru',
    //     }).on('result', (result) => {
    //         console.log(result);
    //     })
    //   );
    //
    // map.addControl(
    //     new MapboxGeocoder({
    //       accessToken: mapboxgl.accessToken,
    //       mapboxgl,
    //
    //       zoom: 8,
    //       countries: 'RU',
    //       language: 'ru',
    //     }).on('result', (result) => {
    //         console.log(result);
    //     })
    //   );
    
  });

  return (
    <div id='map' style={{ width: 600, height: 600}}/>
  )
};
