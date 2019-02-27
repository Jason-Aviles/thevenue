import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import Btn from '../utiles/button'

export default class Discount extends Component {

state={
    discountStart:0,
    discountEnd:30
}

RevealPercent = () =>{
    if(this.state.discountStart < this.state.discountEnd){
        this.setState({
            discountStart:this.state.discountStart +1
        })

    }
}

componentDidUpdate(){
    setTimeout(()=>{
        this.RevealPercent()
    },35)
}


  render() {
    return (
      <div className='center_wrapper'>
        <div className="discount_wrapper">
       <Fade
       onReveal={()=> this.RevealPercent()}
       >
            <div  className="discount_porcentage">
                <span>{this.state.discountStart}</span>
                <span>OFF</span>

                </div>
            </Fade>
            <Slide right>
            <div  className="discount_description">
                <h3>Purchuse Tickets before 20th FEB</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus. Amet volutpat consequat mauris nunc congue. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Dui faucibus in ornare quam viverra orci sagittis.</p>

                <div>
                    <Btn
                     text='Purchase tickets'
                     bck='#ffa800'
                     color='#ffffff'
                     link='#'
                    />
                </div>

            </div></Slide>
            

        </div>
        
      </div>
    )
  }
}
