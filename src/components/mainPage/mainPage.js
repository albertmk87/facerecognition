import React from 'react';
import Navigaton from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js';
import Rank from '../Rank/Rank.js';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm.js';
import axios from 'axios';
import Clarifai from 'clarifai';
import FaceRec from '../FaceRec/FaceRec.js';
import SignIn from '../Signin/Signin.js';

 const app = new Clarifai.App({
 apiKey: "3e51de22e8bc4ce99a5e583d67a74edd"
});

class MainPage extends React.Component {

  state={
    inputField:"",
    imageURL:"",
    regions:{},
    signin:false
  }

 


  change=(e)=>{
    e.preventDefault();
    this.setState({inputField:e.target.value});
  }

  calculateFace=(data)=>{
    const face=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.querySelector("#img");
    const width=Number(image.width);
    const height=Number(image.height);
    console.log(width, height , face)
    return {
      leftCol:face.left_col * width,
      rightCol:width- (face.right_col * width),
      topRow:face.top_row * height,
      bottomRow:height-(face.bottom_row * height)
    }
  }

  displayBox=(box)=>{
    this.setState({regions:box})
  }

  onSubmit=()=>{
    this.setState({imageURL:this.state.inputField});
  app.models.predict( Clarifai.FACE_DETECT_MODEL, this.state.inputField, {language: 'zh'})
  .then(response => this.displayBox(this.calculateFace(response))
  .catch(err=>console.log(err))
);
  }
  
  signIN=()=>{
    this.setState({signin:true})
  }

  signOUT=()=>{
    console.log("clicked signOUT")
    this.setState({signin:false})
  }

  render(){

  return (
    <div className="mainPage">
        {this.state.signin ? <div> <Navigaton signOUT={this.signOUT} />
        <Logo />
        <Rank />
        <ImageLinkForm change={this.change} onSubmit={this.onSubmit}/>
    <FaceRec regions={this.state.regions} imageURL={this.state.imageURL}/> </div> : <SignIn signIN={this.signIN} /> }
       
    </div>
  );
}
}

export default MainPage;