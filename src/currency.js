import React, { Component } from 'react';
import data from "./data"; 




class currency extends Component {
	render() {
		return (
            <div>
            {
                data.data.map((data, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <div href={data.title}>
                                </div>
                                <div>
                                    <div>
                                        
                                    </div>
                                       
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        );
    }
} 
export default currency;