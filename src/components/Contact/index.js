import * as React from 'react';
import {Component} from "react";
import './styles.scss';
import ReCAPTCHA from "react-google-recaptcha/lib/esm/recaptcha-wrapper";
import axios from 'axios';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {
                name: '',
                email: '',
                message: '',
                recaptcha: null,
            },
            sent: false,
            error: false,
            loading: false
        }
        this.recaptchaRef = React.createRef();
    }

    captchaCallbackExpired() {
        console.log('expired')
        this.setState({model: {...this.state.model, recaptcha: null}});
    }

    captchaCallbackVerify() {
        console.log('verify')
    }

    sendMessage() {
        const recaptcha = this.recaptchaRef.current.getValue();
        const self = this;
        let errorMessage = false;
        if(this.state.model.name === '')
            errorMessage = 'Name is required';
        else if (this.state.model.email === '')
            errorMessage = 'E-mail is required';
        else if (recaptcha === null)
            errorMessage = 'Recaptcha validation is required';

        this.setState({error: errorMessage})

        console.log('sendMessage')
        console.log(this.state.model.recaptcha)
        if (errorMessage !== false) {
            setTimeout(function () {
                self.setState({error: false})
            }, 3000);
        }
        else {
            console.log('passed')
            this.setState({loading: false});
            this.state.model.recaptcha = recaptcha;
            axios.post('https://youssefhamdane.com/backend/send-email.php', this.state.model)
                .then(function (response) {
                    console.log(response);
                    self.setState({sent: true});
                    setTimeout(function () {
                        self.setState({sent: false});
                    }, 3000);
                })
                .catch(function (error) {
                })
                .finally(function () {
                    self.setState({loading: false});
                });
        }
    }

    render() {
        return (
            <div className="comp-contact container">
                <div className="section-header">
                    <h1 className="title">Get In Touch</h1>
                    <p className="description">
                        Have a question? Concern? Request? Feel free to contact me through my e-mail address
                        <a href="mailto:youssef0hamdane@gmail.com"> youssef0hamdane@gmail.com</a> or form below.
                    </p>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" name="name"
                                       onChange={(ev) => this.setState({
                                           model: {
                                               ...this.state.model,
                                               name: ev.target.value
                                           }
                                       })}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="E-mail" name="email"
                                       onChange={(ev) => this.setState({
                                           model: {
                                               ...this.state.model,
                                               email: ev.target.value
                                           }
                                       })}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Message" name="message" rows="5"
                                          onChange={(ev) => this.setState({
                                              model: {
                                                  ...this.state.model,
                                                  message: ev.target.value
                                              }
                                          })}/>
                            </div>

                            <div className="form-group">
                                <ReCAPTCHA
                                    ref={this.recaptchaRef}
                                    sitekey="6LdkfqwcAAAAAOWO_TIaUeuPw24DxzkpYv83Yil8"
                                    onExpired={this.captchaCallbackExpired}
                                    onChange={this.captchaCallbackVerify}
                                    theme="light"
                                    size="normal"
                                    tabindex="0"
                                />
                            </div>
                            <div className="submit-form">
                                <button className="btn btn-submit" onClick={this.sendMessage.bind(this)}
                                        disabled={this.state.loading}>Submit
                                </button>
                            </div>
                            {this.state.error &&
                                <div className="alert alert-danger" role="alert">
                                    {this.state.error}
                                </div>
                            }
                            {this.state.sent &&
                                <div className="alert alert-success" role="alert">
                                    Your message has been sent!
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}