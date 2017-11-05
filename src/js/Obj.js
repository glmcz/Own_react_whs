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

export default class Viewport extends Component{
    render() {
        return (
            <div>

                <Obj refApp={app => this.app = app} ref={instance => { this.app = instance; }} />
                <button onClick={() => { this.app.doSomething(); }}>Click</button>

                <Obj refApp={app => this.app = app}  /> //muzu vytvaret vice App instanci ale je nutne tam dat refApp

            </div>
        )
    }
}



