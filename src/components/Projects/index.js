import * as React from 'react';
import {Component} from "react";
import './styles.scss';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProject:0
        }
    }
    switchProject(index) {
        if(this.state.activeProject!==index) {
            this.setState({activeProject:index})
        }
    }
    render() {
        const projects = [
            {
                'title': 'School Quiz App',
                'details': 'Android app installed in the tablets of school, and students can pass quizzes of the books in the library as follows:<br/>' +
                    'Students connect to their account using QR code in their school card.<br/>' +
                    'And then they can see their score and ranking, scan QR code of a book to pass its quiz and earn or lose points.<br/>' +
                    'In the backend there is web application to manage students and books, quizzes, statistics, print QR code cards and ranking posters.',
                'banner': 'banner-quizz.jpg',
                'tools': [
                    'Laravel',
                    'HTML/CSS/JS',
                    'Java',
                    'Android SDK'
                ],
            },
            {
                'title': 'News App PAMGROUP',
                'details': 'React Native News app for Android and IOS that works with WordPress REST API and Firebase Push Notification.<br/>' +
                    'A WordPress plugin to customize menu categories of the app.',
                'banner': 'banner-pam.jpg',
                'tools': [
                    'WordPress',
                    'React Native(Android/IOS)',
                    'Firebase'
                ],
            },
            {
                'title': 'News App ATLASINFO',
                'details': 'Hybrid News app for Android and IOS that works with WordPress REST API and Firebase Push Notification.<br/>' +
                    'A WordPress plugin to customize menu categories of the app.' +
                    '<br/><a class="btn btn-primary btn-sm" href="https://play.google.com/store/apps/details?id=com.atlasinfo.app" target="_blank">In Google Play</a> ' +
                    '<a class="btn btn-primary btn-sm ml-1 " href="https://apps.apple.com/us/app/atlasinfo/id1495363393?l=lv" target="_blank">In App Store</a>',
                'banner': 'banner-atlasinfo.jpg',
                'tools': [
                    'WordPress',
                    'Vue.js',
                    'Cordova(Android/IOS)',
                    'Firebase',
                    'APN'
                ],
            },
            {
                'title': 'Automotive expert management system',
                'details': 'An automotive expert management system that includes: ' +
                    'Missions management, Generate documents. Photos and documents saving, Calculate compensation, ' +
                    'Users multiple roles, Tracking, Statistics, E-mail/SMS Notifications <br/>' +
                    'A mobile app to receive missions notification to fill insured information and takes photos of accidents.<br/>' +
                    'Deployed in Google App Engine.',
                'banner': 'banner-ems.jpg',
                'tools': [
                    'Codeigniter',
                    'HTML/CSS/JS',
                    'Cordova',
                    'Google Cloud App Engine, GC Storage, GC Database'
                ],
            },
            {
                'title': 'Transport management system',
                'details': 'A Transport management system to manage packages transport and track it.<br/>' +
                    'A mobile app that enable customers to order package transport service(payment online with Stripe) and track their package.',
                'banner': 'banner-phoenix.jpg',
                'tools': [
                    'Laravel',
                    'HTML/CSS/JS',
                    'Vue.js',
                    'Cordova',
                ],
            },
            {
                'title': 'Meeting management system',
                'details': 'A web application to create, plan and join meetings integrated with customized Jitsi docker container.',
                'banner': 'banner-meeting.jpg',
                'tools': [
                    'Laravel',
                    'HTML/CSS/JS',
                    'Jitsi',
                    'Docker',
                ],
            },
        ]
        return (
            <div className="comp-projets container">
                <div className="section-header">
                    <h1 className="title">Some of my works</h1>
                    <p className="description">
                        I've done a lot of different projects in my professional careers and as freelancer,
                        I picked best projects that I've done as freelancer, feel free to contact me if you want check
                        demo of them.
                    </p>
                </div>
                <div className="projects">
                    {
                        projects.map((project, index) => (
                            <div key={index}
                                 className={`project ${this.state.activeProject === index ? 'active' : ''}`}
                                 onClick={() => (this.switchProject(index))}
                                 style={{backgroundImage: `url(${require('../../assets/' + project.banner)})`}}>
                                <div className="mask"/>
                                <div className="card">
                                    <img className="card-img-top" src={require('../../assets/' + project.banner)}/>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {project.title}
                                        </h5>
                                        <p className="card-text" dangerouslySetInnerHTML={{__html: project.details}}/>
                                    </div>
                                    <div className="card-footer">
                                        {
                                            project.tools.map((str, index) => ({ value: str})).map((tool) => (
                                                <div className="badge tool-badge" key={tool.value}>{tool.value}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="section-header">
                    <h1 className="title">Last work</h1>
                    <div className="card mt-3">
                        <img className="card-img-top" src={require('../../assets/banner-spinner-ufo.jpg')}/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Game : Spinner UFO
                            </h5>
                            <p className="card-text">
                                Spinner UFO is browser game I made it for <a
                                href="https://gamejolt.com/c/gamemaker/ogxgj" target="_blank">OperaGX game
                                jam</a> competition using gamemaker studio 2(first time) , I couldn't make it to the top
                                but was great experience.
                                <a className="btn btn-primary btn-sm"
                                   href="https://gamejolt.com/games/spinner-ufos/638706" target="_blank">Play It Now</a>
                            </p>
                        </div>
                        <div className="card-footer">
                            <div className="badge tool-badge">Gamemaker Studio 2</div>
                            <div className="badge tool-badge">GML</div>
                            <div className="badge tool-badge">Photoshop</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}