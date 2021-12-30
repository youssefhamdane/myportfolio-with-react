import * as React from 'react';
import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './styles.scss';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileMenuActive: false,
            showHeader: true,
            lastScrollPosition: 0,
            year: new Date().getFullYear(),
            menuTransitionCompleted: 'completed',
        };
    }

    componentDidMount() {
       window.addEventListener('scroll', this.onScroll.bind(this))
    }

    componentWillUnmount() {
       window.removeEventListener('scroll', this.onScroll.bind(this))
    }

    switchSection(routeLink) {
        this.setState({menuTransitionCompleted: ''});
        document.body.classList.add("transition-active");
        const self = this
        setTimeout(function () {
            self.props.history.push(routeLink)
            self.setState({
                menuTransitionCompleted: 'completed',
                mobileMenuActive: false,
            });
            return document.body.classList.remove("transition-active");
        }, 2000);
    }

    onScroll() {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) {
            return
        }
        if (Math.abs(currentScrollPosition - this.state.lastScrollPosition) < 60) {
            return
        }
        this.setState({showHeader:currentScrollPosition < this.state.lastScrollPosition})
        this.setState({lastScrollPosition:currentScrollPosition})
    }

    showMobileMenu() {
        this.setState({menuTransitionCompleted: ''});
        document.body.classList.add("transition-active");
        const self = this;
        setTimeout(function () {
            self.setState({
                menuTransitionCompleted: 'completed'
            });
            self.setState(({ mobileMenuActive }) => ({ mobileMenuActive: !mobileMenuActive }));

            return document.body.classList.remove("transition-active");
        }, 2000);
    }
    render() {
        return (
            <header>
                <div className={`container fixed-top ${!this.state.showHeader ? 'hidden-header' : ''}`}>
                    <nav className="navbar navbar-expand p-0">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${!this.state.showHeader ? 'hidden-header' : ''} ${this.props.location.pathname === '/' ? 'active' : ''}`}>
                                <button className="btn nav-link" onClick={()=>(this.switchSection('/'))}>About</button>
                            </li>
                            <li className={`nav-item ${this.props.location.pathname === '/skills' ? 'active' : ''}`}>
                                <button className="btn nav-link" onClick={()=>(this.switchSection('/skills'))}>Skills</button>
                            </li>
                            <li className={`nav-item ${this.props.location.pathname === '/projects' ? 'active' : ''}`}>
                                <button className="btn nav-link" onClick={()=>(this.switchSection('/projects'))}>Projects</button>
                            </li>
                            <li className={`nav-item ${this.props.location.pathname === '/contact' ? 'active' : ''}`}>
                                <button className="btn nav-link" onClick={()=>(this.switchSection('/contact'))}>Contact</button>
                            </li>
                        </ul>
                    </nav>
                    <div onClick={this.showMobileMenu.bind(this)}
                         className={`mobile-menu-btn ${this.state.mobileMenuActive ? 'close' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`mobile-menu ${this.state.mobileMenuActive ? 'active' : ''}`}>
                    <ul className="menu">
                        <li className={`nav-item ${this.state.activeRoute === '/' ? 'active' : ''}`}>
                            <button className="btn nav-link" onClick={()=>(this.switchSection('/'))}>About</button>
                        </li>
                        <li className={`nav-item ${this.state.activeRoute === '/skills' ? 'active' : ''}`}>
                            <button className="btn nav-link" onClick={()=>(this.switchSection('/skills'))}>Skills</button>
                        </li>
                        <li className={`nav-item ${this.state.activeRoute === '/projects' ? 'active' : ''}`}>
                            <button className="btn nav-link" onClick={()=>(this.switchSection('/projects'))}>Projects</button>
                        </li>
                        <li className={`nav-item ${this.state.activeRoute === '/contact' ? 'active' : ''}`}>
                            <button className="btn nav-link" onClick={()=>(this.switchSection('/contact'))}>Contact</button>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/youssef-hamdane/" target="_blank"
                           className="btn btn-primary m-2">
                            <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                        </a>
                        <a href="https://github.com/youssefhamdane" target="_blank" className="btn btn-primary m-2">
                            <FontAwesomeIcon className="icon" icon={faGithub}/>
                        </a>
                    </div>
                    <div className="mobile-footer">
                        <button className="btn nav-link" disabled="">Youssef Hamdane © {this.state.year} All Rights Reserved.
                        </button>
                    </div>
                </div>
                <div className={`menu-transition ${this.state.menuTransitionCompleted}`}>
                    <i className="menu-bg top"></i>
                    <i className="menu-bg middle"></i>
                    <i className="menu-bg bottom"></i>
                </div>
            </header>
        );
    }
}