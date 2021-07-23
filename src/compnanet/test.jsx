
import { Component } from "react";
import {connect} from "react-redux"
class Test extends Component {
    render (){
        console.log("pro componant",this.props.pro)
        return (
            <span style={{display:"block" , marginTop: "100px"}}>
                test
                {/* {this.props.pro.map((a)=>{
                    // console.log(a)
                })} */}
            </span>
        )
    }
}

function mapDispatchToProps(state){
    return {
        pro:state,
    }
}

export default connect(mapDispatchToProps,null)(Test)