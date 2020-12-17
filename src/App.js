import React from 'react'
import ReactCountryFlag from "react-country-flag"
import moment from "moment-jalaali";

const api = {
  base :"https://currency.jafari.li/json"
}


function App() {
 

  return (
    <div className="app">
      <main>
     
     
        <div className='currency' >
         <div className='flag'><ReactCountryFlag countryCode="US" svg /></div>
         <div className='currency1'>US Dollar</div>
        
         <div className='sell'>فروش:25950</div>
         <div className='buy'>خرید:25850</div>
       
        </div>
        <div className='gold' >
         <div className='coin'>1 Old Azadi</div>
         <div className='sell'>10900000</div>
         <div className='buy'>10400000</div>

        </div>
        <div className='item' >
          <div className='name'>Ounce</div>
          <div className='rate'>1825.96</div>

        </div>


      </main>
    </div>
  );
}

export default App;
