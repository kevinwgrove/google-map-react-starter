import React, { useState } from "react";
import { GOOGLE_TOKEN } from '../../key'
import GoogleMapReact from 'google-map-react';
import './Map.css'

export const Map = () => {
    const [coords, setCoords] = useState({
        // These are your default coordinates
        lat: 39.83,
        lng: -86.154694
    });

    return (
        <>
            <div className='map-container'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_TOKEN }}
                    defaultCenter={coords}
                    defaultZoom={11}
                    style={{
                    width: 100 + '%'
                    }}
                >
                    {/* Here you can use any JS tags, or component library tags,
                        to create custom markers on the map. All you have to do
                        is set the lat and lng attributes to the tag and customize
                        it however you want. See below for an example. */}
                    <li
                        lat={coords.lat} // Using lat from coords state
                        lng={coords.lng} // Using lng from coords state
                    ></li>
                </GoogleMapReact>
                {/* Any tags outside of the <GoogleMapReact> component can be 
                    customized and used as a map overlay component. See below for
                    an example. */}
                <div className='container-div'></div>

            </div>
        </>
    )
}