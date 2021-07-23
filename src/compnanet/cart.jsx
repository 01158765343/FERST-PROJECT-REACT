import React, { Component } from "react"
import { connect} from "react-redux"
import {remo ,ACount ,RCount} from "../redux/action"
import "../cart.css"
class Cart extends Component{
    removeA =(e)=>{
        e.preventDefault();
                          
        let a= e.target.getAttribute("id")
        this.props.remo(a)
    }
    Total=()=>{
       
        // let a =this.props.pro.map((m)=>{
        //     if (m.count > 0){
        //        return m.itemPrice * m.count
        //     }
        // })
        // return a 
    }
    render (){
        const a = this.props.pro.map((m)=>{
            if(m.inCart == true){
                return (
                    <div  className="row " key={m.itemId}>
                        <i className="col-4 hot" >{m.itemName}</i>
                        <i className="col-4 hot" >{m.itemPrice} $</i>
                        <i className="col-1 hot">{m.count}</i>
                        <button className="col-1 hot"  onClick={() =>this.props.RCount(m)}>-</button>
                        <button className="col-1 hot"  onClick={() =>this.props.ACount(m)}>+</button>
                        <button className="col-1 hot"  onClick={() =>this.props.remo(m)}>xxx</button>
                    </div>
                )
            }
            
        })
         
        return (
            <div className="itemss">
                { a==""  ? "no item add " : a}
                <i>{this.Total()}</i>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        pro:state
    }
}

export default connect(mapStateToProps,{remo, ACount ,RCount})(Cart)