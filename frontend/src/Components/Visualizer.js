import React, { useState, useEffect } from "react";
import { useLeaflet, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';

import './Visualizer.css';

const Visualizer = () => {
    const position = [36.7783, -119.4179];
    
    const data = [
        {
            zipcode: 90000,
            latitude: 52.605, 
            longitude: -0.09, 
            message: 'This is the first message.'
        }, 
        {
            zipcode: 90001,
            latitude: 52.505, 
            longitude: -0.09, 
            message: 'This is the second message.'
        }, 
        {
            zipcode: 90001,
            latitude: 52.505, 
            longitude: -0.09, 
            message: 'This is the second message.'
        }, 
        {
            zipcode: 90001,
            latitude: 52.505, 
            longitude: -0.09, 
            message: 'This is the second message.'
        }, 
        {
            zipcode: 90001,
            latitude: 52.505, 
            longitude: -0.09, 
            message: 'This is the second message.'
        }, 
        {
            zipcode: 90001,
            latitude: 52.505, 
            longitude: -0.09, 
            message: 'This is the second message.'
        }, 
        
    ]

   return (

       <div>
        
        <MapContainer center = {position} zoom={8} scrollWheelZoom={false} className = 'map-overall'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />


            {data.map((zip) => (
                <Marker position={[zip.latitude, zip.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                    <Popup>
                        {zip.message}
                    </Popup>
                </Marker>
            ))}
           
           </MapContainer>
        
        </div>






   );
}


export default Visualizer;
