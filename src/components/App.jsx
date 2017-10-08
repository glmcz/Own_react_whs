import React from "react";

require("!style-loader!css-loader!sass-loader!./App.scss");
import OBJ from './ObjLoader'
const reactLogo = require('./react_logo.svg');

class App extends React.Component {
    render() {
        return <div className="app">
            <h1>Hello World!</h1>
            <p>Foo to the bar</p>
            <OBJ/>
            <img src={reactLogo}/>
        </div>;
    }
}

export default App;
