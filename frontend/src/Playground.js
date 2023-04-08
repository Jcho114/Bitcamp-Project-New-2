import React, { useState, useEffect } from "react";
import { useLeaflet, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const PlayGround = () => {
    const position = [36.77, 119.4];

	return (
		<div style = {{height: "50vh"}}>

			<div>Start</div>


			<MapContainer center = {position} zoom={13} scrollWheelZoom={false} style = {{height: 600, width : "50vw"}}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>


			<div>End</div>

		</div>



    );
}

export default PlayGround;