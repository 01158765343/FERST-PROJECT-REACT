import React, { Component } from "react"
import {connect} from  "react-redux"

import  "./ite-ms.css"
import {addCart} from "../redux/action"
class Itms extends Component {
    
    oadd=(e)=>{
        e.preventDefault()
        let a = e.target.getAttribute("id")
        console.log(a)
        this.props.addCart(a)
    }
    render (){
        const see=
            this.props.pro.map((m)=>(
                <div className="col-6 item " key={m.itemId}>
                    <img  src={m.itemImage} alt="sdfdsf"></img>
                    <h6 className="h">{m.itemName}<span>{m.itemPrice}$</span></h6>
                    <button onClick={()=> this.props.addCart(m)} id={m.itemId}>add to cart</button>
                </div>
            ))
        
        // console.log(this.props.pro[0].itemImage)
        return (
            <div className="hak">
                <div className="row ">
                    {see}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        pro : state,
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         addd : ()=> dispatch(addCart)
//     }
// }

export default connect(mapStateToProps,{addCart})(Itms)