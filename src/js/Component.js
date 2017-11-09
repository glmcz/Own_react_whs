import * as UTILS from 'whs';
import * as WHS from 'whs';
import {Component} from 'react';
import  * as THREE from 'three';
import cube from './../assets/cow.obj'
import OBJ from 'three/examples/js/loaders/OBJLoader2';
export default class Sphere extends Component {
    constructor(props) {
        super(props);
        this.loader = new WHS.Sphere({
        geometry: {
            radius: 3,
            widthSegments: 32,
            heightSegments: 32
        },

            material: new THREE.MeshPhongMaterial({
            color: '123245'
        }),

            position: [0, 100, 0]
    });

        // this.loader = new WHS.Importer({
        //     loader: OBJ(),
        //     url: cube,
        //
        //
        //
        //
        //     position: [0, 100, 0]
        // });
       props.addTo(this.loader);

    }
    componentDidMount(){

    }
    render(){
        return(
           null
        )

    }


}
