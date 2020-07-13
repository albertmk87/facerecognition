import React from 'react';
import 'tachyons'; 
import Tilt from 'react-tilt'
import './Logo.module.css';
import imgLogo from './1.jpg';

const Logo=(props)=>{
	return (
			<div>
				<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
	 				<div className="Tilt-inner"> <img src={imgLogo} /> </div>
				</Tilt>
			</div>

			)
}

export default Logo;