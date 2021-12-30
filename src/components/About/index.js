import * as React from 'react';
import {Component} from "react";
import './styles.scss';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBuilds: [
                {
                    title: "Mobile Developer",
                    class: "down"
                },
                {
                    title: "Frontend Developer",
                    class: "down"
                },
                {
                    title: "Backend Developer",
                    class: "down"
                },
                {
                    title: "Fullstack Developer",
                    class: "down"
                }
            ],
            currentBuild: 0
        };

        this.titleBox = React.createRef();
        this.swapText = React.createRef();
        this.mask = React.createRef();
    }

    componentDidMount() {
        const self = this;
        this.swap(self);
        this.swapIntervalId = null;
        this.swapInterval = () => (this.swapIntervalId = setInterval(()=>(this.swap(self)), 2400));
        setTimeout(this.swapInterval, 0);
    }

    componentWillUnmount() {
        clearInterval(this.swapIntervalId);
    }

    swap(self) {
        if (self.state.currentBuild > 0) {
            self.state.listBuilds[self.state.currentBuild - 1].class = "";
            self.setState({listBuilds: self.state.listBuilds})

        } else {
            self.state.listBuilds[self.state.listBuilds.length - 1].class = "";
            self.setState({listBuilds: self.state.listBuilds})

        }

        self.state.listBuilds[self.state.currentBuild].class = "";

        self.setState({listBuilds: self.state.listBuilds})

        if (self.state.currentBuild < self.state.listBuilds.length - 1)
            self.setState({currentBuild: self.state.currentBuild + 1})
        else
            self.setState({currentBuild: 0})

        self.state.listBuilds[self.state.currentBuild].class = "active";
        self.setState({listBuilds: self.state.listBuilds})
    }

    render() {
        return (
            <div className="comp-about container">
                <div className="content">
                    <div className="title-box" ref={this.titleBox}>
                        Hello! My name is<br/>
                        <span className="name">Youssef Hamdane</span> and I'm
                        <div className="mask" ref={this.mask}/>
                    </div>
                    <div className="swap-text" ref={this.swapText}>
                        {
                            this.state.listBuilds.map((build, index) =>
                                (
                                    <div key={index} className={`slide ${build.class}`}>
                                        <div className="panel">
                                            <div className="top" data-back={build.title}/>
                                            <div className="bottom" data-back={build.title}/>
                                        </div>
                                    </div>
                                ))
                        }

                    </div>
                </div>
            </div>
        )
    }
}