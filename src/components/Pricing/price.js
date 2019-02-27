import React, { Component } from 'react';
import Btn from '../utiles/button'
import Zoom from 'react-reveal/Zoom'

class Price extends Component {
    state={
        prices:[100,150,250],
        positions:['Balcony','Meduim','Star'],
        desc:['Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Libero justo laoreet sit amet cursus sit amet dictum sit. ',
        'Vulputate odio ut enim blandit. Mollis aliquam ut porttitor leo a. ','Vel pharetra vel turpis nunc eget lorem dolor sed viverra.'],
        linkto:[],
        delay:[500,0,500]
    }

    showBoxes =() =>{
       return( this.state.prices.map((box,i)=>{
           

          
           return(<Zoom  delay={this.state.delay[i]}key={i}>
               <div className='pricing_item'>
                <div  className='pricing_inner_wrapper'>
                    <div  className='pricing_title'>
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                    </div>
                    <div  className='pricing_description'>
                    <span>{this.state.desc[i]}</span>
                    </div>
                    <div  className='pricing_buttons'>
                     <Btn
                        text='Purchase'
                        bck='#ffa800'
                        color='white'
                        link={this.state.linkto}

                     />
                    </div>

                </div>

               </div> </Zoom>
           )
       }))
    }
     
    render() {
        return (
            <div className='bck_black'>
                <div className="center_wrapper pricing_section">
                <h2>
                    Pricing
                </h2>
                <div className='pricing_wrapper'>
                  {this.showBoxes()}

                </div>

                </div>
                    
            </div>
        );
    }
}

export default Price;
