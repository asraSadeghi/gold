import React from 'react'
import ReactCountryFlag from "react-country-flag"

const api = {
  base :"https://currency.jafari.li/json"
}

function App() {
  const dateBuilder = (d) => {
    let months = ["Jan" , "Feb" , "March" , "April" , "May", "June" , "july" , "August" , "Sep" , "Oct" , "Nov" , "Dec"];
    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

    
    let houer=d.houer();
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year} ${houer}`
  }

  return (
    <div className="app">
      <main>
      <div className="date">{dateBuilder(new Date())}</div>
     
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
