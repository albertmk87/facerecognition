import React from 'react';
import 'tachyons'; 
import classes from './FaceRec.module.css';

const FaceRec=(props)=>{

	console.log(props.regions.leftCol);

	return (
			<div className="mv5 ma">
			
			<div  className={classes.imgBox}>
			  <div className={classes.positioning} style={{left:props.regions.leftCol, right:props.regions.rightCol, bottom:props.regions.bottomRow, top:props.regions.topRow}}>
       		 </div>
			<img id='img' width='800px' height="auto" src={props.imageURL} alt="" />
			</div>
			</div>
			)

}

export default FaceRec;