import React, { useState } from "react";
import Slider from "@mui/material/Slider";

import Visualizer from './Components/Visualizer'
import './Playground.css'

const Playground = () => {
	const [value, setValue] = useState();
	function handleRangeSlider(value) {
	   setValue(value);
	}
	return (
	   <div className = "playground-main">
 
		 <p className = "title-segment"> Predicted / Historical California Housing Prices for {value}. </p>
 
		  <Visualizer value = {value} />

		<div className = "buffer"></div>

		<div style = {{ width: "600px" }}>
            <Slider
               aria-label = "discrete slider."
               defaultValue = {2020}
               getAriaValueText = {handleRangeSlider}
               valueLabelDisplay = "auto"
               step = {1}
               marks
               min = {2011}
               max = {2031}
            />
         </div>

      </div>
   );
};
export default Playground;