import React, { Component } from 'react';
import isp from '../assets/ISP.png'



export default class Hello extends Component {
    render() {
        return (
            <div>
            Hello from react
                <img src={isp}/>

        </div>

    );
    }
}