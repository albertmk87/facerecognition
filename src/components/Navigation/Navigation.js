import React from 'react';
import 'tachyons'; 


const Navigation=(props)=>{
	return (
			<nav style={{display:'flex', justifyContent:"flex-end"}}>
				<p onClick={props.signOUT} className='f3 link dim black underline pa3 pointer'>Sign out</p>

			</nav>

			)
}

export default Navigation;