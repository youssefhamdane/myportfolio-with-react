import * as React from 'react';
import {Component} from "react";
import './styles.scss';

export default class Background extends Component {

    constructor(props) {
        super(props);
        this.animatedBg = React.createRef();
    }
    componentDidMount() {
        const root = this.animatedBg.current;
        //const sliceSize = 400;
        const numberSlices = 5;
        const size = Math.sqrt(
            Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
        );
        const sliceSize = Math.ceil(size/numberSlices);
        //const numberSlices = Math.ceil(size / sliceSize);

        const startPointX = (window.innerWidth - size) / 2;
        const startPointY = (window.innerHeight - size) / 2;

        root.style.left = startPointX + "px";
        root.style.top = startPointY + "px";
        root.style.width = size + "px";
        root.style.height = size + "px";

        let posY = 0;
        let posX = 0;
        let hasSubs = true;
        for (var i = 0; i < numberSlices; i++) {
            for (var j = 0; j < numberSlices; j++) {
                const slice = this.createSlice(hasSubs);
                slice.style.width = sliceSize + "px";
                slice.style.height = sliceSize + "px";
                slice.style.top = posY + "px";
                slice.style.left = posX + "px";
                root.append(slice);
                posX += sliceSize;
            }
            hasSubs = !hasSubs;
            posY += sliceSize;
            posX = 0;
        }
    }

    createSlice (hasSubs) {
        const slice = document.createElement("div");
        slice.classList.add("slice");
        if (hasSubs) {
            slice.classList.add("has-subs");
            const secondSubSlice1 = document.createElement("div");
            secondSubSlice1.classList.add("secondary-subslice", "sb1");
            secondSubSlice1.append(document.createElement("div"));

            const secondSubSlice2 = document.createElement("div");
            secondSubSlice2.classList.add("secondary-subslice", "sb2");
            secondSubSlice2.append(document.createElement("div"));

            const secondSubSlice3 = document.createElement("div");
            secondSubSlice3.classList.add("secondary-subslice", "sb3");
            secondSubSlice3.append(document.createElement("div"));

            const secondSubSlice4 = document.createElement("div");
            secondSubSlice4.classList.add("secondary-subslice", "sb4");
            secondSubSlice4.append(document.createElement("div"));

            slice.append(secondSubSlice1);
            slice.append(secondSubSlice2);
            slice.append(secondSubSlice3);
            slice.append(secondSubSlice4);
        }

        const PrimarySubSlice = document.createElement("div");
        PrimarySubSlice.classList.add("primary-subslice");
        PrimarySubSlice.append(document.createElement("div"));

        slice.append(PrimarySubSlice);

        return slice;
    }
    render() {
        return (
            <div>
                <div ref={this.animatedBg} className="animated-bg"/>
            </div>
        )
    }
}