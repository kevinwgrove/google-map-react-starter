import React, { useState } from "react";
import { GOOGLE_TOKEN } from '../../key'
import GoogleMapReact from 'google-map-react';

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
                </GoogleMapReact>
            </div>
        </>
    )
}