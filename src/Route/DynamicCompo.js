import React, { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {Store} from "../Component/StoreCompo"
function DynamicCompo(){
    const id =useParams().id;
    const [contextData] = useContext(Store);
    const Navi = useNavigate();
    console.log(id)
    console.log(contextData)
    return(
     <div>
        {contextData.filter((data) => data.id === id).map((item,index) =>{
          console.log(item)
          return(
            <>
            
            <h2>{item.title}</h2>
            <img src={item.img} alt="not found" width={"300"} height={"200"}  />
                
                <h2>{item.cont}</h2>

                <button onClick={() => Navi(-1)}>Back</button>
                </>
          )  
        })}
     </div>   
    )
}
export default DynamicCompo