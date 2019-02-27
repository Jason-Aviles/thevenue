import React, { Component } from 'react';
import './resources/styles.css'
import {Element} from'react-scroll'
import Header from  './components/header_footer/Header'
import  Featured  from './components/featured/featured'
import VenueNfo from './components/VenueNfo/venueNfo'
import HighLights from './components/HighLights/HighLights'
import Price from './components/Pricing/price'
import Location from './components/location/location'
import Footer from './components/header_footer/Footer'
class App extends Component {
  render() {  
    return (
      <div className="App" style={{height:'1500px',backgroundColor:'cornflowerblue'}}>
       <Header />
     <Element name='FEATURED'>  <Featured /></Element>

     <Element name ='VenueNfo'> <VenueNfo />  </Element>

       <Element name ='highlights'> <HighLights /></Element>

       <Element name ='Price'> <Price /></Element>

       <Element name ='Location'><Location /></Element>
       <Footer />
      </div>
    );
  }
}

export default App;
 