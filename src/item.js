import React, { useEffect, useState } from "react";
import axios from "axios";
import {flag,PersiangoldName} from "./change";
import Currency from './Currency.js';
import WatingApi from './waite';


const gold = () => {
    const [items,setitems] = useState([]);

    const ApiUrl = "https://currency.jafari.li/json";

    useEffect(() => {
        axios({
            method: "GET",
            url: ApiUrl
        })
            .then(response => {
                setitems(response.data.item);
            })
            .catch(
                //error => console.log(error)
            );
    }, []);

    useEffect(() => {
        //console.log(items);
    }, [items]);

    return (
        <div className="cards-main">
            <h3 className="heading_title">قیمت فلزات گران بها :</h3>
            {
                items.length === 0 ? (
                    <WatingApi />
                ) : (
                    items.map((item, index) => {
                    return(
                      <Currency
                      index={index} 
                      currency_buy={item.Rate} 
                      currency_sell={item.Rate} 
                      courency_code={PersiangoldName[item.Name]}
                      courency_flag={flag[item.Name]}
                      />
                    )
                  })
                )
            }

            
        </div>
    );
}

export default gold;