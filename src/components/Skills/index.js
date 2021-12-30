import * as React from 'react';
import {Component} from "react";
import './styles.scss';
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Skills extends Component {
    render() {
        return (
            <div className="comp-skills container">
                <div className="section-header">
                    <h1 className="title">My Skills</h1>
                    <p className="description">
                        I am a Web developer with experience in building websites and web applications.
                        I do both Frontend and Backend and have professional experience working with PHP, Laravel,
                        Wordpress and Vue . I also have experience working in mobile apps using React native, Cordova,
                        Android native.
                        furthermore I have good understanding in most web developement related fields like SEO, UI
                        design, Software design, Web Server management..
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-sm-12 d-flex align-items-stretch">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Programming Languages</h5>
                                <h6 className="card-subtitle mb-2">Mastered</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        PHP
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Javascript
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Typescript
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        SQL
                                    </li>
                                </ul>
                                <h6 className="card-subtitle mb-2">Medium level</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Java
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Python
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        C
                                    </li>
                                </ul>
                                <h6 className="card-subtitle mb-2">Used it few time</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        C#
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Shell linux
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        PL/SQL
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 d-flex align-items-stretch">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Frameworks/Libraries</h5>
                                <h6 className="card-subtitle mb-2">Mastered</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Laravel
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        WordPress
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Codeigniter
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Vue.js
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Bootstrap
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        jQuery
                                    </li>
                                </ul>
                                <h6 className="card-subtitle mb-2">Used it few time</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Angular
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        React native
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Phaser
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Framework7
                                    </li>
                                </ul>
                                <h6 className="card-subtitle mb-2">Related</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        REST API
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        JSON
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        XML
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 d-flex align-items-stretch">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Database</h5>
                                <h6 className="card-subtitle mb-2">Mastered</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        MySQL
                                    </li>
                                </ul>
                                <h6 className="card-subtitle mb-2">Medium level</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        MongoDB
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Oracle SQL
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        SQLite
                                    </li>
                                </ul>
                                <h6 className="card-subtitle mb-2">Used it few time</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        SQL Server
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 d-flex align-items-stretch">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Servers Related</h5>
                                <h6 className="card-subtitle mb-2">Skills</h6>
                                <ul className="list-data rows">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Manage Web servers (Apache, Nginx..)
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Domains DNS management
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Deployment of web/mobile applications
                                    </li>
                                </ul>
                                <h6 className="card-subtitle mb-2">Tools</h6>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Git
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Github
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Docker
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        WHM/CPanel
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Virtualmin
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Cloudflare
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 d-flex align-items-stretch">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Mobile</h5>
                                <ul className="list-data rows">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Native applications - Android(Java)
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Cordova Hybrid applications - Android/IOS
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        React Native applications - Android/IOS
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 d-flex align-items-stretch">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Other</h5>
                                <ul className="list-data">
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        SEO
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        UML
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        UI design
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Game dev
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Machine learning
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faAngleRight}/>
                                        Familiar with Agile Scrum
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}