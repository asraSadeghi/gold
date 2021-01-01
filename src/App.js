import React, { Component } from 'react';

import data from "./data";

const ApiUrl = "https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json";


class App extends Component {
  render() {
    return (
      <div className="app">
        <main>
          <div className="header">
            لیست قیمت ارز
          </div>
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

                        <span class="progress">
                          <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow={data.dp} aria-valuemin="0" aria-valuemax="5"> {data.dp}</div>
                        </span>


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