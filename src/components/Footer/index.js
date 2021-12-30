import * as React from 'react';
import {Component} from "react";
import './styles.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFooter: true,
            lastScrollPosition: 0,
            year:  new Date().getFullYear()
        }
    }

    componentDidMount () {
        window.addEventListener('scroll', this.onScroll.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll.bind(this))
    }
    onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) {
            return
        }
        if (Math.abs(currentScrollPosition - this.state.lastScrollPosition) < 60) {
            return
        }
        this.setState({showFooter:currentScrollPosition < this.state.lastScrollPosition})
        this.setState({lastScrollPosition:currentScrollPosition})
    }

    render() {
        return (
            <footer className={`fixed-bottom ${!this.state.showFooter?'hidden-footer':''}`}>
                <div className="container">
                    <nav className="navbar navbar-expand p-0">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="btn nav-link" disabled="">Youssef Hamdane © {this.state.year} All Rights Reserved.</button>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.linkedin.com/in/youssef-hamdane/" target="_blank" className="btn nav-link">
                                    <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://github.com/youssefhamdane" target="_blank" className="btn nav-link">
                                    <FontAwesomeIcon className="icon" icon={faGithub}/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}