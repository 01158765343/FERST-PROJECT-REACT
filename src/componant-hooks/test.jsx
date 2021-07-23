import React ,{ useState ,useEffect} from "react"

function Test (){
    const [ name , edetaName ] =useState("eldeeb")

    useEffect(()=>{
        console.log(name)
        document.title=name
    })

    const ed = ()=>{
       name=="eldeeb"? edetaName ("mohammed eldeeb"):edetaName ("eldeeb")
    }
    
    return (
        <span>{name}<button onClick={ed}>edeet name</button></span>
    )
}

export default Test