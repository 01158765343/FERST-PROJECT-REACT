import {Add_toCart ,remov , AddCount ,RemovCount} from "./type"


export const addCart =(id)=>{
    const action = {
        type :Add_toCart,
        id
    }
    return action
}

export const remo =(id)=>{
    const action = {
        type :remov,
        id
    }
    return action
}

export const ACount =(id)=>{
    const action = {
        type :AddCount,
        id
    }
    return action
}

export const RCount =(id)=>{
    const action = {
        type :RemovCount,
        id
    }
    return action
}