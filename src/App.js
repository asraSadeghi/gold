import React, { Component } from 'react';
import currency from './currency';
import data from "./data";



class App extends Component {
  render() {
    return (
      <div className="app">
        <main>
        
        <currency>
            <div>
              {
                data.data.map((data, i) => {
                  return (
                    <div key={i}>
                      <div className="currency">
                        <div href={data.title}>
                          {data.title}
                        </div>
                        <div>
                          {data.p }
                          {data.updated_at}
                         
                          
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>

          </currency>
        </main>
      </div>
    );
  }
}

export default App;