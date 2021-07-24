import {Add_toCart , remov ,AddCount ,RemovCount} from "./type"
import data from "./data.js"
import { ReactReduxContext } from "react-redux"



const a7a = [...data]


const reduser = (state= [...a7a], action )=>{
    
    let redusers = []
    switch (action.type){
        
        case Add_toCart :
            // redusers = [...state , {name:action.name, prise: action.prise , id : Math.random()}]
            redusers= [...state]
            const index= redusers.indexOf(action.id)
            console.log("red",index)
            redusers[index]={ ...redusers[index] };
            console.log(redusers[index])
            redusers[index].inCart = true;
           
            console.log("kl",redusers)
            return redusers;
        case remov :
            let red= [...state]
            let ndex =red.indexOf(action.id);
            red[ndex]={ ...red[ndex] };
            red[ndex].inCart = false ;
            console.log(red[ndex])
            
            return [ ...red];
        case AddCount :
            redusers = [...state]
            let n = redusers.indexOf(action.id)
            redusers[n].count ++
            return redusers ;
        case RemovCount :
            redusers = [...state]
            let ni = redusers.indexOf(action.id)
            redusers[ni].count --
            return redusers
        default :
        console.log("reduser",state)
        return state
    }
}

export default  reduser