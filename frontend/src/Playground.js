import React, { useState, useEffect } from "react";
import { useLeaflet, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const PlayGround = () => {
    const position = [36.77, 119.4];

	return (

		<div>
			<Visualizer/>
		</div>



    );
}

export default PlayGround;