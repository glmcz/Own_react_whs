import React, { Component } from 'react';
import * as THREE from 'three';
import OBJLoader from "three-react-obj-loader";
import * as assets from './public/assets/';

let renderer, scene, camera;

class ObjViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path : ''
        }
    }

    onClick(e){
        this.setState({
            path: this.state.path
        })


    }

    componentDidMount() {
        console.log(assets);

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

        renderer = new THREE.WebGLRenderer({ canvas: this.refs.threeCanvas, alpha: true });
        renderer.setSize(500, 400);

        camera.position.z = 10;

        var objLoader = new OBJLoader();
        objLoader.load('./assets/cube.obj', function (object) {
            object.position.y = -3;
            scene.add(object);
        });



        var light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

        this._render();
    }

    _render = () => {
        requestAnimationFrame(this._render);
        renderer.render(scene, camera);
    }

    render() {
        return (
            <div>
                <canvas ref="threeCanvas">
                </canvas>
            </div>
        );
    }
}

export default ObjViewer;