// import {
//     App,
//     SceneModule,
//     CameraModule,
//     RenderingModule,
//     OrbitControlsModule,
//     DefineModule,
//     PerspectiveCamera,
//     ElementModule,
// } from 'whs';
import * as WHS from 'whs';
// import * as THREE from 'three'
import React, { Component } from 'react';
// import Comp from './Component';

class Obj extends Component{
    constructor(props) {
        super(props);
        this.app = new WHS.App([
            new WHS.ElementModule(document.createElement('div'))
            // new WHS.SceneModule(),
            // new WHS.DefineModule('camera', new WHS.PerspectiveCamera({
            //     position: new THREE.Vector3(0, 10, 50)
            // ...
        ]);
        this.doSomething = this.doSomething.bind(this);

        props.refApp(this.app);
    }

    componentDidMount() {
        this.mount.appendChild(this.app.get('element'));

    }
    doSomething(){
        alert();
    }


    render() {
        return (
            <div ref={mount => this.mount = mount} >


            </div>
        )
    }
}


class Sphere extends Component {
    // PropTypes message = "aa";
    // var message = "aa";
    // handleChange(e) {
    //     this.props.onTemperatureChange(e.target.value);
    // }
    //
    // message = (message) =>{
    //     return this.props.message + message;
    // }
    constructor(props)
    {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
    }


        // this.loader = new WHS.Sphere({
        //     geometry: {
        //         radius: 3,
        //         widthSegments: 32,
        //         heightSegments: 32
        //     },
        //
        //     material: new THREE.MeshPhongMaterial({
        //         color: '123245'
        //     }),
        //
        //     position: [0, 100, 0]
        // });

    update(){
        this.props.onUpdate(this.refs.myinput.getDOMNode().value);
    }

    render(){
        return(
     <div>
           <input type="text" ref={myinput}/>
            <input type="button" onClick={this.update.bind(this)} value="Udated input" />
     </div>
        )
    }
}

class Child extends React.Component {

    constructor(props){
        super(props);
        this.handleChangeMessageChild = this.handleChangeMessageChild.bind(this);
    }
    handleChangeMessageChild(value){
        this.setState({value });
    }
    render() {
        return(
            <div>
                <p>I am a child</p>
                <button onClick={this.props.parentToggle}>Toggle</button>   // pokud chceme poslat dal props a pridavat tam dalsi data
                // tak se tam da identifikator parentToggle nebo jakekoliv jine jmeno s tim ze se musi shodovat s tim co bude v Parentu
                <p>{this.props.parentState}</p>

            </div>
        )
    }
}

export default class Viewport extends Component{

    constructor(props) {
        super(props);
        this.state=
        {
            message: "Neco tu je init"
        }
    }

    handleChangeMessage(){
        console.log("aaa");

    }
    render() {

        return (
            <div>

                <Obj refApp={app => this.app = app} ref={instance => { this.app = instance; }} />
                <button onClick={() => { this.app.doSomething(); }}>Click</button>

                <Obj refApp={app => this.app = app}  /> //muzu vytvaret vice App instanci ale je nutne tam dat refApp
                <Child parentToggle={this.handleChangeMessage} />  //pouzijeme Child a narveme do ni data z Parentu neboli z teto tridy
                <Child parentState={this.state.message} /> // to stejny jen s bez onClick udalosti

                {/*<Child onClick={this.handleChangeMessage} />*/}
                {/*<p> {this.state.message}</p>*/}

            </div>
        )
    }
}



