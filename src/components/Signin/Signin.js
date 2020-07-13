import React from 'react';



const Signin=(props)=>{

	return (
		<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-100-m w-25-l mw8 center">
			<main className="pa4 white-80">
				  <form className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
				      </div>
				      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
				    </fieldset>
				    <div className="">
				      <input onClick={props.signIN} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
				    </div>
				    <div className="lh-copy mt3">
				      <a href="#0" className="f6 link dim white db">Register</a>
				    </div>
				  </form>
		</main>
		</article>
		)
}

export default Signin;