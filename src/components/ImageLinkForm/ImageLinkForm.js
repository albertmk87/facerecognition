import React from 'react';
import 'tachyons'; 


const ImageLinkForm=(props)=>{
	return (
			<div>
				<p className="f2 tc">insert image url to detect faces</p>
			<div className="shadow-3 w-50 center flex items-center">
				<input onChange={props.change} className="f4 pa2 w-70 center" type="text" />
				<button onClick={props.onSubmit} className="db center mt2 pa2 f10 link dim mb2 white bg-purple">Search faces</button>
			</div>
			</div>

			)
}

export default ImageLinkForm;