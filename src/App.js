import React, { Component } from 'react';

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
                        <div >
                          {data.title}
                        </div>
                        <div className="p">
                          {data.p}
                        </div>
                        <div className="updata">

                          اپدیت:
                          {data.updated_at}


                        </div>

                        <div class="progress">
                          <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow={data.dp} aria-valuemin="0" aria-valuemax="5"> {data.dp}</div>
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