import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import axios from 'axios';
import Visualizer from './Components/Visualizer'
import './Playground.css'

const Playground = () => {
	const [value, setValue] = useState(2020);
   const [data, setData] = useState([]);

   async function fetchData(year) {
      try {
         const response = await axios.get(`http://localhost:3001/api/data?year=${year}`);
         const data = await response.data;
         setData(data);
      } catch (error) {
         console.error(error);
      }
   }

   useEffect(() => {
      fetchData(value);
   }, [value]);

	function handleRangeSlider(value) {
	   setValue(value);
	}

	return (
	   <div className = "playground-main">
 
		   <p className = "title-segment"> Predicted / Historical California Housing Prices for {value}. </p>
 
		   <Visualizer data = {data} />

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
                  max = {2030}
               />
         </div>

      </div>
   );
};
export default Playground;