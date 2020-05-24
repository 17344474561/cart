import React, { Component } from 'react'
import { Switch , Redirect , Route , BrowserRouter } from "react-router-dom"
import { Home } from "./assembly"
import "@/utils/rem"
import "@/utils/reset.css"


export default class Router extends Component {
    render() {
        return (
            <div className="router">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
