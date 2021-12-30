import * as React from 'react';
import {Component} from "react";
import './styles.scss';
import routes from "../../routes";
import {Route, Switch} from "react-router";
export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    {routes.map((route, i) => (
                        <Route exact
                            path={route.path}
                            key={i}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </main>
        )
    }
}