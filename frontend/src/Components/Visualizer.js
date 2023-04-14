import React, { useState, useEffect } from "react";
import { useLeaflet, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';

import './Visualizer.css';

const Visualizer = ({ data }) => {
    const position = [36.7783, -119.4179];

   return (

       <div>
        
        <MapContainer center = {position} zoom={8} scrollWheelZoom={false} className = 'map-overall'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />


            {data.map((item) => (
                <Marker key={item.id} position={[item.latitude, item.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                    {console.log(item.id + " Year: " + item.year + " " + item.house_value)}
                    <Popup>
                        <p>{"Zipcode: " + item.zipcode}</p>
                        <p>{"Year: " + item.year}</p>
                        <p>{"House Value: $" + item.house_value}</p>
                    </Popup>
                </Marker>
            ))}
           
           </MapContainer>
        
        </div>






   );
}


export default Visualizer;
