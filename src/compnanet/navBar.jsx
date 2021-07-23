import React, { Component } from "react"
import {NavLink} from "react-router-dom"

class Nav extends Component {
    render (){
        return (
            <nav className="row">
                
            
                <NavLink className="col-6" to="/home">home</NavLink>
            
                <NavLink className="col-6" to="/myCart">my cart</NavLink>       
            </nav>
        )
    }
}
export default Nav